import Task from "./Task";

export default function TaskList({ tasks,onChange,onDelete }) {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onChange={onChange} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
}
