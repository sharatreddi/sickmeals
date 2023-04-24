import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mysql from 'mysql';
import bcrypt from 'bcryptjs';

function Signup() {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const navigate = useNavigate();

  const emailRegex = /^\S+@\S+\.\S+$/;

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'admin',
      database: 'sickmeals'
    });

    connection.connect();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    connection.query(
      `INSERT INTO profile (username, age, phone, email, password) VALUES ('${username}','${age}','${phone}', '${mail}', '${hashedPassword}')`,
      function (error, results) {
        if (error) throw error;
        alert('User created successfully');
        navigate('/login');
      }
    );

    connection.end();
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setIsValidEmail(emailRegex.test(email));
    setMail(email);
  };

  return (
    <div>
    <form onSubmit= { handleSignup}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>

      <label>
        Age:
        <input type="number" min="3" max="80" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>

      <label>
        Phone number:
        <input type="tel" pattern="[0-9]{10}" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </label>

      <br />

      <label>
        Mail:
        <input type="email" value={mail} onChange={handleEmailChange} />
        {!isValidEmail && <span style={{ color: 'red' }}>Invalid email format</span>}
      </label>

      <br />

      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>

      <br />

      <label>
        Confirm Password:
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </label>

      <br />

      <button type="submit">Signup</button>
    </form>
    </div>
  );
}

export default Signup;
