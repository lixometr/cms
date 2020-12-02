const WidgetModification = require("../modification");

module.exports = class Contact extends WidgetModification {
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
                title: '',
                items: [
                    {
                        icon: {},
                        title: '',
                        sub_title: '',
                        link: '',
                        color: ''
                    }
                ]
            },
            block2: {
                title: '',
                items: [
                    {
                        icon: {},
                        title: '',
                        sub_title: '',
                        link: '',
                        color: ''

                    }
                ]
            },
            block3: {
                title: ''
            }

        }
    }

    // toINFO() {
    //     return {
    //         values: this.item.val
    //     }
    // }

}