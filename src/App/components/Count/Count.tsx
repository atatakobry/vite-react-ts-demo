import useAppStore from '../../useAppStore';

import styles from './Count.module.scss';

const Count = () => {
  const { count, increment, reset } = useAppStore();

  return (
    <div className={styles.count}>
      <button type="button" onClick={increment}>
        count is {count}
      </button>
      <button type="button" onClick={reset}>
        reset
      </button>
    </div>
  );
};

export default Count;
