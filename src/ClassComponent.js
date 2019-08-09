import React from "react";

export class ClassComponent extends React.Component {
  // --- Стейт

  state = { foo: "bar" };

  // --- Методы жизненного цикла

  componentDidMount() {
    // Эффекты, например загружаем данные с сервера
  }

  // --- Ивент хендлеры

  onClick = () => {
    // Какая-то логика
  };

  // --- Рендер

  render() {}
}
