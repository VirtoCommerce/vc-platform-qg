/// <reference path="../steps.d.ts" />

Feature('Temporary');

Scenario('BladeConstuctorShouldBeExist', async (I, bladeConstructor) => {
    I.amOnPage(I.sites.vccom + 'guides/blade-constructor');

    I.waitForElement(bladeConstructor.header);
    I.see('BLADE CONSTRUCTOR 1.2', bladeConstructor.header);
    I.seeElementInDOM(bladeConstructor.menu);
    I.see('Blade constructor', bladeConstructor.title);
});

Scenario('DocsFunctionality', async (I, docs) => {
    I.amOnPage(I.sites.vccom + 'docs');
    I.see('Virto Commerce Documentation', docs.title);
    I.seeElementInDOM(docs.authors);
    I.see('Topics', docs.topics);
    I.see('Recent changes', docs.recentChanges);
    I.seeElementInDOM(docs.menu.folder2);
    I.seeElementInDOM(docs.menu.folder3);
    I.seeElementInDOM(docs.menu.folder4);
});

Scenario('GlossaryFunctionality', async (I, glossary) => {
    I.amOnPage(I.sites.vccom + 'glossary');
    I.see('E-Commerce Glossary', glossary.title);

    await I.click(glossary.menuLinks.whatIsB2C.ref);
    I.see(glossary.menuLinks.whatIsB2C.title, glossary.menuLinks.whatIsB2C.titleSelector);

    await I.click(glossary.menuLinks.b2bEcommerceCompaniesAndWebSites.ref);
    I.see(glossary.menuLinks.b2bEcommerceCompaniesAndWebSites.title, glossary.title);

    await I.click(glossary.menuLinks.b2bEcommerceTrends.ref);
    I.see(glossary.menuLinks.b2bEcommerceTrends.title, glossary.title);

    await I.click(glossary.menuLinks.bestEcommercePlatforms.ref);
    I.see(glossary.menuLinks.bestEcommercePlatforms.title, glossary.title);

    await I.click(glossary.menuLinks.hostedShoppingCart.ref);
    I.see(glossary.menuLinks.hostedShoppingCart.title, glossary.title);

    await I.click(glossary.menuLinks.agilePlatform.ref);
    I.see(glossary.menuLinks.agilePlatform.title, glossary.title);

    await I.click(glossary.menuLinks.b2b2cEcommerce.ref);
    I.see(glossary.menuLinks.b2b2cEcommerce.title, glossary.title);

    await I.click(glossary.menuLinks.saasEcommerce.ref);
    I.see(glossary.menuLinks.saasEcommerce.title, glossary.title);

    await I.click(glossary.menuLinks.eProcurementSoftwareSystems.ref);
    I.see(glossary.menuLinks.eProcurementSoftwareSystems.title, glossary.title);

    await I.click(glossary.menuLinks.punchoutCatalog.ref);
    I.see(glossary.menuLinks.punchoutCatalog.title, glossary.title);

    await I.click(glossary.menuLinks.cloudEcommerce.ref);
    I.see(glossary.menuLinks.cloudEcommerce.title, glossary.title);

    await I.click(glossary.menuLinks.magentoAlternatives.ref);
    I.see(glossary.menuLinks.magentoAlternatives.title, glossary.title);

    await I.click(glossary.menuLinks.shopifyAlternatives.ref);
    I.see(glossary.menuLinks.shopifyAlternatives.title, glossary.title);

    await I.click(glossary.menuLinks.nopCommerceAlternative.ref);
    I.see(glossary.menuLinks.nopCommerceAlternative.title, glossary.title);

    await I.click(glossary.menuLinks.whatIsAnSKU.ref);
    I.see(glossary.menuLinks.whatIsAnSKU.title, glossary.title);

    await I.click(glossary.menuLinks.whatIsADeadStock.ref);
    I.see(glossary.menuLinks.whatIsADeadStock.title, glossary.title);

    await I.click(glossary.menuLinks.whatIsABackorder.ref);
    I.see(glossary.menuLinks.whatIsABackorder.title, glossary.title);

    await I.click(glossary.menuLinks.howToCalculateSafetyStock.ref);
    I.see(glossary.menuLinks.howToCalculateSafetyStock.title, glossary.headTitle);

    await I.click(glossary.menuLinks.whatIsInventoryManagement.ref);
    I.see(glossary.menuLinks.whatIsInventoryManagement.title, glossary.headTitle);

    await I.click(glossary.menuLinks.znodeAlternatives.ref);
    I.see(glossary.menuLinks.znodeAlternatives.title, glossary.title);

    await I.click(glossary.menuLinks._3dCartAlternatives.ref);
    I.see(glossary.menuLinks._3dCartAlternatives.title, glossary.title);

    await I.click(glossary.menuLinks.demandwareAlternatives.ref);
    I.see(glossary.menuLinks.demandwareAlternatives.title, glossary.title);

    await I.click(glossary.menuLinks.episerverAlternatives.ref);
    I.see(glossary.menuLinks.episerverAlternatives.title, glossary.title);

    await I.click(glossary.menuLinks.elasticPathAlternatives.ref);
    I.see(glossary.menuLinks.elasticPathAlternatives.title, glossary.title);

    await I.click(glossary.menuLinks.purchaseOrderManagementSoftware.ref);
    I.see(glossary.menuLinks.purchaseOrderManagementSoftware.title, glossary.headTitle);

    await I.click(glossary.menuLinks.productRecommendationEngine.ref);
    I.see(glossary.menuLinks.productRecommendationEngine.title, glossary.headTitle);

    await I.click(glossary.menuLinks.orderProcessingSoftware.ref);
    I.see(glossary.menuLinks.orderProcessingSoftware.title, glossary.title);

    await I.click(glossary.menuLinks.requestForProposal.ref);
    I.see(glossary.menuLinks.requestForProposal.title, glossary.title);

    await I.click(glossary.menuLinks.requestForQuotation.ref);
    I.see(glossary.menuLinks.requestForQuotation.title, glossary.title);

    await I.click(glossary.menuLinks.purchaseOrderRequestForm.ref);
    I.see(glossary.menuLinks.purchaseOrderRequestForm.title, glossary.title);

    await I.click(glossary.menuLinks.requestForInformation.ref);
    I.see(glossary.menuLinks.requestForInformation.title, glossary.title);
});

