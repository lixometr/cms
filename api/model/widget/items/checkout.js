const WidgetModification = require("../modification");

module.exports = class CheckoutPage extends WidgetModification {
    constructor(...args) {
        super(...args)
        this.schema = {
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