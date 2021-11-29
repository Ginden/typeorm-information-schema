# typeorm-information-schema

Simple module that exposes all views
in [`information_schema`](https://www.postgresql.org/docs/14/information-schema.html)
and [`pg_catalog`](https://www.postgresql.org/docs/14/catalogs.html) as [TypeORM](https://typeorm.io/#/)
entities (`ViewEntity`).

Currently only Postgres is supported, but support for other
databases [with `information_schema`](https://www.sql-workbench.eu/dbms_comparison.html) is possible.

## Why?

I wanted to learn something new about Postgres internals, TypeORM internals and TypeScript.

## Usage

#### `information_schema`

Let's inspect columns of `Photo`:

```ts
import { createConnection } from "typeorm";
// We import from /postgres/14
// Main module exports these under name Postgres14
import { entities, InformationSchema } from 'typeorm-information-schema/postgres/14'

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100
  })
  name: string;

  @Column()
  isPublished: boolean;
}

const connection = await createConnection({
  type: "postgres",
  ...
});

console.log(
  await connection.getRepository(InformationSchema.Columns).find({
    where: {
      table_schema: 'public',
      table_name: 'photo'
    }
  })
);
```

### `pg_catalog`

```ts

import { createConnection } from "typeorm";
// We import from /postgres/14
// Main module exports these under name Postgres14
import { entities, PgCatalog } from 'typeorm-information-schema/postgres/14'

const connection = await createConnection({
  ...
});

console.log(
  await connection.getRepository(PgCatalog.PgStatActivity).find()
);

```

## Playground

Clone [this repository](https://github.com/Ginden/typeorm-information-schema) and run following commands (
requires `docker-compose`) to enter REPL.

Only Postgres 14 is supported right now.

```bash
npm ci
npx tsc
npm run playground:postgres:14
```

Then just type:

```js
await getRepository(InformationSchema.Columns).find({
    where: {
        table_schema: 'information_schema',
        table_name: 'columns'
    }
});
```

Following global variables are registered: `connection`, `InformationSchema`, `PgCatalog`, `entities`, `getRepository`
, `pgQuery` (bound `connection.query`), `findMetadata`.

## Relations in PgCatalog

Relations in `pg_catalog` follows following naming convention:

* If relation type is many-to-one and column field ends with `id`, relation will be named without `id` (eg. `srvid` will
  become `srv`)
* If relation type is many-to-one and column field doesn't end with `id`, relation will be named `${fieldName}_rel` (
  eg. `database` will become `database_rel`)
* If relation type is one-to-many, name corresponding to referenced entity will be chosen

## Comments

Many entities in `PgCatalog` for Postgres 14 has automatically generated comments.

## TODO

Planned:

* Support relations between views (eg.
  allow `getRepository(PgCatalog.PgStatActivity).find({relations: ['locks', 'locks.relation']})` to find locked tables)
