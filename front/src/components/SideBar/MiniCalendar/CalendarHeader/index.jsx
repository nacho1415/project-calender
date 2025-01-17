import React from 'react';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Tooltip from '../../../common/Tooltip';

import { useDispatch, useSelector } from 'react-redux';
import { addMonth } from '../../../../store/date';

const Index = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(({ date }) => date.selectedDate);

  return (
    <div className={styles.year}>
      <div className={styles.text}>
        <em>{selectedDate.year}년</em>
        <em>{selectedDate.month}월</em>
      </div>
      <div className={styles.year_btt}>
        <Tooltip title="이전 달">
          <button onClick={() => dispatch(addMonth(-1))}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
        </Tooltip>
        <Tooltip title="다음 달">
          <button onClick={() => dispatch(addMonth(1))}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default Index;
