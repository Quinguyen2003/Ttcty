import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import './login.css'; 

const LoginPage = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email: values.email,
        password: values.password,
      });

      // Lưu token vào localStorage
      localStorage.setItem('token', response.data.token);
      
      // Điều hướng đến trang admin
      navigate('/adminpage');
    } catch (err) {
      // Hiển thị lỗi thông qua SweetAlert2
      Swal.fire({
        position: 'top-right',
        title: 'Error',
        text: err.response ? err.response.data : 'An error occurred',
        toast: true,
        icon: 'error',
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Enter Email"
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={values.password}
          onChange={(e) => setValues({ ...values, password: e.target.value })}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
