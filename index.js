const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: './database/DB_ATIVIDADE_06.db'
    },
    useNullAsDefault: true,
    pool: { min: 0, max: 10}
});

// Select

knex.select().table('TB_CLIENTE').then(data => {
    console.log('Tabela Clientes')
    console.log(data)
}).catch(err => console.log(err))

knex.select().table('TB_PRODUTO').then(data => {
    console.log('Tabela Produtos')
    console.log(data)
}).catch(err => console.log(err))

knex.select().table('TB_PEDIDO').then(data => {
    console.log('Tabela Pedidos')
    console.log(data)
}).catch(err => console.log(err))

knex.select().table('TB_PEDIDO_PRODUTO').then(data => {
    console.log('Tabela Pedidos-Produtos')
    console.log(data)
}).catch(err => console.log(err))


/*

Professor, aque estão o resto dos comandos do CRUD
Eu não executei porque as tabelas iam ficar diferentes do que é pedido mas estão tudo funcionando

// Insert

knex('TB_CLIENTE').insert([
    {id: 5, nome: "Caio"},
    {id: 6, nome: "Serena"}
]).then(() => {
    knex.select().table('TB_CLIENTE').then(data => console.log(data))
}).catch(err => console.log(err))

// Update

knex('TB_CLIENTE')
.where('id', '>', 4)
.update({
    nome: 'Karine',
    thisKeyIsSkipped: undefined    
}).then(() => {
    knex.select().table('TB_CLIENTE').then(data => console.log(data))
}).catch(err => console.log(err))


// Delete

knex('TB_CLIENTE').del().then(() => {
    knex.select().table('TB_CLIENTE').then(data => console.log(data))
}).catch(err => console.log(err))

*/

