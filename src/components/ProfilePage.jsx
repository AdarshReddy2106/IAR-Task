import React, { useState } from 'react';

function ProfilePage() {
  // Provinding option for user to enter details
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    rollNumber: '',
    dateOfBirth: '',
    department: '',
    jobTitle: '',
    company: '',
    location: '',
    experience: '',
    skills: ''
  });

  // If profile is empty, show edit form by default
  const isProfileEmpty = Object.values(profile).every(val => val === '');
  const [edit, setEdit] = useState(isProfileEmpty);
  const [form, setForm] = useState(profile);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setProfile(form);
    setEdit(false);
  };

  const handleRequestVerification = () => {
    alert('Verification request sent!');
  };

  return (
    <div style={{ maxWidth: 500, margin: '2rem auto', padding: 24, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>Alumni Profile</h2>
      {!edit ? (
        <>
          <h3>Personal Details</h3>
          <p><b>Name:</b> {profile.name}</p>
          <p><b>Email:</b> {profile.email}</p>
          <p><b>Roll Number:</b> {profile.rollNumber}</p>
          <p><b>Date of Birth:</b> {profile.dateOfBirth}</p>
          <p><b>Department:</b> {profile.department}</p>
          <h3>Professional Details</h3>
          <p><b>Job Title:</b> {profile.jobTitle}</p>
          <p><b>Company:</b> {profile.company}</p>
          <p><b>Location:</b> {profile.location}</p>
          <p><b>Experience:</b> {profile.experience}</p>
          <p><b>Skills:</b> {profile.skills}</p>
          <button onClick={() => setEdit(true)} style={{ marginRight: 8 }}>Update Details</button>
          <button onClick={handleRequestVerification}>Request Verification</button>
        </>
      ) : (
        <form onSubmit={handleUpdate}>
          <h3>{isProfileEmpty ? 'Enter Your Details' : 'Update Details'}</h3>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" style={{ width: '100%', marginBottom: 8 }} required />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" style={{ width: '100%', marginBottom: 8 }} required />
          <input name="rollNumber" value={form.rollNumber} onChange={handleChange} placeholder="Roll Number" style={{ width: '100%', marginBottom: 8 }} required />
          <input name="dateOfBirth" value={form.dateOfBirth} onChange={handleChange} placeholder="Date of Birth" style={{ width: '100%', marginBottom: 8 }} required />
          <input name="department" value={form.department} onChange={handleChange} placeholder="Department" style={{ width: '100%', marginBottom: 8 }} required />
          <input name="jobTitle" value={form.jobTitle} onChange={handleChange} placeholder="Job Title" style={{ width: '100%', marginBottom: 8 }} required />
          <input name="company" value={form.company} onChange={handleChange} placeholder="Company" style={{ width: '100%', marginBottom: 8 }} required />
          <input name="location" value={form.location} onChange={handleChange} placeholder="Location" style={{ width: '100%', marginBottom: 8 }} required />
          <input name="experience" value={form.experience} onChange={handleChange} placeholder="Experience" style={{ width: '100%', marginBottom: 8 }} />
          <input name="skills" value={form.skills} onChange={handleChange} placeholder="Skills" style={{ width: '100%', marginBottom: 8 }} />
          <button type="submit" style={{ marginRight: 8 }}>Save</button>
          {!isProfileEmpty && (
            <button type="button" onClick={() => setEdit(false)}>Cancel</button>
          )}
        </form>
      )}
    </div>
  );
}

export default ProfilePage;