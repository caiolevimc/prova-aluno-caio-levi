

exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_PEDIDO_PRODUTO', table => {
        table.increments('id').primary()
        table.integer('tb_pedido_id').notNullable()
        table.integer('tb_produto_id').notNullable()
        table.integer('quantidade')
        table.double('valor_item')
        table.foreign('tb_pedido_id').references('id').inTable('TB_PEDIDO')
        table.foreign('tb_produto_id').references('id').inTable('TB_PRODUTO')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('TB_PEDIDO_PRODUTO')
};
