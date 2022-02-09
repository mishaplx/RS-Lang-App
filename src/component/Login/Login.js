import './Login.css'
import loginImg from '../../assets/header/login.png'
import closeButton from '../../assets/close-button.png'
import { useState } from 'react';
function Login() {
  const loginUser = async user => {
    const rawResponse = await fetch('https://react-rs-language.herokuapp.com/signin', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    });
    const loginInput = document.querySelector('.login-input')
    const passwordInput = document.querySelector('.password')
    const uncorrectLogin = document.querySelector('.uncorrect-login')
    const uncorrectPassword = document.querySelector('.uncorrect-password')

    if (rawResponse.ok) {
      const content = await rawResponse.json();
      localStorage.setItem(userLog.email, content.token)
      localStorage.setItem(`UserName`, content.name)
      window.location.reload()
      uncorrectLogin.style.display = 'none'
      uncorrectPassword.style.display = 'none'
      if (loginInput.classList.contains('.uncorrect') === true) {
        loginInput.classList.remove('uncorrect')
      }
      if (passwordInput.classList.contains('.uncorrect') === true) {
        passwordInput.classList.remove('uncorrect')
      }
    } else {
      if (rawResponse.status === 403) {
        passwordInput.classList.add('uncorrect-input')
        uncorrectPassword.style.display = 'block'
        uncorrectLogin.style.display = 'none'
        loginInput.classList.remove('uncorrect-input')
      }
      if (rawResponse.status === 404) {
        loginInput.classList.add('uncorrect-input')
        passwordInput.classList.remove('uncorrect-input')
        uncorrectLogin.style.display = 'block'
        uncorrectPassword.style.display = 'none'
      }
      console.log(`Ошибка: ${rawResponse.status}`)
    }
  };

  const handleClick = (event) => {
    const frameLogin = document.querySelector('.login-frame')
    const login = document.querySelector('.login')
    const registration = document.querySelector('.registration')
    login.classList.toggle('open');
    registration.classList.toggle('open');
    setTimeout(() => {
      frameLogin.style.display = 'block'
    }, 550)
  }
  const handleClickClose = () => {
    const frameLogin = document.querySelector('.login-frame')
    const login = document.querySelector('.login')
    login.classList.toggle("open")
    setTimeout(() => {
      frameLogin.style.display = 'none'
    }, 550)
  }
  const handleShowPass = () => {
    const checbox = document.querySelector('.show__pass-input')
    const password = document.querySelector('.password')
    if (checbox.checked) {
      password.type = 'text'
    }
    else {
      password.type = 'password'
    }
  }
  const [userLog, setUserLog] = useState({
    email: '',
    password: ''
  })
  function handleSubmit(e) {
    e.preventDefault();
    loginUser({ "email": userLog.email, "password": userLog.password })
    setUserLog({
      email: '',
      password: ''
    })
  }
  return (
    <div className="login-frame">
      <div className='login'>
        <img src={closeButton} alt="close" className="close__button" onClick={handleClickClose} />
        <div className="title">
          <img src={loginImg} alt="login" width="50px" />
          <h3>Login</h3>
        </div>
        <form onSubmit={handleSubmit} method="post">
          <input
            type="login"
            className="login-input"
            placeholder="Login..."
            value={userLog.email}
            onChange={e => setUserLog({ ...userLog, email: e.target.value })} />
          <p className='uncorrect-login'>Пользователя с таким email не существует</p>
          <input
            type="password"
            className="password"
            placeholder="Password..."
            value={userLog.password}
            onChange={e => setUserLog({ ...userLog, password: e.target.value })} />
          <p className='uncorrect-password'>Неверный пароль</p>
          <div className="show__pass">
            <input type="checkbox" className="show__pass-input" onClick={handleShowPass} />
            <span>Show password</span>
          </div>

          <input type="submit" className="submit" value="Sing In" />
          <p onClick={handleClick}>Don't have an account? Sing Up</p>
        </form>
      </div>
    </div>
  )
}

export default Login