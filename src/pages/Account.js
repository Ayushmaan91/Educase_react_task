import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Account() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('Marry Doe');
  const [userEmail, setUserEmail] = useState('Marry@Gmail.Com');

  useEffect(() => {
    const storedName = localStorage.getItem('popx_user_name');
    const storedEmail = localStorage.getItem('popx_user_email');
    if (storedName) setUserName(storedName);
    if (storedEmail) setUserEmail(storedEmail);
  }, []);

  return (
    <div className="container account-container">
      <div className="account-header" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <span style={{ cursor: 'pointer', fontSize: '18px', display: 'flex', alignItems: 'center' }} onClick={() => navigate(-1)}>&larr;</span>
        <span>Account Settings</span>
      </div>
      
      <div className="account-content">
        <div className="profile-section">
          <div className="profile-pic-container">
            <img 
              src="/assests/Ellipse 114.png" 
              alt="Profile" 
              className="profile-pic"
            />
            <div className="camera-icon">
              <img src="/assests/Group 1585.svg" alt="Camera icon" />
            </div>
          </div>
          <div className="profile-info">
            <h3>{userName}</h3>
            <p>{userEmail}</p>
          </div>
        </div>
        
        <div className="profile-desc">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </div>
      </div>
    </div>
  );
}

export default Account;
