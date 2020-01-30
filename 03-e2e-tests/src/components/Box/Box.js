import React, { PureComponent } from 'react';
import Button from '../Button';
import styles from './Box.module.css';
import cx from 'classnames';

class Box extends PureComponent {
  renderControllButtons() {
    const { onNext, onBack } = this.props;

    if (onNext || onBack) {
      return (
        <div className={styles.controllButtons}>
          <div className={styles.controllButton}>
            {onBack && (
              <Button className="t-back" onClick={onBack}>{`<`}</Button>
            )}
          </div>
          <div className={styles.controllButton}>
            {onNext && (
              <Button className="t-next" onClick={onNext}>{`>`}</Button>
            )}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    const { children, title, buttons, className } = this.props;
    return (
      <div className={cx(styles.container, className)}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.buttons}>{buttons}</div>
        {this.renderControllButtons()}
        {React.Children.count(children) > 0 && (
          <div className={styles.childrens}>{children}</div>
        )}
      </div>
    );
  }
}

export default Box;
