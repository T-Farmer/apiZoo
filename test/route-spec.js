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

  describe('post a new animal to the database', () => {
    it('should post a new animal', () => {
      return chai.request(sever)
      .post('/api/v1/animals/new')
      .then( (res) => {
        res.should.have.status(201)
      })
    })
  })

  describe('return all keepers', () => {
    it('should return all keepers', () => {
      return chai.request(sever)
      .get('/api/v1/keepers')
      .then( (res) => {
        res.should.have.status(200)
      })
    })
  })

  describe('post a new keeper to the database', () => {
    it('should post a new keeper', () => {
      return chai.request(sever)
      .post('/api/v1/keppers/new')
      .then( (res) => {
        res.should.have.status(201)
      })
    })
  })

  describe('return all animals for an keeper', () => {
    it('should return the animals for an keeper', () => {
      return chai.request(sever)
      .get('/api/v1/animals/:id')
      .then( (res) => {
        res.should.have.status(200)
      })
    })
  })

  describe('return all the keepers for a animal', () => {
    it('should return the keepers for an animal', () => {
      return chai.request(sever)
      .get('/api/v1/keepers/:id')
      .then( (res) => {
        res.should.have.status(200)
      })
    })
  })

  describe('check to see if keeper was removed', () => {
    it('should see if a keeper was removed', () => {
      return chai.request(sever)
      .get('/api/v1/keepers/:id')
      .then( (res) => {
        res.should.have.status(200)
      })
    })
  })

  describe('check to see if an animal was removed', () => {
    it('should see if an animal was removed', () => {
      return chai.request(sever)
      .get('/api/v1/animals/:id')
      .then( (res) => {
        res.should.have.status(200)
      })
    })
  })

  describe('patch animal information', () => {
    it('should see if animal information was patched', () => {
      return chai.request(sever)
      .patch('/api/v1/animals/:new')
      .then( (res) => {
        res.should.have.status(200)
      })
    })
  })

  describe('patch keeper information', () => {
    it('should see if keeper information was patched', () => {
      return chai.request(sever)
      .patch('/api/v1/keeper/:new')
      .then( (res) => {
        res.should.have.status(200)
      })
    })
  })

}) //end of describe Zoo Routes
