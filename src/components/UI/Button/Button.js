import React from 'react';

import styles from './Button.module.css';

const Button = props => {
  return (
    // <button className={`styles.button ${!isValid && styled.invalid}`}></button>
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
