exports.up = function up(knex) {
    return knex.schema.createTable('gavetas', table => {
        table.increments('id').primary();
        table.integer('component').references('id').inTable('components');
        table.integer('number').notNullable();
        table.string('position', 2).notNullable();
    });
}

exports.down = function down(knex) {
    return knex.schema.dropTable('gavetas');
}
