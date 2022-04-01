import logo from './logo.svg';
import './App.css';
import SampleCard from './components/SampleCard';

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
        <SampleCard
          heading="Sessions"
          primaryText="98.3 K"
          lastText="vs. last week"
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Test React
        </a>
      </header>
    </div>
  );
}

export default App;
