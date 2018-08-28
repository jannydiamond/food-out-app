module.exports = (db, DataTypes) => {
  return db.define('location', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      defaultValue: 'No description.'
    }
  })
}
