import * as InformationSchema from './information_schema';
import * as PgCatalog from './pg_catalog';

export const entities: Function[] = [...Object.values(InformationSchema), ...Object.values(PgCatalog)].filter(
  (v) => typeof v === 'function',
);

export { InformationSchema };
export { PgCatalog };
