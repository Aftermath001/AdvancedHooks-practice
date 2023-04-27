import logo from './logo.svg';
import './App.css';
import Counter  from './Components/Counter';
import FocusInput from './Components/FocusInput';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         This is to illustrate Advanced Hooks.
        </p>
        <Counter/>
        <FocusInput/>
      </header>
    </div>
  );
}

export default App;
