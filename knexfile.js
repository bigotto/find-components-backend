const path = require('path');

module.exports = {
    client: 'pg',
    connection: process.env.DB_CONNECTION || {
        host : process.env.DB_HOST,
        database : process.env.DB_DATABASE,
        user : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
      },
    ssl: {
        rejectUnauthorized: false
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    useNullAsDefault: true,
}
