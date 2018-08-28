import express from 'express'
import config from '../config'
import middleware from '../middleware'
import initDb from '../db'

// Import router
import locations from '../controller/locations'

const router = express()

// Connect to db
initDb(db => {

  // Internal middleware
  router.use(middleware( {config, db} ))

  // API routes (/api)
  router.use('/locations', locations( db ))

})

export default router
