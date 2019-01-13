//Перед тестом создаём пользователя
Before(async I => {
  I.haveRequestHeaders({ auth: "a348fa7508d342f6a32f8bf6c6681a2a" });
  await I.sendPostRequest("/platform/security/users/create", {
    userName: "Testing",
    email: "string@ggg.com",
    password: "Qwerty12345"
  });
});

Feature("Create new user with api");

//Проверяю,могу ли я авторизоваться этим новым пользователем
Scenario("[Positive] I can login with this new user", I => {
  I.amOnPage("");
  I.click("#customer_login_link");
  I.see("LOGIN");
  I.fillField("#customer_user_name", "Testing");
  I.fillField("#customer_password", "Qwerty12345");
  I.click(locate("input").withAttr({ value: "Sign In" }));
  I.see("Testing", { binding: "customer.firstName || customer.userName" });
});

//После завершения теста удаляем пользователя
After(I => {
  I.sendDeleteRequest("/platform/security/users?names=Testing");
});
