const mongoose = require('mongoose')
const URI = process.env.status === 'production' ? process.env.DB_URI_PRODUCTION : process.env.DB_URI_DEVELOPER
const db = mongoose.connection
const debug = require('debug')('picommerce:Database')
mongoose.Promise = global.Promise;

function connect() {
  mongoose.connect(URI)
  db.on('open', () => debug('database connected'))
  db.on('error', (err) => debug(`Error ${err.message}`))
}

connect()
