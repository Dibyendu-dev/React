import React, { useReducer } from 'react';

const initialState = {
  name: '',
  email: ''
};

function reducer(state, action) {
  switch (action.type) {
   case 'updateName':
    return {...state, name: action.payload}
    case 'updateEmail':
    return {...state, email: action.payload}
    default :
        throw new Error("unknown action type");
  }
}

function FormReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Form submitted: for ${state.email}`);
   
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder='enter the name'
        value={state.name} 
        onChange={(e) => dispatch({ type: 'updateName', payload: e.target.value })} 
      />
      <input 
        type="email" 
        value={state.email} 
        placeholder='enter the email'
        onChange={(e) => dispatch({ type: 'updateEmail', payload: e.target.value })} 
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormReducer;
