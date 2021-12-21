import { useState, useEffect } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);

  const [showAddTask, setShowAddTask] = useState(false);

  const baseUrl = "https://git.heroku.com/ethan-task-tracker.git";

  // CRUD Create Read Update, Delete

  // Fetch Tasks
  // const fetchTasks = async () => {
  //   const res = await fetch(baseUrl);
  //   const data = await res.json();
  //   console.log(data);
  // };

  // Fetch tasks with axios
  const fetchTasks = async () => {
    // const res = await axios.get(baseUrl);
    const { data } = await axios.get(baseUrl);
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // ADD TASK
  // const addTask = async (newTask) => {
  //   const res = await fetch(baseUrl, {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify(newTask),
  //   });
  //   fetchTasks();
  // };

  const addTask = async (newTask) => {
    await axios.post(baseUrl, newTask);
    fetchTasks();
  };

  // const addTask = (newTask) => {
  //   const id = Math.floor(Math.random() * 100) + 1;
  //   const addNewTask = { id, ...newTask };
  //   setTasks([...tasks, addNewTask]);
  // };

  // DELETE TASK
  const deleteTask = async (deletedTaskId) => {
    await axios.delete(`${baseUrl}/${deletedTaskId}`);
    fetchTasks();
  };

  // const deleteTask = async (deletedTaskId) => {
  //   await fetch(`${baseUrl}/${deletedTaskId}`, {
  //     method: "DELETE",
  //   });
  //   fetchTasks();
  // };

  // const deleteTask = (deletedTaskId) => {
  // console.log("delete", deletedTask);
  //   setTasks(tasks.filter((task) => task.id !== deletedTaskId));
  // };

  //TOGGLE DONE
  const toggleDone = async (toogleDoneId) => {
    const { data } = await axios.get(`${baseUrl}/${toogleDoneId}`);
    const updatedTask = { ...data, isDone: !data.isDone };

    await axios.put(`${baseUrl}/${toogleDoneId}`, updatedTask);
    fetchTasks();
  };

  // const toggleDone = async (toogleDoneId) => {
  //   const res = await fetch(`${baseUrl}/${toogleDoneId}`);
  //   const data = await res.json();
  //   const updatedTask = { ...data, isDone: !data.isDone };

  //   await fetch(`${baseUrl}/${toogleDoneId}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify(updatedTask),
  //   });
  //   fetchTasks();
  // };

  // const toggleDone = (toogleDoneId) => {
  //   setTasks(
  //     tasks.map((task) =>
  //       task.id === toogleDoneId ? { ...task, isDone: !task.isDone } : task
  //     )
  //   );
  // };

  //TOOGLESHOW
  const toggleShow = () => setShowAddTask(!showAddTask);

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        showAddTask={showAddTask}
        toggleShow={toggleShow}
      />
      {showAddTask && <AddTask addTask={addTask} />}
      {/* <Tasks tasks={tasks} deleteTask={deleteTask} toggleDone={toggleDone} /> */}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} deleteTask={deleteTask} toggleDone={toggleDone} />
      ) : (
        <p style={{ textAlign: "center" }}>No Tasks to Show</p>
      )}
    </div>
  );
}

export default App;
