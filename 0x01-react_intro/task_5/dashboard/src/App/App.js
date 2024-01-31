import holbertonlogo from './holbertonlogo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';
import Notifications from './Notifications';

function App() {
  return (
    <div className="App">
      <div>
        <Notifications />
      </div>
      <header className="App-header">
        <img src={holbertonlogo} className="App-logo" alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <hr/ >
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
        <button>OK</button>
        </form>
      </div>
      <div className="App-footer">
        <hr/ >
        <p>Copyright {getFooterCopy(true)} - {getFullYear()}</p>
      </div>
    </div>
  );
}

export default App;
