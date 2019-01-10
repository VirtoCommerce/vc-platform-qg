Feature("Getting Invoice");

Before(I => {
    I.amOnPage("");
    I.signIn();
});

Scenario("[Positive] as user i can get invoice for an order", I => {
    I.click({ binding: "customer.firstName || customer.userName" });
    I.click(
        locate("a")
            .withText("Orders")
            .inside(locate("li")));
    I.click('(//a[@ng-bind="order.number"])[1]');
    I.click(locate("button").withText("Get invoice"));
    I.switchToNextTab();
    I.waitInUrl("/CU1508131823005/invoice");
});
