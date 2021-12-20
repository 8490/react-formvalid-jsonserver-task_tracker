// import { useState } from "react";
import Task from "./Task";

const Tasks = ({ tasks, deleteTask, toggleDone }) => {
  //   const [tasks, setTasks] = useState([
  //     {
  //       id: 1,
  //       text: "Study React Pre-Class Notes",
  //       day: "Dec 12th at 2:30pm",
  //       isDone: false,
  //     },
  //     {
  //       id: 2,
  //       text: "Feed the Dog",
  //       day: "Dec 13th at 1:30pm",
  //       isDone: true,
  //     },
  //     {
  //       id: 3,
  //       text: "Wash Car",
  //       day: "Dec 14th at 3:00pm",
  //       isDone: false,
  //     },
  //   ]);
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleDone={toggleDone}
        />
      ))}
    </div>
  );
};

export default Tasks;
