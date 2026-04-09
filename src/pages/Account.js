import React from 'react';

function Account() {
  return (
    <div className="container account-container">
      <div className="account-header">
        Account Settings
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
            <h3>Marry Doe</h3>
            <p>Marry@Gmail.Com</p>
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
