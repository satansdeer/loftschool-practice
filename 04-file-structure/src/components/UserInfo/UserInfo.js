import React, { PureComponent } from 'react';
import styles from './UserInfo.module.css';
import cx from 'classnames';
import { connect } from 'react-redux';
import {
  getUser,
  getIsLoading as userLoading,
  getError as userError
} from '../../modules/User';
import { Error } from '../Error';
import { Loading } from '../Loading';

class UserInfo extends PureComponent {
  render() {
    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю
    const { user, userError, userLoading } = this.props;

    if (userError) {
      return <Error error={`Ошибка получения пользователя: ${userError}`} />;
    }

    if (userLoading) {
      return <Loading />;
    }

    if (!user) return null;
    return (
      <div className={styles.root}>
        <div className={cx(styles.root, styles.imageWrapper)}>
          <img
            className={cx(styles.root, styles.image)}
            alt={user.login}
            src={user.avatar_url}
          />
        </div>
        <div>
          <p className="t-user-name">{user.login}</p>
          <p className="t-user-bio">{user.bio}</p>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: getUser(state),
  userLoading: userLoading(state),
  userError: userError(state)
});
// Используйте поля data, isLoading из стейта
export default connect(mapStateToProps)(UserInfo);
