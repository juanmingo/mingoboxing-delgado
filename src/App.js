import logo from './logo.svg';
import './App.css';

import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mingo Boxing
        </p>
        <Navbar></Navbar>        
        <a
          className="App-link"
          href="https://github.com/juanmingo/mingoboxing-delgado"
          target="_blank"
          rel="noopener noreferrer"
        >
        Tienda
        </a>
      </header>
    </div>
  );
}

export default App;
