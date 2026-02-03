// Demo Signup (Firebase removed) — keeps the original UI structure as much as possible.
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './index.css';
import { toast } from 'react-toastify';
import { setDemoUser } from './demoStore';

export default function Signup({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg('');

    if (!email) {
      setErrorMsg('Please enter an email.');
      return;
    }

    const username = email.includes('@') ? email.split('@')[0] : email;
    const u = setDemoUser({ email, username, uid: email });
    setUser?.(u);

    toast.success('Account created (demo).');
    navigate('/');
  }

  return (
    <div className="login-container">
      <h2 className="login-title">Sign Up</h2>

      {errorMsg && <p className="error-msg">{errorMsg}</p>}

      <form className="login-form" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="(demo) any value"
        />

        <button type="submit" className="login-btn">
          Create Account
        </button>
      </form>

      <p className="login-footer">
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
}
