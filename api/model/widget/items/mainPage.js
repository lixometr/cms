const WidgetModification = require("../modification");

module.exports = class MainPage extends WidgetModification {
    constructor(...args) {
        super(...args)
        this.schema = {
            seo: {
                title: '',
                description: '',
                keywords: ''
            },
            block1: {
                items: [
                    {
                        title: '',
                        sub_title: '',
                        btn: '',
                        btn_url: '',
                        img: {},
                        img_mob: {}
                    }
                ]
            },
            block2: {
                title: ''
            },
            block3: {
                title: ''
            },
            block4: {
                title: '',
                items: [
                    {
                        title: '',
                        sub_title: '',
                        icon: {},
                        bg_image: {}
                    }
                ]
            },
            block5: {
                title: '',
                sub_title: '',
                items: [
                    {
                        title: '',
                        sub_title: ''
                    }
                ],
                video_url: '',
                video_btn: '',
                video_preview: {}
            },
            block6: {
                title: "",
                items: [
                    {
                        login: '',
                        avatar: {},
                        text: '',
                        stars: '',
                        link: ''
                    }
                ]
            },
            block7: {
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