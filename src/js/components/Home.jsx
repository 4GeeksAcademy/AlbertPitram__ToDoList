import React from 'react';
import Todolist from './Todolist';

const Home = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">todos</h1>
      <Todolist />
    </div>
  );
};

export default Home;
