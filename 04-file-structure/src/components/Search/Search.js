import React, { PureComponent } from 'react';
import styles from './Search.module.css';
import Input from '../Input';
import { connect } from 'react-redux';
import { fetchRequest as fetchUserRequest } from '../../modules/User';
import { fetchRequest as fetchFollowersRequest } from '../../modules/Followers';
import UserInfo from '../UserInfo';
import Followers from '../Followers';

class Search extends PureComponent {
  state = {
    user: ''
  };

  input = React.createRef();

  handleChange = event => {
    this.setState({ user: event.target.value });
  };

  handleKeyPress = event => {
    const { fetchUserRequest, fetchFollowersRequest } = this.props;
    const { user } = this.state;

    if (event.key === 'Enter' && user.length > 0) {
      fetchUserRequest(user);
      fetchFollowersRequest(user);
    }
  };

  componentDidMount() {
    this.input.current.focus();
  }

  render() {
    const { user } = this.state;

    return (
      <div className={styles.root}>
        <Input
          ref={this.input}
          value={user}
          className='t-search-input'
          placeholder="Ник пользователя"
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <UserInfo />
        <Followers />
      </div>
    );
  }
}

export default connect(
  undefined,
  { fetchUserRequest, fetchFollowersRequest }
)(Search);
