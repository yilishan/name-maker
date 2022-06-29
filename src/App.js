import logo from './logo.svg';
import './App.css';
import { getName } from './utils';

function App() {
  const name = getName();
  console.log('name==', name);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        最美起名器
      </header>
    </div>
  );
}

export default App;
