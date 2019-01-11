Feature("Getting Invoice");

Before(I => {
    I.amOnPage('');
    I.signIn();
});

Scenario("[Positive] as user i can get invoice for an order", async (I) => {
    I.click({ binding: "customer.firstName || customer.userName" });
    I.click(
        locate("a")
            .withText("Orders")
            .inside(locate("li")));
    var order = await I.grabTextFrom('//table/tbody/tr[1]/td[1]/a');
    I.click('//table/tbody/tr[1]/td[1]/a');
    I.click(locate("button").withText("Get invoice"));
    I.switchToNextTab();
    I.waitInUrl("/" + order + "/invoice");
});
