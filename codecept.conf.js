exports.config = {
	"output": "./output",
    "helpers": {
        "WebDriver": {
            "url": "https://demo.virtocommerce.com/",
            "browser": "chrome",
            "smartWait": 15000,
            "waitForTimeout": 30000,
            "windowSize": "maximize",
            "timeouts": {
                "script": 60000,
                "pageLoad": 20000
            }
        }
	},
	"include": {
        "I": "./steps_file.js",
        "accountPage" : "./pages/storefront/account.js",
        "createAccountPage": "./pages/storefront/createAccount.js",
        "navigationPage": "./pages/storefront/navigation.js",
        "headerPage": "./pages/storefront/header.js",
        "productListPage": "./pages/storefront/productList.js",
        "addProduct": "./pages/storefront/addProduct.js",
        "mergingCart": "./pages/storefront/mergingCart.js",
        "modalDialogFragment": "./fragments/modalDialog.js",
        "cartItemCountFragment": "./fragments/cartItemCount.js",
        "shippingAdressFragment": "./fragments/shippingAdress.js",
        "orderSummaryFragment": "./fragments/orderSummary.js",
        "siteNavigation": "./fragments/siteNavigation.js",
        "search": "./pages/storefront/search.js",
        "productCompare": "./pages/storefront/productCompare.js",
        "storeOptions": "./pages/storefront/storeOptions.js",
        "newSubscription": "./pages/storefront/newSubscription.js",
        "bulkOrder": "./pages/storefront/bulkOrder.js",
        "blogs": "./pages/storefront/blogs.js",
        "recovery": "./pages/storefront/recovery.js",
        "createAddressPage": "./pages/storefront/createAddress.js",
        "glossary": "./pages/vccom/glossary.js",
        "bladeConstructor": "./pages/vccom/bladeConstructor.js",
        "docs": "./pages/vccom/docs.js",
        "mainPage": "./pages/vccom/mainPage.js",
        "sitemap": "./pages/vccom/sitemap.js"
	},
	"mocha": {
		"reporterOptions": {
			"reportDir": "reports",
			"inlineAssets": true,
			"reportPageTitle": "E2E Test Reports",
			"reportTitle": "E2E Test Reports"
		}
	},
	"bootstrap": false,
	"teardown": null,
	"hooks": [],
	"gherkin": {},
	"plugins": {
		"screenshotOnFail": {
			"enabled": true
		},
		"allure": {
			"enabled": true
		}
	},
	"tests":  "./tests/storefront/*_test.js",
	"timeout": 20000,
    "name": "QualityGate"
};