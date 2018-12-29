const I = actor();

module.exports = {
    menuLinks: {
        products: {
            text: 'PRODUCTS',
            selector: 'a[href="/features/for-business-professionals"].menu-link'
        },
        services: {
            text: 'SERVICES',
            selector: 'a[href="/our-services/professional-services"].menu-link'
        },
        ecosystem: {
            text: 'ECOSYSTEM',
            selector: 'a[href="/partners/list-of-partners"].menu-link'
        },
        customers: {
            text: 'CUSTOMERS',
            selector: 'a[href="/customers"].menu-link'
        },
        aboutUs: {
            text: 'ABOUT US',
            selector: 'a[href="/about-us"].menu-link',
            title: '.our-story > h1'
        },
        contactUs: {
            text: 'CONTACT US',
            selector: 'a[href="/contact-us"].button'
        },
        content: {
            title: 'h1.head-title'
        }
    }
};