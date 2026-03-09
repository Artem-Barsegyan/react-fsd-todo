import React from 'react';

import { Sidebar } from '@/widgets/sidebar';
import { TasksContainer } from '@/widgets/tasksContainer';

import styles from './Main.module.css';

export const Main = (): React.JSX.Element => {
  const tasksContainerRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className={styles.layoutWrapper}>
      <div className={styles.layout}>
        <Sidebar tasksContainerRef={tasksContainerRef} />
        <TasksContainer tasksContainerRef={tasksContainerRef} />
      </div>
    </div>
  );
};
