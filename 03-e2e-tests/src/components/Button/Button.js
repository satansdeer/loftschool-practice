import React, { PureComponent } from 'react';
import styles from './Button.module.css';
import cx from 'classnames';

class Button extends PureComponent {
  render() {
    const { children, className, ...rest } = this.props;
    return (
      <button {...rest} className={cx(styles.button, className)}>
        {children}
      </button>
    );
  }
}

export default Button;
