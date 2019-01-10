const I = actor();

module.exports = {
    title: 'h1.title',
    headTitle: '.head > h1',
    menuLinks: {
        whatIsB2C: {
            ref: 'a[href="glossary/what-is-b2c-ecommerce"]',
            title: 'What is business to business e commerce? B2B e-commerce examples'
        },
        b2bEcommerceCompaniesAndWebSites: {
            ref: 'a[href="glossary/b2b-ecommerce-companies-websites"]',
            title: 'Top B2B e commerce sites and companies',
            content: {
                downloadB2BWhitepaper: 'a[href="/download-b2b-whitepaper"].button'
            }
        },
        b2bEcommerceTrends: {
            ref: 'a[href="glossary/b2b-ecommerce-trends"]',
            title: 'B2B Ecommerce trends'
        },
        bestEcommercePlatforms: {
            ref: 'a[href="glossary/best-ecommerce-platforms"]',
            title: 'The best ecommerce platforms for websites in 2018. Top ecommerce platforms list'
        },
        hostedShoppingCart: {
            ref: 'a[href="glossary/hosted-shopping-cart"]',
            title: 'Hosted Shopping Cart'
        },
        agilePlatform: {
            ref: 'a[href="glossary/agile-software-platform"]',
            title: 'Agile Platform - Definition'
        },
        b2b2cEcommerce: {
            ref: 'a[href="glossary/b2c-ecommerce-b2b2c"]',
            title: 'B2B2C eCommerce'
        },
        saasEcommerce: {
            ref: 'a[href="glossary/saas-ecommerce"]',
            title: 'SAAS E-commerce'
        },
        eProcurementSoftwareSystems: {
            ref: 'a[href="glossary/epcm-process-software"]',
            title: 'E procurement software platform. E procurement system.'
        },
        punchoutCatalog: {
            ref: 'a[href="glossary/punchout-catalog"]',
            title: 'Punchout Catalog Definition. What is a punch out catalog?'
        },
        cloudEcommerce: {
            ref: 'a[href="glossary/cloud-ecommerce-solution"]',
            title: 'Cloud ecommerce solutions'
        },
        magentoAlternatives: {
            ref: 'a[href="glossary/magento-alternatives"]',
            title: 'Magento alternative. 8 best Magento competitors. The best alternatives to Magento in 2017-2018.'
        },
        shopifyAlternatives: {
            ref: 'a[href="glossary/shopify-alternatives"]',
            title: 'Shopify alternatives. 10 best Shopify competitors. The best alternatives to Shopify in 2017-2018.'
        },
        nopCommerceAlternative: {
            ref: 'a[href="glossary/nopcommerce-alternative"]',
            title: 'NopCommerce alternative'
        },
        whatIsAnSKU: {
            ref: 'a[href="glossary/what-is-sku"]',
            title: 'What is an SKU? SKU definition and meaning'
        },
        whatIsADeadStock: {
            ref: 'a[href="glossary/what-is-a-dead-stock"]',
            title: 'What is a dead stock? Dead stock definition | Virto Commerce Glossary'
        },
        whatIsABackorder: {
            ref: 'a[href="glossary/what-is-backorder"]',
            title: 'What is a backorder? Backorder definition and meaning'
        },
        howToCalculateSafetyStock: {
            ref: 'a[href="glossary/how-to-calculate-safety-stock"]',
            title: 'How to calculate safety stock? Safety stock formula and calculation.'
        },
        whatIsInventoryManagement: {
            ref: 'a[href="glossary/what-is-inventory-management"]',
            title: 'Inventory management definition and meaning - What is inventory management?'
        },
        znodeAlternatives: {
            ref: 'a[href="glossary/znode-alternatives"]',
            title: 'Znode alternatives'
        },
        _3dCartAlternatives: {
            ref: 'a[href="glossary/3dcart-alternatives"]',
            title: '3dCart alternatives and competitors'
        },
        demandwareAlternatives: {
            ref: 'a[href="glossary/demandware-alternatives"]',
            title: 'Demandware alternatives and competitors'
        },
        episerverAlternatives: {
            ref: 'a[href="glossary/episerver-alternatives"]',
            title: 'Episerver alternatives and competitors'
        },
        elasticPathAlternatives: {
            ref: 'a[href="glossary/elastic-path-alternatives"]',
            title: 'Elasticpath alternatives and competitors'
        },
        purchaseOrderManagementSoftware: {
            ref: 'a[href="glossary/purchase-order-management-software"]',
            title: 'Purchase Order Management Software. Purchase Order Management System from Virto Commerce.'
        },
        productRecommendationEngine: {
            ref: 'a[href="glossary/product-recommendation-engine"]',
            title: 'Product recommendation engine. Personalized recommendations service for ecommerce.'
        },
        orderProcessingSoftware: {
            ref: 'a[href="glossary/order-processing-software"]',
            title: 'Order Processing Software. Order fulfillment and tracking software.'
        },
        requestForProposal: {
            ref: 'a[href="glossary/request-for-proposal"]',
            title: 'Request for proposal'
        },
        requestForQuotation: {
            ref: 'a[href="glossary/request-for-quotation"]',
            title: 'Request for Quote'
        },
        purchaseOrderRequestForm: {
            ref: 'a[href="glossary/purchase-order-request-form"]',
            title: 'Purchase Order Request Form'
        },
        requestForInformation: {
            ref: 'a[href="glossary/request-for-information"]',
            title: 'Request for Information'
        }
    },
    downloadWhitepaperForm: {
        firstName: 'input[name="Contact[FirstName]"]',
        lastName: 'input[name="Contact[LastName]"]',
        email: '.control-group > input[name="Contact[Email]"].form-input',
        phone: 'input[name="Contact[Phone]"]',
        companyName: 'input[name="Contact[CompanyName]"]',
        jobTitle: 'input[name="Contact[JobTitle]"]',
        softwareTypes: {
            notSure: 'input[name="Contact[SoftwareType]"][value="Not Sure"]'
        },
        message: 'textarea[name="Contact[Message]"]',
        submit: '.control-group > button[type="submit"].button.fill',
        redirectUrl: 'input[name="Contact[RedirectUrl]"][type="hidden"]',
        send: async function (firstName, lastName, email, phone, companyName, jobTitle, message) {
            I.fillField(this.firstName, firstName);
            I.fillField(this.lastName, lastName);
            I.fillField(this.email, email);
            I.fillField(this.phone, phone);
            I.fillField(this.companyName, companyName);
            I.fillField(this.jobTitle, jobTitle);
            await I.click(this.softwareTypes.notSure);
            I.fillField(this.message, message);
            await I.click(this.submit);
        }
    },
    contactSalesForm: {
        firstName: 'input[name="Contact[FirstName]"]',
        lastName: 'input[name="Contact[LastName]"]',
        email: '.control-group > input[name="Contact[Email]"].form-input',
        phone: 'input[name="Contact[Phone]"]',
        companyName: 'input[name="Contact[CompanyName]"]',
        jobTitle: 'input[name="Contact[JobTitle]"]',
        message: 'textarea[name="Contact[Message]"]',
        submit: '.control-group > button[type="submit"].button.fill',
        send: async function (firstName, lastName, email, phone, companyName, jobTitle, message) {
            I.fillField(this.firstName, firstName);
            I.fillField(this.lastName, lastName);
            I.fillField(this.email, email);
            I.fillField(this.phone, phone);
            I.fillField(this.companyName, companyName);
            I.fillField(this.jobTitle, jobTitle);
            I.fillField(this.message, message);
            await I.click(this.submit);
        }
    },
    tryNowForm: {
        firstName: 'input[name="Contact[FirstName]"]',
        lastName: 'input[name="Contact[LastName]"]',
        companyName: 'input[name="Contact[CompanyName]"]',
        phone: 'input[name="Contact[Phone]"]',
        email: '.control-group > input[name="Contact[Email]"].form-input',
        message: 'select[name="Contact[Message]"]',
        messages: {
            iAmDeveloper: '//select[@name="Contact[Message]"]/option[text()="I am developer trying Virto Commerce"]'
        },
        submit: 'button[type="submit"].btn',
        send: async function (firstName, lastName, companyName, phone, email) {
            I.fillField(this.firstName, firstName);
            I.fillField(this.lastName, lastName);
            I.fillField(this.companyName, companyName);
            I.fillField(this.phone, phone);
            I.fillField(this.email, email);
            await I.click(this.message);
            await I.click(this.messages.iAmDeveloper);
            await I.click(this.submit);
        }
    }
};