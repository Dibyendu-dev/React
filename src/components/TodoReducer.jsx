import  { useReducer, useState } from 'react';

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'addTodo':
      // Add a new todo to the list
      return [...state, { text: action.payload, completed: false }];
    case 'toggleTodo':
      // Toggle the completed status of the todo at the specified index
      return state.map((todo, index) => 
        index === action.index ? { ...todo, completed: !todo.completed } : todo
      );
    case 'removeTodo':
      // Remove the todo at the specified index
      return state.filter((_, index) => index !== action.index);
    case 'editTodo':
      // Edit the text of the todo at the specified index
      return state.map((todo, index) =>
        index === action.index ? { ...todo, text: action.payload } : todo
      );
    default:
      throw new Error('Unknown action type');
  }
}

function TodoReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  // Function to handle adding a new todo
  const handleAddTodo = () => {
    if (text.trim() !== '') {
      if (isEditing) {
        dispatch({ type: 'editTodo', payload: text, index: currentIndex });
        setIsEditing(false);
        setCurrentIndex(null);
      } else {
        dispatch({ type: 'addTodo', payload: text });
      }
      setText('');
    }
  };

  // Function to start editing a todo
  const handleEditTodo = (index, currentText) => {
    setText(currentText);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Enter a todo"
      />
      <button onClick={handleAddTodo}>
        {isEditing ? 'Save Todo' : 'Add Todo'}
      </button>
      <ul>
        {state.map((todo, index) => (
          <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <span onClick={() => dispatch({ type: 'toggleTodo', index })}>
              {todo.text}
            </span>
            <button onClick={() => handleEditTodo(index, todo.text)}>Edit</button>
            <button onClick={() => dispatch({ type: 'removeTodo', index })}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoReducer;
