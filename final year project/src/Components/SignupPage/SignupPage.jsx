import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import image10 from '../../assets/image 10.png';

const SignupPage = () => {
  const [name, setName] = useState(''); // New field for the user's name
  const [usernameOrEmail, setUsernameOrEmail] = useState(''); // Combined field for email or username
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
  
    if (!usernameOrEmail.trim() || !password.trim()) {
      setError('Please provide an email or username and a password');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:3000/api/auth/signup', {
        name,
        usernameOrEmail,
        password,
      });
      if (response.status === 201) {
        alert('Signup successful');
        navigate('/login');
      }
    } catch (err) {
      console.error('Error from backend:', err.response?.data); // Debugging log
      setError(err.response?.data?.message || 'Signup failed');
    }
  };
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div className='card mt-5' style={{ backgroundColor: "#171728", borderRadius: "10px" }}>
        <div className='my-5 mx-3 row' style={{ backgroundColor: "#ffffff", borderRadius: "20px" }}>
          <div className='col-lg-6'>
            <img src={image10} alt="Signup" className="img-fluid w-75 ms-4 py-4" />
          </div>
          <div className='col-lg-6'>
            <div className='text-center mt-5'>
              <h4>Join Us Now</h4>
              <p>Your adventure in tech starts here</p>
              <form className='m-4' onSubmit={handleSubmit}>
                <div className="py-2">
                  <input
                    type="text"
                    className="form-control rounded-4"
                    placeholder='Full Name '
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="py-2">
                  <input
                    type="text"
                    className="form-control rounded-4"
                    placeholder='Email or Username'
                    value={usernameOrEmail}
                    onChange={(e) => setUsernameOrEmail(e.target.value)}
                  />
                </div>
                <div className="py-2">
                  <input
                    type="password"
                    className="form-control rounded-4"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {error && <p className="text-danger">{error}</p>}
                <button type="submit" className="btn btn-dark w-100 mt-4">Register</button>
                <div className='mt-3'>
                  <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;