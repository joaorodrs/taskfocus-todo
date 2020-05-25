exports.up = function(knex) {
    return knex.schema.createTable('tasks', function(table) {
        table.increments()

        table.string('taskTitle').notNullable()
        table.string('taskPriority').notNullable()
        table.string('pomodoros').notNullable()
        table.string('taskDescription')

        table.string('username').notNullable()
        table.foreign('username').references('username').inTable('users')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('tasks')
};
