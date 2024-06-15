import  { useReducer, useState } from 'react';

import { FaEdit, FaTrashAlt } from 'react-icons/fa';

// Initial state is an empty array of todos
const initialState = [];

// Reducer function to handle different actions
function reducer(state, action) {
  switch (action.type) {
    case 'addTodo':
      return [...state, { text: action.payload.text, completed: false, image: action.payload.image }];
    case 'toggleTodo':
      return state.map((todo, index) => 
        index === action.index ? { ...todo, completed: !todo.completed } : todo
      );
    case 'removeTodo':
      return state.filter((_, index) => index !== action.index);
    case 'editTodo':
      return state.map((todo, index) =>
        index === action.index ? { ...todo, text: action.payload } : todo
      );
    default:
      throw new Error('Unknown action type');
  }
}

// Main component for the Todo app
function TodoReducerWithImage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      if (isEditing) {
        dispatch({ type: 'editTodo', payload: text, index: currentIndex });
        setIsEditing(false);
        setCurrentIndex(null);
      } else {
        dispatch({ type: 'addTodo', payload: { text, image } });
      }
      setText('');
      setImage(null);
    }
  };

  const handleEditTodo = (index, currentText) => {
    setText(currentText);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a todo"
        className="todo-input"
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="upload-input"
      />
      <button onClick={handleAddTodo} className="add-button">
        {isEditing ? 'Save Todo' : 'Add Todo'}
      </button>
      <ul className="todo-list">
        {state.map((todo, index) => (
          <li key={index} className="todo-item">
            {todo.image && <img src={todo.image} alt="Todo" className="todo-image" />}
            <span
              className={`todo-text ${todo.completed ? 'completed' : ''}`}
              onClick={() => !todo.image && dispatch({ type: 'toggleTodo', index })}
            >
              {todo.text}
            </span>
            <FaEdit onClick={() => handleEditTodo(index, todo.text)} className="icon edit-icon" />
            <FaTrashAlt onClick={() => dispatch({ type: 'removeTodo', index })} className="icon delete-icon" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoReducerWithImage;
