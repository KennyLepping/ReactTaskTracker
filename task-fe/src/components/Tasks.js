import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.slice(0).reverse().map((task, index) => (
        <Task
          key={index}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
