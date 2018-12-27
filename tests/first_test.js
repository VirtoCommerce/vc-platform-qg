//Перед тестом создаём пользователя
Before(async I => {
  I.haveRequestHeaders({ api_key: "a348fa7508d342f6a32f8bf6c6681a2a" });
  let user = await I.sendPostRequest("/api/platform/security/users/create", {
    userName: "Testing",
    email: "string@ggg.com",
    password: "Qwerty12345"
  });
  userId = user.userName;
});

// Тут находится тест
Scenario("что-то происходит", I => {
  I.amOnPage("");
});

//После завершения теста удаляем то,что создали
After(I => {
  I.sendDeleteRequest("/api/platform/security/users", userId);
});
