import logo from './logo.svg';
import './App.css';
import Main from "./Components/Main"
import Navbar from "./Components/Navbar"



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar />
        <Main />
      </header>
    </div>
  );
}

export default App;
