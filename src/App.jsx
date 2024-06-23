import "./App.css";
import Accordion from "./components/Accordian";
import CounterReducer from "./components/CounterReducer";
import FormReducer from "./components/FormReducer";
import Messenger from "./components/Messenger";
import MultiCountReducer from "./components/MultiCountReducer";
import ParentColorPicker from "./components/ParentColorPicker";
import Parent from "./components/ParentCounter";
import ParentFormInput from "./components/ParentFormInput";
import ParentInput from "./components/ParentInput";
import ParentListItem from "./components/ParentListItem";
import ParentLogin from "./components/ParentLogin";
import ParentProfile from "./components/ParentProfile";
import ParentTodo from "./components/ParentTodo";
import PreservingParent from "./components/PreservingParent";
import ProfileList from "./components/ProfileList";
import TodoReducer from "./components/TodoReducer";
import TodoReducerWithImage from "./components/TodoReducerWithImage";
import { ThemeProvider } from "./context/ThemeContext";
import ThemedComponent from "./components/ThemedComponent";
import ThemeToggleButton from "./components/ThemeToggleButton";
import { CounterProvider } from "./context/CounterContext.jsx";
import CounterDisplay from "./components/CounterDisplay";
import CounterButtons from "./components/CounterButtons";
import CounterRef from "./components/CounterRef.jsx";
import Stopwatch from "./components/Stopwatch.jsx";
import AutoFocusInput from "./components/AutoFocusInput.jsx";
import CounterWithPrevious from "./components/CounterWithPrevious.jsx";

function App() {
  return (
    <>
   <CounterWithPrevious/>
    </>
  );
}

export default App;
