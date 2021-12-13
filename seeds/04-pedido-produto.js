
/* Obs: Não consegui fazer o calcúlo altomárica usando o preço registrado em TB_PRODUTO */

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('TB_PEDIDO_PRODUTO').del()
    .then(function () {
      // Inserts seed entries
      return knex('TB_PEDIDO_PRODUTO').insert([
        {id: 1,  tb_pedido_id: 1,tb_produto_id: 1, quantidade: 10, valor_item: 10 * 5.54},
        {id: 2,  tb_pedido_id: 1,tb_produto_id: 2, quantidade: 10, valor_item: 10 * 8.90},
        {id: 3,  tb_pedido_id: 2,tb_produto_id: 3, quantidade: 5, valor_item: 5 * 8},
        {id: 4,  tb_pedido_id: 2,tb_produto_id: 4, quantidade: 5, valor_item: 5 * 5}
      ]);
    });
};



