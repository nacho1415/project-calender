import React from 'react';
import styles from './style.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { stateSelectedDate } from '../../../../../../store/selectors/date';
import { selectDate } from '../../../../../../store/date';
import Moment from '../../../../../../utils/moment';
import useNavigateDayCalendar from '../../../../../../hooks/useNavigateDayCalendar';

const Index = ({ week, month }) => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(stateSelectedDate);

  const { moveDayCalendar } = useNavigateDayCalendar();

  return (
    <tr className={styles.calendar_tr}>
      {week.map((date, index) => (
        <td
          key={index}
          className={`${initDateClassName(date, month, selectedDate)}`}
          onClick={() => dispatch(selectDate(date))}
          onDoubleClick={() => moveDayCalendar(date)}
        >
          <em>{date.date}</em>
        </td>
      ))}
    </tr>
  );
};

function initDateClassName(date, month, selectedDate) {
  let className = '';
  const today = new Moment(new Date());
  if (isOtherMonth(date, month)) className = styles.date_blur;
  else if (isSameDate(date, today)) className = styles.date_today;
  else if (isSameDate(date, selectedDate)) className = styles.date_select;

  return className;
}

function isSameDate(date, otherDate) {
  return (
    date.year === otherDate.year &&
    date.month === otherDate.month &&
    date.date === otherDate.date
  );
}

function isOtherMonth(date, month) {
  return date.month !== month;
}

Index.propTypes = {
  week: PropTypes.array,
  month: PropTypes.number,
};

export default Index;
