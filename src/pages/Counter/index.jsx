import React from "react";
import styles from "./Counter.module.scss";

function Counter() {
  const [state, setState] = React.useState(0);
  return <div id={styles.root}>
    <h1 className={styles.title}>Counter App</h1>
    <h2 className={styles.counter}>{state}</h2>
    <button className={`${styles.decrease} ${styles.btn}`} onClick={() => setState(state - 1)}>-</button>
    <button className={`${styles.reload} ${styles.btn}`} onClick={() => setState(0)}><i className="fa-solid fa-rotate-right"></i></button>
    <button className={`${styles.increase} ${styles.btn}`} onClick={() => setState(state + 1)}>+</button>
  </div>;
}

export default Counter;