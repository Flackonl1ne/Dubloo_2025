// Demo Login (Firebase removed) — keeps the original UI structure as much as possible.
import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import './index.css';
import { toast } from 'react-toastify';
import { setDemoUser } from './demoStore';

export default function Login({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const from = searchParams.get('from') || '/';

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg('');

    if (!email) {
      setErrorMsg('Please enter an email.');
      setIsLoading(false);
      return;
    }

    // Demo: accept any password (kept field to match the original UI).
    const username = email.includes('@') ? email.split('@')[0] : email;
    const u = setDemoUser({
      email,
      username,
      uid: email, // demo uid
    });

    setUser?.(u);
    toast.success('Logged in (demo).');
    navigate(from);
  }

  return (
    <div className="login-container">
      <h2 className="login-title">Log In</h2>

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

        <button type="submit" disabled={isLoading} className="login-btn">
          {isLoading ? 'Logging in...' : 'Log In'}
        </button>
      </form>

      <p className="login-footer">
        Don’t have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}
