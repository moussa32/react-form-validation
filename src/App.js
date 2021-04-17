import './App.css';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <div className="container vh-100">
        <div className="row">
          <div className="col-md-6 mx-auto align-items-center form-container">
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
