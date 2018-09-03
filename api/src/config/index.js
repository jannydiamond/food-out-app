export default {
  'port': 3010,
  'databaseHost': 'localhost',
  'databasePort': '3306',
  'databaseName': 'food_out_app',
  'databaseUsername': `${process.env.DB_USER_MYSQL}`,
  'databasePassword': `${process.env.DB_PWD_MYSQL}`,
  'bodyLimit': '100kb'
}
