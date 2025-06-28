// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import SignInform from './components/SignInform';
import ProfilePage from './components/ProfilePage';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleSignInSuccess = (email) => {
    setSignedIn(true);
    setUserEmail(email);
  };

  const isAdmin = userEmail === "adarshreddy2106@gmail.com";

  return (
    <div className="App">
      <header className="App-header">
         Welcome
      </header>
      {signedIn ? (
        isAdmin ? (
          <AdminDashboard />
        ) : (
          <ProfilePage />
        )
      ) : !showSignIn ? (
        <button onClick={() => setShowSignIn(true)}>Sign In</button>
      ) : (
        <SignInform onSignInSuccess={handleSignInSuccess} />
      )}
    </div>
  );
}

export default App;
