/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('post', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('(UUID())'));
    table.string('caption').notNullable();
    table.integer('rating').notNullable().defaultTo(0);
    table.string('picture').notNullable();
    table
      .uuid('user_id')
      .references('id')
      .inTable('user')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table
      .uuid('landmark_id')
      .references('id')
      .inTable('landmark')
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
  return knex.schema.dropTable('post');
};
