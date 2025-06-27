// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import SignInform from './components/SignInform';
import ProfilePage from './components/ProfilePage';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false); // false = Profile, true = Dashboard

  return (
    <div className="App">
      <header className="App-header">
         Welcome
      </header>
      {signedIn ? (
        <div>
          <div style={{ marginBottom: 16 }}>
            <button onClick={() => setShowDashboard(false)} style={{ marginRight: 8 }}>
              Profile Page
            </button>
            <button onClick={() => setShowDashboard(true)}>
              Admin Dashboard
            </button>
          </div>
          {showDashboard ? <AdminDashboard /> : <ProfilePage />}
        </div>
      ) : !showSignIn ? (
        <button onClick={() => setShowSignIn(true)}>Sign In</button>
      ) : (
        <SignInform onSignInSuccess={() => setSignedIn(true)} />
      )}
    </div>
  );
}

export default App;
