const request = require('superagent')
const debug = require('debug')('picommerce:regionsController')
module.exports = class regionsController {

  static async get_states(req, res) {
    try {
      let states = await request
        .post('http://159.203.9.249:3000/api/states/getStates')
      res.status(200).json(states.body.data)
    } catch (e) {
      debug('Error line 11', e.message)
      res.status(500).json('Se presento un error interno en el servidor')
    }
  }

  static async get_cities(req, res) {
    try {
      let state = req.params.state
      let cities = await request
        .post('http://159.203.9.249:3000/api/states/getCities')
        .send({stateId: state})
      res.status(200).json(cities.body.data)
    } catch (error) {
      debug('Error line 24', error.message)
      res.status(500).json('Se presento un error interno en el servidor');
    }
  }
}