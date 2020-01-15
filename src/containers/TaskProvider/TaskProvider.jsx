import React, { useState } from 'react';

export const TaskContext = React.createContext({});

const TaskProvider = ({ children }) => {
  const [tasks, setTasks ]       = useState([]);
  const [nextTask, setNextTask ] = useState('');

  console.log('tasks', tasks);

  return (
    <TaskContext.Provider
      value={{
        setTasks   : setTasks,
        nextTask   : nextTask,
        setNextTask: setNextTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
