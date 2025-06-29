import React, { useState } from 'react';

function SignInform({ onSignInSuccess }) {
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
      if (onSignInSuccess) onSignInSuccess(email); // Pass email to parent
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
            className='input-field'
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
        <form onSubmit={handleOtpSubmit} className='form'>
          <input
          className='input-field'
            type="text"
            placeholder="Enter OTP"
            value={otp}
            required
            onChange={e => setOtp(e.target.value)}
          />
          <button type="submit">Verify OTP</button>
        </form>
      )}
    </div>
  );
}

export default SignInform;