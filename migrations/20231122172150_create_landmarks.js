/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('landmark', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('(UUID())'));
    table.string('landmark_name').notNullable();
    table
      .uuid('country_id')
      .references('id')
      .inTable('country')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table
      .uuid('city_id')
      .references('id')
      .inTable('city')
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
