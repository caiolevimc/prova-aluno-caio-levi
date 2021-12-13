

exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_PEDIDO', table => {
        table.increments('id').primary()
        table.date('data_pedido').notNullable()
        table.integer('tb_cliente_id').notNullable()
        table.foreign('tb_cliente_id').references('id').inTable('TB_CLIENTE')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('TB_PEDIDO')
};
