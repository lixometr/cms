const { times } = require("lodash");
const WidgetModification = require("../modification");

module.exports = class Header extends WidgetModification {
    constructor(...args) {
        super(...args)
        this.schema = {
            logo: '',
            logo_mob: '',
            menu: [
                {
                    name: '',
                    url: '',
                    show_categories: false
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