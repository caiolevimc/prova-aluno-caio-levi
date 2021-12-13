
exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_PRODUTO', table => {
        table.increments('id').primary()
        table.string('descricao').notNullable()
        table.double('preco', 4, 2).notNullable()
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('TB_PRODUTO')
};
