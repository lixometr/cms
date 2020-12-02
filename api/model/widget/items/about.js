const WidgetModification = require("../modification");

module.exports = class About extends WidgetModification {
    constructor(...args) {
        super(...args)
        this.schema = {
            title: '',
            seo: {
                title: '',
                description: '',
                keywords: ''
            },
            block1: {
                left: '',
                right: ''
            },
            block2: '',
            block3: [
                {
                    number: String,
                    text: String
                }
            ],
            block4: ''

        }
    }

    // toINFO() {
    //     return {
    //         values: this.item.val
    //     }
    // }

}