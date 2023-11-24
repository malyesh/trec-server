/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable('user', (table) => {
      table.uuid('id').primary().defaultTo(knex.raw('(UUID())'));
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.string('email').notNullable();
      table.string('password').notNullable();
      table.string('picture').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table
        .timestamp('updated_at')
        .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    })
    .createTable('post', (table) => {
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
    })
    .createTable('favorite', (table) => {
      table.uuid('id').primary().defaultTo(knex.raw('(UUID())'));
      table
        .uuid('user_id')
        .references('id')
        .inTable('user')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table
        .uuid('post_id')
        .references('id')
        .inTable('post')
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
  return knex.schema.dropTable('favorite').dropTable('post').dropTable('user');
};
