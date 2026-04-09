import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button/Button';
import Input from '../components/common/Input/Input';
import RadioGroup from '../components/common/Radio/RadioGroup';

function Register() {
  const [isAgency, setIsAgency] = useState('yes');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/account');
  };

  return (
    <div className="container page-container" style={{ paddingBottom: '30px' }}>
      <h1 className="page-heading">Create your<br/>PopX account</h1>
      
      <form onSubmit={handleRegister} style={{ flex: 1, display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
        <Input label="Full Name" type="text" placeholder="Enter your full name" required />
        <Input 
          label="Phone number" 
          type="tel" 
          placeholder="Enter your phone number" 
          pattern="[0-9]*"
          maxLength={10}
          onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, '') }}
          required 
        />
        <Input label="Email address" type="email" placeholder="Enter email address" required />
        <Input label="Password" type="password" placeholder="Enter password" required />
        <Input label="Company name" type="text" placeholder="Enter company name" />

        <RadioGroup 
          label="Are you an Agency?" 
          name="agency" 
          options={[
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' }
          ]}
          selectedValue={isAgency} 
          onChange={setIsAgency} 
          required 
        />

        <div className="auth-btn-container" style={{ paddingBottom: 0 }}>
          <Button type="submit" variant="primary" style={{ marginBottom: 0 }}>
            Create Account
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Register;
