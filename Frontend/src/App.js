// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import SignInform from './components/SignInform';
import ProfilePage from './components/ProfilePage';
import AdminDashboard from './components/AdminDashboard';
import ContactForm from './components/Contact'; 
import ImageSlider from './components/ImageSlider';
import Testimonials from './components/Testimonials';

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
         IAR Cell  Recruitment Task
      </header>
      {signedIn ? (
        isAdmin ? (
          <AdminDashboard />
        ) : (
          <>
            <ProfilePage />
            <ContactForm />
          </>
        )
      ) : !showSignIn ? (
        <button onClick={() => setShowSignIn(true)}>Sign In</button>
      ) : (
        <SignInform onSignInSuccess={handleSignInSuccess} />
      )}
      {!signedIn && !showSignIn && (
        <>
          <ImageSlider />
          <Testimonials />
        </>
      )}
    </div>
  );
}

export default App;
