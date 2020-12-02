const Modification = require('../../lib/modification')
const facade = require('./facade')
module.exports = class PostTagModification extends Modification {

  
    async init() {
    }
    toINFO() {
        return {
           ...this.toJSON()
        }
    }
  

}