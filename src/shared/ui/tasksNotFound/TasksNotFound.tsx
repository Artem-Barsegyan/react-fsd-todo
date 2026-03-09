import React from 'react';

import styles from './TasksNotFound.module.css';

export const TasksNotFound = (): React.JSX.Element => {
  return (
    <div className={styles.notFound}>
      <h1>Папки с задачами отсутствуют</h1>
    </div>
  );
};
