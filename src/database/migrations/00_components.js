exports.up = function up(knex) {
    return knex.schema.createTable('components', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
    });
}

exports.down = function down(knex) {
    return knex.schema.dropTable('components');
}
