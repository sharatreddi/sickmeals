import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mysql from 'mysql';
// import bcrypt from 'bcryptjs';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'admin',
      database: 'sickmeals'
    });

    connection.connect();

    connection.query(
      `SELECT * FROM profile WHERE username = '${username}'`,
      async function (error, results) {
        if (error) throw error;
        if (results.length > 0) {
          // const isMatch = await bcrypt.compare(password, results[0].password);
          const isMatch = password === results[0].password
          if (isMatch) {
            // If the entered password matches the password in the database, redirect to MyApp
            navigate('/');
          } else {
            alert('Incorrect password');
          }
        } else {
          alert('Username not found');
        }
      }
    );

    connection.end();
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
