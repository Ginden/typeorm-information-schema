# typeorm-information-schema

Simple module that exposes all views
in [`information_schema`](https://www.postgresql.org/docs/14/information-schema.html)
and [`pg_catalog`](https://www.postgresql.org/docs/14/catalogs.html) as [TypeORM](https://typeorm.io/#/)
entities (`ViewEntity`).

Currently only Postgres is supported, but support for other
databases [with `information_schema`](https://www.sql-workbench.eu/dbms_comparison.html) is possible.

## Usage

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
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "admin",
  database: "test",
  entities: [
    ...entities,
    Photo
  ],
  synchronize: true,
  logging: false
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
