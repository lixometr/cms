const WidgetModification = require("../modification");

module.exports = class Faq extends WidgetModification {
    constructor(...args) {
        super(...args)
        this.schema = {
            title: '',
            seo: {
                title: '',
                description: '',
                keywords: ''
            },
            items: [
                {
                    title: '',
                    items: [
                        {
                            title: '',
                            text: ''
                        }
                    ]
                }
            ]
        }
    }

    // toINFO() {
    //     return {
    //         values: this.item.val
    //     }
    // }

}