export default function WelcomeMessage({ username, onLogout }) {
    return (
      <div>
        <h1>Welcome!{username}</h1>
        <button onClick={onLogout}>Logout</button>
      </div>
    );
  }
  