Scenario('IndexationShouldBeAllowed', async (I) => {
    I.amOnPage(I.sites.vccom + 'robots.txt');
    var pre = await I.grabTextFrom('pre');
    var assert = require('assert');
    assert(pre.indexOf('User-agent: *') > -1);
    assert(pre.indexOf('Disallow: /js/*.js$') > -1);
    assert(pre.indexOf('Disallow: /our-offers/agile-b2b-ecommerce') > -1);
    assert(pre.indexOf('Disallow: /static/b2b.htm') > -1);
    assert(pre.indexOf('Disallow: /products') > -1);
    assert(pre.indexOf('Host: ' + I.sites.vccom) > -1);
    assert(pre.indexOf('Sitemap: ' + I.sites.vccom + '/sitemap.xml') > -1);
});

Scenario('MainPageHeaderFunctionality', async (I, mainPage) => {
    I.amOnPage(I.sites.vccom);
    I.see(mainPage.menuLinks.products.text, mainPage.menuLinks.products.selector);
    I.see(mainPage.menuLinks.services.text, mainPage.menuLinks.services.selector);
    I.see(mainPage.menuLinks.ecosystem.text, mainPage.menuLinks.ecosystem.selector);
    I.see(mainPage.menuLinks.customers.text, mainPage.menuLinks.customers.selector);
    I.see(mainPage.menuLinks.aboutUs.text, mainPage.menuLinks.aboutUs.selector);
    I.see(mainPage.menuLinks.contactUs.text, mainPage.menuLinks.contactUs.selector);

    await I.click(mainPage.menuLinks.products.selector);
    I.see('Agile Ecommerce Platform', mainPage.menuLinks.content.title);

    await I.click(mainPage.menuLinks.services.selector);
    I.see('Ecommerce consulting', mainPage.menuLinks.content.title);

    await I.click(mainPage.menuLinks.ecosystem.selector);
    I.see('Solution Partners', mainPage.menuLinks.content.title);

    await I.click(mainPage.menuLinks.customers.selector);
    I.see('Customers', mainPage.menuLinks.content.title);

    await I.click(mainPage.menuLinks.aboutUs.selector);
    I.see('Our Story', mainPage.menuLinks.aboutUs.title);
});

Scenario('ShouldRedirectToAgilePlatform', async (I) => {
    I.amOnPage(I.sites.vccom + 'glossary/agile-software-platform');
    await I.click('a[href="/blog/agile-platform"].button');
    I.waitInUrl(I.sites.vccom + 'blog/agile-platform');
});

