import { useState } from "react";

export default function LoginForm({ onLogin }) {
   
    // Local state for login form
   const [username , setUsername]= useState('')
   const [password , setPassword]= useState('')

    // Handler for form submission
    const handleLoginSubmit=(e)=>{
        e.preventDefault();

        if( username && password){
            onLogin(username)
            setUsername('')
            setPassword('')
        }

       
    }

    return (
      <form onSubmit={handleLoginSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
        <input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        <button type="submit">Login</button>
      </form>
    );
  }
  