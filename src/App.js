// import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Signupform from './components/Signupform';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
         Welcome
      </header>
      {!showSignup ? (
        <button onClick={() => setShowSignup(true)}>Sign Up</button>
      ) : (
        <Signupform />
      )}
      <AdminDashboard/>
    </div>
  );
}

export default App;