Scenario('ShouldSendB2BWhitepaperForm', async (I, glossary) => {
    I.amOnPage(I.sites.vccom + 'glossary/b2b-ecommerce-companies-websites');
    await I.click(glossary.menuLinks.b2bEcommerceCompaniesAndWebSites.content.downloadB2BWhitepaper);

    await glossary.downloadWhitepaperForm.send('test', 'test', 'test@test.com', '12345', 'qwerty', 'qwerty', 'it\'s just a ghost test');
    I.seeInField(glossary.downloadWhitepaperForm.redirectUrl, '~/assets/files/whitepaper-top-5-b2b-challenges.pdf');
});

Scenario('ShouldSendCloudWhitepaperForm', async (I, glossary) => {
    I.amOnPage(I.sites.vccom + 'glossary/cloud-ecommerce-solution');
    await I.click('a[href="/download-whitepaper"]');

    await glossary.downloadWhitepaperForm.send('test', 'test', 'test@test.com', '123', 'qwerty', 'qwert', 'it`s just a ghost test');
    I.seeInField(glossary.downloadWhitepaperForm.redirectUrl, '~/assets/files/whitepaper-5-reasons-to-switch-your-ecommerce-to-the-cloud.pdf');
});

Scenario('ShouldSendContactUsForm', async (I, glossary) => {
    I.amOnPage(I.sites.vccom);
    I.moveCursorTo('//a[@href="/about-us"][@class="menu-link"]');
    I.wait(2);
    await I.click('a[href="/contact-us"].dropdown-link');

    await glossary.contactSalesForm.send('test', 'test', 'test@test.com', '123123', '123123', '123123', 'it`s a ghost');
    //I.see('h1.head-title', 'Thank you');
});

Scenario('ShouldSendMigrationWhitepaperForm', async (I, glossary) => {
    I.amOnPage(I.sites.vccom + 'glossary/best-ecommerce-platforms');
    await I.click('a[href="/migration-whitepaper"]');

    I.dragAndDrop('input[name="Contact[CompanyName]"]', '.block > form > .column:nth-of-type(1) > .control-group:nth-of-type(3)');
    await glossary.downloadWhitepaperForm.send('test', 'test', 'test@test.com', '12345', 'qwert', 'qwerty', 'it`s just a ghost test');
    I.seeInField(glossary.downloadWhitepaperForm.redirectUrl, '~/assets/files/whitepaper-ecommerce-platform-migration-problems.pdf');
});

Scenario('ShouldSendTryNowForm', async (I, glossary) => {
    I.amOnPage(I.sites.vccom);
    await I.click('//button[@class="button fill try"]');
    await I.click('a[href="/try-now"]');

    await glossary.tryNowForm.send('test', 'test', 'test', '12345', 'test');
    I.waitForElement('h1.head-title', 10);
    //I.see('Thank you for requesting a trial', 'h1.head-title');
});

Scenario('StyleGuideShouldBeExist', async (I) => {
    I.amOnPage(I.sites.vccom + 'docs/vc2devguide/working-with-platform-manager/style-guide');

    await I.click('a[href="' + I.sites.vccom + 'styleguide/index.html"]');
    I.see('Style Guide 1.1', 'h1.header-t');
    I.seeElementInDOM('.navbar > .menu');
    I.seeElementInDOM('.main');
});

Scenario('VCAppStoreShouldBeExist', async (I) => {
    I.amOnPage(I.sites.vccom);

    await I.click('a[href*="/apps"].link-white');
    await I.click('a.btn');
    I.see('Tell us about your extension', '.popup-head');
    I.seeElementInDOM('form[name="formContactUs"]');
    I.seeElementInDOM('.popup-footer');
    I.fillField('input[name="Email"]', 'test@test.com');
    I.fillField('input[name="CompanyName"]', 'test');
    I.fillField('input[name="FullName"]', 'test');
    I.fillField('textarea[name="Message"]', 'its just a test');
    await I.click('a.btn.__yellow');
});

