import axios from 'axios'

const fetchLocation = () => {
  return new Promise((resolve) => {
    // timeout for demonstration purposes
    setTimeout(() => axios.get('http://localhost:3010/api/locations').then(
      (response) => resolve(response.data)
    ), 3000)
  })
}

const createLocation = (data) => {
  return new Promise((resolve) => {
    axios.post('http://localhost:3010/api/locations', data).then(
      (response) => {
        return resolve(response.data)
      }
    )
  })
}

const updateLocation = (id, data) => {
  return new Promise((resolve) => {
    axios.put(`http://localhost:3010/api/locations/${id}`, data).then(
      (response) => {
        return resolve(response.data)
      }
    )
  })
}

const deleteLocation = (id) => {
  return new Promise((resolve) => {
    axios.delete(`http://localhost:3010/api/locations/${id}`).then(
      (response) => {
        return resolve(response.data)
      }
    )
  })
}

export default {
  fetchLocation,
  createLocation,
  updateLocation,
  deleteLocation
}
