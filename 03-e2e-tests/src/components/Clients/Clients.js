import React, { PureComponent } from 'react';
import Button from '../Button';
import createOrder from '../../modules/clients';
import { getOrdersFor } from '../../reducers/orders';
import { moveOrderNext } from '../../actions/moveOrder';
import { connect } from 'react-redux';
import Box from '../Box';
import Order from '../Order';

class Clients extends PureComponent {
  handleNext = () => {
    const { moveOrderNext, orders } = this.props;
    if (orders.length > 0) moveOrderNext(orders[0].id);
  };

  render() {
    const { createOrder, orders } = this.props;

    return (
      <Box
        title="Клиенты"
        className="t-clients"
        buttons={
          <Button className="t-new-order" onClick={createOrder}>
            Новый заказ
          </Button>
        }
        onNext={this.handleNext}
      >
        {orders.map(order => (
          <Order key={order.id} {...order} />
        ))}
      </Box>
    );
  }
}

export default connect(
  state => ({
    orders: getOrdersFor(state, 'clients')
  }),
  { createOrder, moveOrderNext }
)(Clients);
