import React from 'react';

import styles from './TasksNotSelected.module.css';

export const TasksNotSelected = (): React.JSX.Element => {
  return (
    <div className={styles.notSelected}>
      <h1>Выберите папку с задачами</h1>
    </div>
  );
};
