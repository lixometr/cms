const Facade = require('../../lib/facade')
const postTagSchema = require('./schema')

class PostTagFacade extends Facade {
    constructor(...args) {
        super(...args)
    }
}

module.exports = new PostTagFacade('PostTag', postTagSchema)
