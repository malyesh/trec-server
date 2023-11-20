/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('landmark', (table) => {
    table.increments('id').primary();
    table.string('landmark_name').notNullable();
    table
      .integer('country_id')
      .unsigned()
      .references('country.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table
      .integer('city_id')
      .unsigned()
      .references('city.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table
      .timestamp('updated_at')
      .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTable('landmark')
    .dropTable('city')
    .dropTable('country');
};
