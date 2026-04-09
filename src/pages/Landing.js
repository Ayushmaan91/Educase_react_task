import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button/Button';

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="container landing-container">
      <h1 className="landing-heading">Welcome to PopX</h1>
      <p className="landing-sub">
        Lorem ipsum dolor sit amet,<br />
        consectetur adipiscing elit,
      </p>
      
      <div style={{ paddingBottom: '10px' }}>
        <Button variant="primary" onClick={() => navigate('/register')}>
          Create Account
        </Button>
        <Button variant="secondary" onClick={() => navigate('/login')}>
          Already Registered? Login
        </Button>
      </div>
    </div>
  );
}

export default Landing;
