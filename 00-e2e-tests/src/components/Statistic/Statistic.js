import React, { PureComponent } from 'react';
import Box from '../Box';
import { getOrdersFor } from '../../reducers/orders';
import { connect } from 'react-redux';
import pluralize from 'pluralize-ru';

class Statistic extends PureComponent {
  render() {
    const { orders } = this.props;
    return (
      <Box title="Статистика" className='t-statistic'>
        {pluralize(
          orders.length,
          'Создано 0 пицц',
          'Создана %d пицца',
          'Создано %d пиццы',
          'Создано %d пицц'
        )}
      </Box>
    );
  }
}

export default connect(state => ({
  orders: getOrdersFor(state, 'finish')
}))(Statistic);
