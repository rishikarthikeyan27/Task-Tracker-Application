import { useState } from 'react';
import Header from '../src/components/Header';
import Tasks from './components/Tasks';
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30 pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30 pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Grocery Shopping',
      day: 'Feb 5th at 2:30 pm',
      reminder: false,
    },
  ]);

  // Delete task
  const deleteTask = (id) => {
    console.log('Deleted : ', id);
  };

  return (
    <div className='container'>
      <Header title='Task Tracker' />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
