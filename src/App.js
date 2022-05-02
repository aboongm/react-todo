<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './function-based/components/NavBar';
import About from './function-based/components/About';
import NoPage from './function-based/components/NoPage';
import TodoContainer from './function-based/components/TodoContainer';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<About />} />
        <Route path="todoContainer" element={<TodoContainer />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
>>>>>>> dev

export default App;
