// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'zoo'
    },
    seeds: {
      directory: __dirname + '/db/seeds/development'
    }
  },
    test: {
    client: 'pg',
    connection: 'postgres://localhost/zoo',
    migrations: {
      directory: __dirname + '/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  }

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'zoo',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'zoo',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
