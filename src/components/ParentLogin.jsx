import { useState } from "react";
import WelcomeMessage from "./WelcomeMessage";
import LoginForm from "./LoginForm";

export default function ParentLogin() {
    
    // State for login status
    const [isLogin, setIsLogin] = useState(false);
    const [username, setUsername]= useState('');

    // Handler to update login status
    const handleLogin=(username)=>{
        setIsLogin(true);
        setUsername(username)
    }

    const handleLogout=()=>{
        setIsLogin(false);
    }

    return (
      <div>
        {isLogin ? (
          <WelcomeMessage  username={username} onLogout={handleLogout} />
        ) : (
          <LoginForm onLogin={handleLogin} />
        )}
      </div>
    );
  }
  