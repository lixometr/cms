const Faq = require("./items/faq");
const Footer = require("./items/Footer");
const MainPage = require('./items/mainPage')
const Contact = require('./items/contact')
const About = require('./items/about')
const Header = require('./items/Header')
const Blog = require('./items/blog')
const Calendar = require('./items/calendar')
const ProductSidebar = require('./items/productSidebar');
const CategoryPage = require("./items/category");
const CartPage = require("./items/cart");
const CheckoutPage = require("./items/checkout");
const PrivacyPage = require("./items/privacy");
const TermsPage = require("./items/terms");
const RefundPolicy = require("./items/refundPolicy");
module.exports = {
    footer: Footer,
    main_page: MainPage,
    faq: Faq,
    contact_page: Contact,
    calendar_page: Calendar,
    category_page: CategoryPage,
    header: Header,
    about_page: About,
    blog: Blog,
    product_sidebar: ProductSidebar,
    cart_page: CartPage,
    checkout_page: CheckoutPage,
    privacy_page: PrivacyPage,
    terms_page: TermsPage,
    refund_policy: RefundPolicy

}