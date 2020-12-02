const { times } = require("lodash");
const WidgetModification = require("../modification");

module.exports = class Footer extends WidgetModification {
    constructor(...args) {
        super(...args)
        this.schema = {
            logo: '',
            bg_image: {},
            menu1: {
                title: '',
                items: [
                    {
                        title: '',
                        url: '',
                        icon: {}
                    }
                ]
            },
            menu2: {
                title: '',
                items: [
                    {
                        title: '',
                        url: '',
                        icon: {}
                    }
                ]
            },
            menu3: {
                title: '',
                items: [
                    {
                        title: '',
                        url: '',
                        icon: {}
                    }
                ]
            },
            copyright1: '',
            copyright2: ''
        }
    }

    // toINFO() {
    //     return {
    //         values: this.item.val
    //     }
    // }

}