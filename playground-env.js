const typeorm = require('typeorm');
const {entities, InformationSchema, PgCatalog} = require('./dist/postgres/14');
const {createConnection} = require("typeorm");
(async () => {
    const connection = await createConnection({
        type: 'postgres',
        host: 'postgres14',
        port: 5432,
        username: 'FOOBAR',
        password: 'FOOBAR',
        database: 'FOOBAR',
        entities: [...entities]
    });



    return {
        connection,
        InformationSchema,
        PgCatalog,
        entities,
        getRepository: connection.getRepository.bind(connection),
        pgQuery: connection.query.bind(connection),
        entityMetadatas: connection.entityMetadatas,
        findMetadata: connection.findMetadata.bind(connection)
    };
})()
    .then(env => Object.assign(global, env))
    .then(() => console.log(`Playground enviroment succesfully initalized`))
    .catch(e => {
    setImmediate(() => {
        throw e;
    })
})
