import React, { useState } from 'react';
import Taro from '@tarojs/taro';

const windowWidth = Taro.getSystemInfoSync().windowWidth
const windowHeight = Taro.getSystemInfoSync().windowHeight

// Define styles as JavaScript objects
const styles = {
  buttonBase: {
    backgroundColor: '#ec4899', // pink-500
    color: 'white',
    padding: '8px', // p-2
    borderRadius: '0.5rem', // rounded-lg
    marginBottom: '16px'
  },
  listItemBase: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '8px', // py-2
    paddingBottom: '8px', // py-2
    paddingLeft: '16px', // px-4
    paddingRight: '16px', // px-4
    borderRadius: '9999px', // rounded-full
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // shadow
    backgroundColor: 'white', // bg-white
  },
  listItemBaseDark: {
    backgroundColor: '#1f2937', // dark:bg-zinc-700
  },
  container: {
    width: `${windowWidth}`,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '16px', // p-4
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // shadow-lg
    backgroundColor: 'white', // bg-white
  },
  containerDark: {
    backgroundColor: '#27272a', // dark:bg-zinc-800
  },
  textGreen: {
    color: '#10b981', // text-green-500
  },
  textRed: {
    color: '#ef4444', // text-red-500
  },
  deleteButton: {
    backgroundColor: '#ef4444', // bg-red-500
    color: 'white',
    padding: '4px', // p-1
    borderRadius: '0.5rem', // rounded-lg
  }
};

const DateRecorder = () => {
  const [dates, setDates] = useState([]);

  const recordToday = () => {
    const today = new Date();
    const todayString = today.toLocaleString();
    const newDate = {
      id: today.getTime(),
      date: today,
      dateString: todayString,
    };
    setDates([newDate, ...dates.slice(0, 2)]);
  };

  const deleteDate = (id) => {
    setDates(dates.filter(date => date.id !== id));
  };

  return (
    <div style={styles.container}>
      <button onClick={recordToday} style={styles.buttonBase}>Record Today</button>
      <ul>
        {dates.map((date, index) => (
          <DateItem key={date.id} date={date} index={index} dates={dates} onDelete={deleteDate} />
        ))}
      </ul>
    </div>
  );
};

const DateItem = ({ date, index, dates, onDelete }) => {
  let diffDaysSpan = null;
  if (index > 0) {
    const diffTime = Math.abs(date.date - dates[index - 1].date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const colorClass = diffDays < 45 ? styles.textGreen : styles.textRed;
    diffDaysSpan = <span style={colorClass}> ({diffDays} days ago)</span>;
  }

  return (
    <li style={styles.listItemBase}>
      <span>{date.dateString} {diffDaysSpan}</span>
      <button onClick={() => onDelete(date.id)} style={styles.deleteButton}>Delete</button>
    </li>
  );
};

export default DateRecorder;
