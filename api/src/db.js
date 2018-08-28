import Sequelize from 'sequelize'
import config from './config'

export default callback => {
  const db = new Sequelize(config.databaseName, config.databaseUsername, config.databasePassword, {
    dialect: 'mysql',
    host: config.databaseHost,
    port: config.databasePort
  })

  callback(db)
}
