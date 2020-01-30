import React, { PureComponent } from 'react';
import Button from '../Button';
import Emojis from 'react-emoji-component';
import ingredients from '../../ingredients';
import styles from './ConveyorElement.module.css';
import { connect } from 'react-redux';
import { getOrdersFor } from '../../reducers/orders';
import { moveOrderBack, moveOrderNext } from '../../actions/moveOrder';
import { addIngredient } from '../../actions/ingredients';
import cx from 'classnames';
import Box from '../Box';
import Order from '../Order';

class ConveyorElement extends PureComponent {
  static defaultProps = { ingredients: [] };
  findIcon = name => ingredients.find(ing => ing.name === name).icon;
  handleClick = event => {
    const { addIngredient, name } = this.props;
    addIngredient(name, event.target.dataset.icon);
  };

  handleNext = () => {
    const { moveOrderNext, orders } = this.props;
    if (orders.length > 0) moveOrderNext(orders[0].id);
  };
  handleBack = () => {
    const { moveOrderBack, orders } = this.props;
    if (orders.length > 0) moveOrderBack(orders[0].id);
  };

  render() {
    const { title, name, ingredients, orders } = this.props;

    return (
      <Box
        title={title}
        onNext={this.handleNext}
        onBack={this.handleBack}
        className={`t-conveyor-${name}`}
        buttons={ingredients.map(ingredient => (
          <Button
            key={ingredient}
            data-icon={ingredient}
            onClick={this.handleClick}
            className={cx(`t-add-icon-${ingredient}`)}
          >
            <span data-icon={ingredient} className={styles.icon}>
              <Emojis size={28}>{this.findIcon(ingredient)}</Emojis>
            </span>
          </Button>
        ))}
      >
        {orders.map(order => (
          <Order key={order.id} {...order} />
        ))}
      </Box>
    );
  }
}

export default connect(
  (state, props) => ({
    orders: getOrdersFor(state, props.name)
  }),
  {
    addIngredient,
    moveOrderBack,
    moveOrderNext
  }
)(ConveyorElement);
