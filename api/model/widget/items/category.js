const WidgetModification = require("../modification");

module.exports = class CategoryPage extends WidgetModification {
    constructor(...args) {
        super(...args)
        this.schema = {
            title: '',
            seo: {
                title: '',
                description: '',
                keywords: ''
            },
          
        }
    }

    // toINFO() {
    //     return {
    //         values: this.item.val
    //     }
    // }

}