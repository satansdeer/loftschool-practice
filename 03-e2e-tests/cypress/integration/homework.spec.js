describe('Поведение приложения', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('При нажатии кнопки новый заказ должна появлятся пицца у клиентов', () => {
    cy.get('.t-new-order').click();
    cy.get('.t-clients .t-pizza').should('have.length', 1);
  });

  it('При создании пиццы, можно перенести ее на первый ковеер нажав кнопку > у клиента', () => {
    cy.get('.t-new-order').click();
    cy.get('.t-clients .t-next').click();
    cy.get('.t-conveyor-conveyor_1 .t-pizza').should('have.length', 1);
  });

  it('Пиццу можно перенести до конца вправо, но если у нее не будет игридиентов, ее нельзя закончить', () => {
    cy.get('.t-new-order').click();
    cy.get('.t-clients .t-next').click();
    cy.get('.t-conveyor-conveyor_1 .t-next').click();
    cy.get('.t-conveyor-conveyor_2 .t-next').click();
    cy.get('.t-conveyor-conveyor_3 .t-next').click();
    cy.get('.t-conveyor-conveyor_4 .t-next').click();
    cy.get('.t-conveyor-conveyor_4 .t-pizza').should('have.length', 1);
  });

  it('Пиццу можно перенести до конца вправо, а затем обратно к первому конвееру, но не к клиентам', () => {
    cy.get('.t-new-order').click();
    cy.get('.t-clients .t-next').click();
    cy.get('.t-conveyor-conveyor_1 .t-next').click();
    cy.get('.t-conveyor-conveyor_2 .t-next').click();
    cy.get('.t-conveyor-conveyor_3 .t-next').click();
    cy.get('.t-conveyor-conveyor_4 .t-next').click();
    cy.get('.t-conveyor-conveyor_4 .t-back').click();
    cy.get('.t-conveyor-conveyor_3 .t-back').click();
    cy.get('.t-conveyor-conveyor_2 .t-back').click();
    cy.get('.t-conveyor-conveyor_1 .t-back').click();
    cy.get('.t-conveyor-conveyor_1 .t-pizza').should('have.length', 1);
  });

  it('После создания пиццы статистика показывает "Создана 1 пицца"', () => {
    createPizza().then(() =>
      cy.get('.t-statistic').should('contain', 'Создана 1 пицца')
    );
  });

  it('После создания 10 пицц статистика показывает "Создано 10 пицц"', () => {
    let queue = null;
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(() => {
      if (queue) {
        queue.then(() => createPizza());
      } else {
        queue = createPizza();
      }
    });
    queue.then(() =>
      cy.get('.t-statistic').should('contain', 'Создано 10 пицц')
    );
  });
});

function createPizza() {
  return cy
    .get('.t-new-order')
    .click()
    .then(() => cy.get('.t-clients .t-next').click())
    .then(() => cy.get('.t-conveyor-conveyor_1 .t-pizza').then(assemblePizza));
}

function assemblePizza(pizza) {
  const ingredients = getPizzaIngredients(pizza[0]);
  let queue = null;
  [1, 2, 3, 4].forEach(index => {
    const className = `.t-conveyor-conveyor_${index}`;
    const promise = () =>
      clickIngredients(className, ingredients).then(() =>
        cy.get(`${className} .t-next`).click()
      );
    if (queue) {
      queue.then(() => promise());
    } else {
      queue = promise();
    }
  });
  queue.then(() => {});
}

function getPizzaIngredients(pizza) {
  return Array.from(pizza.querySelectorAll('.t-icon')).map(icon => {
    const classes = Array.from(icon.classList);

    const iconClass = classes.find(iconClass =>
      /t-icon-(\S+)$/.test(iconClass)
    );

    return iconClass.replace('t-icon-', '');
  });
}

function clickIngredients(selector, ingredients) {
  return cy.get(selector).then(conveyor => {
    let queue = null;
    ingredients.forEach(ingredient => {
      const className = `.t-add-icon-${ingredient}`;
      const el = conveyor[0].querySelector(className);
      if (el) {
        if (queue) {
          queue.then(() => cy.get(`${selector} ${className}`).click());
        } else {
          queue = cy.get(`${selector} ${className}`).click();
        }
      }
    });
    return queue == null ? Promise.resolve() : queue;
  });
}
