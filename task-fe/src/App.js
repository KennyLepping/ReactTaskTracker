import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from "./components/About";
import axios from "./api/taskTrackerAPI";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // Fetch Tasks
  // Can replace the JSON server with any backend
  const fetchTasks = async () => {
  const res = await axios.get("tasks/tasks/");

    return res.data;
  };

  const fetchTask = async (id) => {
    const res = await axios.get(`tasks/tasks/${id}/`);

    return res.data;
  };

  // Add Task
  const addTask = async (task) => {
    const res = await axios.post("tasks/tasks/", task);

    setTasks([...tasks, res.data]);
  };

  // Delete Task
  const deleteTask = async (id) => {
    const res = await axios.delete(`tasks/tasks/${id}/`);

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    const res = await axios.put(`tasks/tasks/${id}/`, updTask);

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: res.data.reminder } : task
      )
    );
  };

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                "No Tasks To Show"
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
