/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable('post', (table) => {
    table.uuid('id').alter();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable('post', (table) => {
    // If your database doesn't support altering the data type, you might need to drop and recreate the column.
    table.dropColumn('id');
    table.integer('id').primary(); // Recreate the column with the original data type.
  });
};
