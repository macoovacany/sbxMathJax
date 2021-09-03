import './App.css';
import MathjaxForm from './components/MathjaxForm';

function App() {
  return (
    <div className="App">
      <main>
        <h1> Dependendencies</h1>
        <ul>
          <li>
            <a href="https://www.npmjs.com/package/mathjax-react">math-jax react</a>
          </li>
        </ul>
        <MathjaxForm />
      </main>
    </div>
  );
}

export default App;
