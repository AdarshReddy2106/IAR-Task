import React from 'react';

function AdminDashboard() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Admin Dashboard</h2>
      <button style={{ marginBottom: '1rem' }}>Add Alumni</button>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f0f0f0' }}>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Email</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Batch</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>1</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>Adarsh</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>adarsh@gmail.com</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>2020</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>
              <button style={{ marginRight: '0.5rem' }}>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;