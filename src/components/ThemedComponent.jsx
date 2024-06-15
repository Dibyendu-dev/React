// ThemedComponent.js
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemedComponent = () => {
  // Tune in to the ThemeContext (the radio channel)
  const { theme } = useContext(ThemeContext);

  const style = {
    background: theme === 'dark' ? '#333' : '#FFF',
    color: theme === 'dark' ? '#FFF' : '#000',
    padding: '20px',
    textAlign: 'center'
  };

  return <div style={style}>Current Theme: {theme}</div>;
};

export default ThemedComponent;
