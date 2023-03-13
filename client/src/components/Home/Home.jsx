import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Link to="/task1">
        {' '}
        <button type="button"> Task-1 </button>
      </Link>
      <Link to="/task2">
        {' '}
        <button type="button"> Task-2 </button>
      </Link>
    </>

  );
}
