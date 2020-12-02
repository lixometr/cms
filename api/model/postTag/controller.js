const AppError = require('../../helpers/error')
const Controller = require('../../lib/controller')
const Modification = require('./modification')
const facade = require('./facade')

class PostTag extends Controller {

}

module.exports = new PostTag(facade, Modification)
