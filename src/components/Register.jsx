import React, { useState } from 'react';
import Login from './Login';

function Register({ setLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    fetch('http://127.0.0.1:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, email }),
    })
    .then(function(response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to register');
      }
    })
    .then(function(userData) {
      localStorage.setItem('user', JSON.stringify(userData));
      setLoggedIn(true);
    })
    .catch(function(error) {
      setError('Error registering');
    });
  }

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  return (
    <>
      <div>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              autoComplete="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              autoComplete="new-password" 
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <button type="submit">Register</button>
        </form>
        {error && <p>{error}</p>}
      </div>
      <Login/>
    </>
  );
}

export default Register;
