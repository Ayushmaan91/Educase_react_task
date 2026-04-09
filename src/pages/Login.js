import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button/Button';
import Input from '../components/common/Input/Input';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('popx_user_email', email);
    if (!localStorage.getItem('popx_user_name')) {
      localStorage.setItem('popx_user_name', 'Marry Doe');
    }
    navigate('/account');
  };

  return (
    <div className="container page-container">
      <div style={{ marginBottom: '20px', cursor: 'pointer', fontSize: '14px', fontWeight: '500', color: '#1D2226' }} onClick={() => navigate(-1)}>
        &larr; Back
      </div>
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
          hideAsterisk
        />
        <Input 
          label="Password" 
          type="password" 
          placeholder="Enter password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
          hideAsterisk
        />

        <div style={{ paddingBottom: '30px' }}>
          <Button 
            type="submit" 
            variant={isFormValid ? 'primary' : 'disabled'}
            disabled={!isFormValid}
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
