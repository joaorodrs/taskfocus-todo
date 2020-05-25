
exports.up = function(knex) {
    return knex.schema.createTable('projects', function(table) {
        table.string('projectName').notNullable()
        table.string('projectColor').notNullable()
        table.string('projectPriority').notNullable()

        table.string('username').notNullable()
        table.foreign('username').references('username').inTable('users')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('projects')
};
