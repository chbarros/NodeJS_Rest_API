//npx knex seed:make produtos

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('produtos').del()
  await knex('produtos').insert([
    {id: 1, descricao: 'Whey Protein', marca: 'Growth', valor: 144},
    {id: 2, descricao: 'Creatina', marca: 'Adaptogen', valor: 139},
    {id: 3, descricao: 'Barra de Proteína', marca: 'Max', valor: 90},
    {id: 4, descricao: 'Pasta de Amendoim', marca: 'Dr.Peanut', valor: 62}
  ]);
};
