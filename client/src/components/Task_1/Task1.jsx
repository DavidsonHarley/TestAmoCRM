import React, { useState } from 'react';
import Timer from './Timer';
import styles from './Task1.module.css';

export default function Task1() {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
  });
  const handleInput = (e) => {
    setTime({ ...time, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTime(time);
    console.log(time);
  };
  return (
    <div className={styles.containerTime}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>Hours:</div>
        <input type="text" name="hours" value={time.hours} onChange={handleInput} />
        <div>Minutes:</div>
        <input type="text" name="minutes" value={time.minutes} onChange={handleInput} />
      </form>
      <Timer
        hours={time.hours}
        minutes={time.minutes}
      />
    </div>

  );
}