Scenario('siteMap', async (I, sitemap) => {
    I.amOnPage(I.sites.vccom + 'sitemap');

    I.see('Sitemap', sitemap.title);
    I.see('Home', sitemap.links.home);
    I.see('Features', sitemap.links.features.selector);
    I.see('Features for developers', sitemap.links.features.forDevelopers);
    I.see('Features for business professionals', sitemap.links.features.forBusinessProfessionals);
    I.see('Multi-tenant', sitemap.links.features.multiTenant);
    I.see('Our Offers', sitemap.links.ourOffers.selector);
    I.see('Enterprise Edition', sitemap.links.ourOffers.enterpriseEdition);
    I.see('Community Edition', sitemap.links.ourOffers.communityEdition);
    I.see('Documentation', sitemap.documentation);
    I.see('Blog', sitemap.links.blog);
    I.see('Partners', sitemap.links.partners.selector);
    I.see('Become partner', sitemap.links.partners.becomePartner);
    I.see('List of partners', sitemap.links.partners.listOfPartners);
    I.see('Contact us', sitemap.links.contactUs);

    var url = await I.grabAttributeFrom(sitemap.links.home, 'href');
    I.amOnPage(url);

    I.amOnPage(I.sites.vccom + 'sitemap');
    url = await I.grabAttributeFrom(sitemap.links.features.selector, 'href');
    I.amOnPage(url);
    I.see('Agile Ecommerce Platform', 'h1.head-title');

    I.amOnPage(I.sites.vccom + 'sitemap');
    url = await I.grabAttributeFrom(sitemap.links.features.forDevelopers, 'href');
    I.amOnPage(url);
    I.see('Agile eCommerce Platform Features', 'h1.head-title');

    I.amOnPage(I.sites.vccom + 'sitemap');
    url = await I.grabAttributeFrom(sitemap.links.features.forBusinessProfessionals, 'href');
    I.amOnPage(url);
    I.see('Agile Ecommerce Platform', 'h1.head-title');

    I.amOnPage(I.sites.vccom + 'sitemap');
    url = await I.grabAttributeFrom(sitemap.links.features.multiTenant, 'href');
    I.amOnPage(url);
    I.see('Virto Commerce Multi-Vendor e-Commerce Platform.', 'h1.head-title');

    //I.amOnPage(I.sites.vccom + 'sitemap');
    //url = await I.grabAttributeFrom(sitemap.links.ourOffers.selector, 'href');
    //I.amOnPage(url);
    //I.see('Enterprise Edition Advantages', 'h2.head-title');

    //I.amOnPage(I.sites.vccom + 'sitemap');
    //url = await I.grabAttributeFrom(sitemap.links.ourOffers.enterpriseEdition, 'href');
    //I.amOnPage(url);
    //I.see('Enterprise Edition', 'h1.slider-title');

    I.amOnPage(I.sites.vccom + 'sitemap');
    url = await I.grabAttributeFrom(sitemap.links.ourOffers.communityEdition, 'href');
    I.amOnPage(url);
    I.see('Community Edition', 'h1.slider-title');

    //I.amOnPage(I.sites.vccom + 'sitemap');
    //url = await I.grabAttributeFrom(sitemap.links.documentation, 'href');
    //I.amOnPage(url);
    //I.see('Virto Commerce Documentation', '#page-content > h1');

    I.amOnPage(I.sites.vccom + 'sitemap');
    url = await I.grabAttributeFrom(sitemap.links.blog, 'href');
    I.amOnPage(url);
    I.see('Virto Commerce Enterprise eCommerce Blog', 'h1.categories-t');

    I.amOnPage(I.sites.vccom + 'sitemap');
    url = await I.grabAttributeFrom(sitemap.links.partners.selector, 'href');
    I.amOnPage(url);
    I.see('Solution Partners', 'h1.head-title');

    I.amOnPage(I.sites.vccom + 'sitemap');
    url = await I.grabAttributeFrom(sitemap.links.partners.becomePartner, 'href');
    I.amOnPage(url);
    I.see('Partner Program', 'h1.head-title');

    I.amOnPage(I.sites.vccom + 'sitemap');
    url = await I.grabAttributeFrom(sitemap.links.partners.listOfPartners, 'href');
    I.amOnPage(url);
    I.see('Solution Partners', 'h1.head-title');

    I.amOnPage(I.sites.vccom + 'sitemap');
    url = await I.grabAttributeFrom(sitemap.links.contactUs, 'href');
    I.amOnPage(url);
    I.see('Contact Sales', 'h1.head-title');

    //I.amOnPage(I.sites.vccom + 'sitemap.xml');
    //I.see('sitemap/apps_partner_sitemap.xml', '#collapsible2 > .expanded > .collapsible-content > .text');
    //I.see('sitemap/main_sitemap.xml', '#collapsible3 > .expanded > .collapsible-content > .line > .text');
    //I.see('sitemap/docs_sitemap.xml', '#collapsible4 > .expanded > .collapsible - content > .line > .text');
    //I.see('sitemap/blog_sitemap.xml', '#collapsible5 > .expanded > .collapsible-content > .line > .text');
    //I.see('sitemap/apps_modules_sitemap.xml', '#collapsible7 > .expanded > .collapsible-content > .text');
});