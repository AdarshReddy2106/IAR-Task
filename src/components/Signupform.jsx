import React, { useState } from 'react';

function Signupform() {
  const [step, setStep] = useState('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const newOtp = Math.floor(Math.random() * 999999).toString();
    setGeneratedOtp(newOtp);
    setStep('otp');
    console.log(`OTP for ${email}: ${newOtp}`); // Sending Dummy OTP 
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp === generatedOtp) {
      setStep('success');
    } else {
      alert('Invalid OTP. Try again.');
    }
  };

  return (
    <div>
      {step === 'email' && (
        <form onSubmit={handleEmailSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
          />
          <button type="submit">Send OTP</button>
        </form>
      )}
      {step === 'otp' && (
        <form onSubmit={handleOtpSubmit}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            required
            onChange={e => setOtp(e.target.value)}
          />
          <button type="submit">Verify OTP</button>
        </form>
      )}
      {step === 'success' && <div>Sign-In Successful!</div>}
    </div>
  );
}

export default Signupform;