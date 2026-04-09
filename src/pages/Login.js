import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button/Button';
import Input from '../components/common/Input/Input';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/account');
  };

  return (
    <div className="container page-container">
      <h1 className="page-heading">Signin to your<br/>PopX account</h1>
      <p className="page-sub">
        Lorem ipsum dolor sit amet,<br />
        consectetur adipiscing elit,
      </p>
      
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
        <Input 
          label="Email Address" 
          type="email" 
          placeholder="Enter email address" 
          required 
          hideAsterisk
        />
        <Input 
          label="Password" 
          type="password" 
          placeholder="Enter password" 
          required 
          hideAsterisk
        />

        <div style={{ paddingBottom: '30px' }}>
          <Button type="submit" variant="disabled">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
