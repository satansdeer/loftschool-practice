import React, { PureComponent } from 'react';
import styles from './Login.module.css';
import { getIsAuthorized, addApiKey } from '../../modules/Auth';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import Input from '../Input';

class Login extends PureComponent {
  // на время разработки свой access token можно вставить сюда, чтобы
  // не вводить каждый раз
  state = {
    key: ''
  };

  input = React.createRef();

  handleChange = event => {
    this.setState({ key: event.target.value });
  };

  handleKeyPress = event => {
    const { addApiKey } = this.props;
    const { key } = this.state;

    if (event.key === 'Enter') addApiKey(key);
  };

  componentDidMount() {
    this.input.current.focus();
  }

  render() {
    const { isAuthorized } = this.props;
    const { key } = this.state;

    if (isAuthorized) return <Redirect to="/search" />;

    return (
      <div className={styles.root}>
        <h1>Токен авторизации</h1>
        <p className={styles.p}>
          Получить токен нужно на своей странице github, перейдите по{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/settings/tokens"
          >
            адресу
          </a>{' '}
          и создать себе токен. Запишите куда нибудь токен, так как после
          создания доступ к нему будет только один раз.
        </p>

        <Input
          ref={this.input}
          value={key}
          placeholder="access token"
          className='t-login-input'
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />

        <p>После ввода нажмите Enter</p>
      </div>
    );
  }
}

export default connect(
  state => ({ isAuthorized: getIsAuthorized(state) }),
  { addApiKey }
)(withRouter(Login));
