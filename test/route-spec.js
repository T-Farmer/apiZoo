'use strict';

process.env.NODE_ENV = 'test'

const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../app.js')
const { knex } = require('../db/database')
chai.use(chaiHttp)

describe('Zoo Routes', () => {
  beforeEach( () => {
    return knex.migrate.rollback()
    .then( () => {
      return knex.migrate.latest()
    })
    .then( () => {
      return knex.seed.run()
    })
  })

  describe('return all animals', () => {
    it('should return all the animals', () => {
      return chai.request(server)
      .get('/api/v1/animals')
      .then( (res) => {
        res.should.have.status(200)
      })
    })
  })
}) //end of describe Zoo Routes
