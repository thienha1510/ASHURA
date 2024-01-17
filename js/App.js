import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const adminEmail = 'admin@example.com';
    const adminPassword = 'adminpassword';

    if (email === adminEmail && password === adminPassword) {
      showNotification('Chúc mừng bạn đã đăng nhập thành công', true);

      setTimeout(() => {
        // Redirect to admin page or navigate to the desired route
        // For simplicity, let's just display a message for now
        showNotification('Đang chuyển hướng đến trang Admin...', true);
      }, 2000);
    } else {
      showNotification('VUI LÒNG KIỂM TRA LẠI', false);
    }
  };

  const showNotification = (message, isSuccess) => {
    Swal.fire({
      title: message,
      icon: isSuccess ? 'success' : 'error',
      timer: 3000,
      showConfirmButton: false,
    });
  };

  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />
      <div className="signup">
        <form>
          <label htmlFor="chk" aria-hidden="true">
            Đăng ký
          </label>
          <input
            type="text"
            name="txt"
            placeholder="Tên đăng nhập"
            required
          />
          <input type="email" name="email" placeholder="Email" required />
          <input
            type="password"
            name="pswd"
            placeholder="Mật khẩu"
            required
          />
          <input
            type="password"
            name="pswd"
            placeholder="Nhập lại mật khẩu"
            required
          />
          <button>Đăng ký</button>
          <button>
            <a href="./index.html" className="logo" style={{ color: '#fff' }}>
              Quay về trang chủ
            </a>
          </button>
        </form>
      </div>

      <div className="login">
        <form onSubmit={handleLogin}>
          <label htmlFor="chk" aria-hidden="true">
            Đăng nhập
          </label>
          <input
            type="email"
            name="email"
            id="loginEmail"
            placeholder="Nhập email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="pswd"
            id="loginPassword"
            placeholder="Nhập mật khẩu"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Đăng nhập</button>
          <button>
            <a href="./index.html" className="logo" style={{ color: '#fff' }}>
              Quay về trang chủ
            </a>
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
