var Factory = require("rosie").Factory;
var faker = require("faker");

//Это просто заготовка для генерации пользователя,
//потом в самом файле с тестом можно сгенерировать пользователя
//и использовать userName и password для авторизации

module.exports = new Factory()
  .attr("userName", () => faker.internet.userName())
  .attr("password", () => faker.internet.password())
  .attr("email", () => faker.internet.email());
