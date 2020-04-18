import React, { PureComponent } from 'react';
import ConveyorElement from '../ConveyorElement';
import Clients from '../Clients';
import Statistic from '../Statistic';
import styles from './App.module.css';

class App extends PureComponent {
  meatIngredients = ['bacon', 'meat', 'chicken', 'shrimp'];
  vegetables1 = ['broccoli', 'cucumber', 'pepper', 'carrot'];
  vegetables2 = ['potatoes', 'tomato', 'eggplant', 'avocado'];
  additions = ['cheese', 'egg', 'pinenut', 'peanut'];

  render() {
    return (
      <div className={styles.container}>
        <Clients />

        <ConveyorElement
          name="conveyor_1"
          title="Мясо"
          ingredients={this.meatIngredients}
        />
        <ConveyorElement
          name="conveyor_2"
          title="Овощи 1"
          ingredients={this.vegetables1}
        />
        <ConveyorElement
          name="conveyor_3"
          title="Овощи 2"
          ingredients={this.vegetables2}
        />
        <ConveyorElement
          name="conveyor_4"
          title="Дополнения"
          ingredients={this.additions}
        />

        <Statistic />
      </div>
    );
  }
}

export default App;
