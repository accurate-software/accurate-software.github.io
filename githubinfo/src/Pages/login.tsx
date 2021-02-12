import React, { FormEvent, useState } from 'react';

import { useAuth } from '../hooks/auth';

const Login: React.FC = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (e: FormEvent) => {
    e.preventDefault();

    signIn(email, password);
  };
  return (
    <form
      onSubmit={(e) => login(e)}
      style={{
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '300px',
        height: '100vh',
      }}
    >
      <h3 style={{ textAlign: 'center' }}>Sign In</h3>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="Email"
        name="email"
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="Password"
        name="password"
      />
      <button>Sign In</button>
    </form>
  );
};

export default Login;
