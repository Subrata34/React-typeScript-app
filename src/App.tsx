
import './App.css';
import User from './Components/User';

function App() {
  return (
    <div className="App">
      <h1>This is typescript</h1>
      <h1>User Mangment</h1>
      <User name="Subrata Modak" age={26}></User>
    </div>
  );
}

export default App;
