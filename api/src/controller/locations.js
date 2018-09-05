import { Router } from 'express'
import Sequelize from 'sequelize'
import Location from '../models/location'

export default (db) => {
  let api = Router()

  // Create a location
  api.post('/', (req, res) => {
    const {
      name,
      description
    } = req.body

    Location(db, Sequelize).create({
      name: name,
      description: description
    }).then(location => res.status(200).json({
      data: location,
      message: 'New location has been created.'
    })).catch(error => res.json({
      data: [],
      error: error
    }))
  })

  // Get all locations
  api.get('/', (req, res) => {
    Location(db, Sequelize).findAll()
      .then(locations => res.status(200).json({
        data: locations
      }))
      .catch(error => res.json({
        data: [],
        error: error
      }))
  })

  // Get location by id
  api.get('/:id', (req, res) => {
    const locationId = req.params.id

    Location(db, Sequelize).findOne({
      where: {
        id: locationId
      }
    }).then(location => res.status(200).json({
      data: location
    })).catch(error => res.json({
      data: [],
      error: error
    }))
  })

  // Update recipe
  api.put('/:id', (req, res) => {
    const locationId = parseInt(req.params.id)

    const params = {
      id: req.body.id,
      name: req.body.name,
      description: req.body.description,
      updatedAt: Date.now()
    }

    for (const key of Object.keys(params)) {
      if (!params[key]) delete params[key]
    }

    Location(db, Sequelize).update(params, {
      where: {
        id: locationId
      }
    }).then(() => res.status(200).json({
      data: params,
      message: 'Location has been updated.'
    })).catch(error => res.json({
      error: error
    }))
  })

  // Delete recipe
  api.delete('/:id', (req, res) => {
    const locationId = req.params.id

    Location(db, Sequelize).findOne({
      where: {
        id: locationId
      }
    }).then(location => {
      const locationToDelete = location

      location.destroy().then(() => {
        return res.status(200).json({
          locationId: locationId,
          message: `Location ${locationToDelete.name} has been successfully deleted.`
        })
      })
    }).catch(error => res.json({
      error: error
    }))
  })

  return api
}
