const knex = require('knex')

const db = knex({
    client: 'pg',
    connection:  process.env.DB_CONNECTION || {
      host : process.env.DB_HOST,
      database : process.env.DB_DATABASE,
      user : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
    },
    ssl: {
      rejectUnauthorized: false
  },
});

module.exports = db;