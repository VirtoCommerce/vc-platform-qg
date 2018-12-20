const I = actor();

module.exports = {
    title: 'h1.head-title',
    links: {
        home: '.list > li:nth-of-type(1) > a[href="/"]',
        features: {
            selector: '.sitemap > .list > li:nth-of-type(2) > a[href="/features/for-business-professionals"]',
            forDevelopers: '.list > li:nth-of-type(1) > a[href="/features/for-developers"]',
            forBusinessProfessionals: '.list > li:nth-of-type(2) > .list > li:nth-of-type(2) > a[href="/features/for-business-professionals"]',
            multiTenant: 'a[href="/features/multi-tenant"]'
        },
        ourOffers: {
            selector: '.list > li:nth-of-type(3) > a[href="/our-offers/enterprise-edition"]',
            enterpriseEdition: '.list > li:nth-of-type(1) > a[href="/our-offers/enterprise-edition"]',
            communityEdition: '.list > li:nth-of-type(2) > a[href="/our-offers/community-edition"]'
        },
        documentation: '.list > li:nth-of-type(4) > a[href="/docs"]',
        blog: '.list > li:nth-of-type(5) > a[href="/blog"]',
        partners: {
            selector: '.list > li:nth-of-type(6) > a[href="/partners/list-of-partners"]',
            becomePartner: '.list > li:nth-of-type(1) > a[href="/partners/become-partner"]',
            listOfPartners: '.list > li:nth-of-type(2) > a[href="/partners/list-of-partners"]'
        },
        contactUs: '.list > li:nth-of-type(7) > a[href="/contact-us"]'
    }
};