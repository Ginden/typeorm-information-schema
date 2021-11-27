import { readFileSync } from 'fs';
import { factory, JSDoc } from 'typescript';
import { ColumnData, EntityData } from './generate-view-entities-for-postgres';
import { JSDOM } from 'jsdom';
import { join } from 'path';

const catalogFile = readFileSync(join(process.cwd(), 'artifacts', 'docs_postgres_14_catalogs.sgml.xml'), 'utf8');

const catalogsSgml: Document = new JSDOM(catalogFile, {
  contentType: 'text/xml',
}).window.document;

function findParentMatching(v: Element | null, selector: string): ParentNode | null {
  while (v) {
    if ((v as Element)?.matches(selector)) {
      return v;
    } else {
      v = v.parentNode as Element;
    }
  }
  return null;
}

const catalogSections: Record<string, Element> = Object.fromEntries(
  Array.from(catalogsSgml.querySelectorAll('INDEXTERM > PRIMARY')).map((v) => {
    return [v.textContent, findParentMatching(v, 'SECT1[ID]')];
  }),
);

function getEntityComment(section: Element): string | null {
  return section.querySelector('PARA')?.textContent ?? null;
}

function getColumnComment(section: Element, col: ColumnData): string | null {
  const table = section.querySelector('TABLE');
  if (!table) {
    return null;
  }

  const tableRow = Array.from(table.querySelectorAll('STRUCTFIELD'))
    .filter((v) => v.textContent?.trim() === col.column_name)
    .map((v) => findParentMatching(v, 'ENTRY[ROLE="catalog_table_entry"]'))
    .shift();
  if (!tableRow) {
    return null;
  }

  const description = Array.from(tableRow.querySelectorAll('PARA'))
    .filter((para) => !para.getAttribute('ROLE'))
    .shift();
  if (!description) {
    return null;
  }

  if (!description.textContent) {
    return null;
  }

  return (
    description.textContent
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean)
      .join('\n') ?? null
  );
}

export function getCommentsFor(entityData: EntityData, col?: ColumnData): JSDoc | null {
  if (entityData.version !== 14) {
    return null;
  }
  if (entityData.table_schema === 'pg_catalog' && catalogSections[entityData.table_name]) {
    const section = catalogSections[entityData.table_name];
    if (col) {
      const commentFromPostgres = getColumnComment(section, col);
      if (!commentFromPostgres) {
        return null;
      }
      return factory.createJSDocComment(commentFromPostgres);
    } else {
      const commentFromPostgres = getEntityComment(section);
      if (!commentFromPostgres) {
        return null;
      }
      return factory.createJSDocComment(commentFromPostgres);
    }
  }

  return null;
}
