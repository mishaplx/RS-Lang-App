import './Registration.css'
import loginImg from '../../assets/header/login.png'
import closeButton from '../../assets/close-button.png'
import React, { useState } from 'react'

function Registration() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  })
  const createUser = async user => {
    const rawResponse = await fetch('https://react-rs-language.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    const loginInput = document.querySelector('.login-input')
    const nameUncorrect = document.querySelector('.uncorrect-name')
    const nameInput = document.querySelector('.name__user')
    const passwordInput = document.querySelector('.passwordReg')
    const userReg = document.querySelector('.user-register')
    const passUncorrect = document.querySelector('.uncorrect-pass')
    if (rawResponse.ok) {
      const content = await rawResponse.json();
      console.log(content);
      loginInput.classList.remove('uncorrect-inputReg')
      passwordInput.classList.remove('uncorrect-inputReg')
      nameInput.classList.remove('uncorrect-inputReg')
      nameUncorrect.style.display = 'none'
      userReg.style.display = 'none'
      passUncorrect.style.display = 'none'
    } else {
      if (rawResponse.status === 417) {
        userReg.style.display = 'block'
        loginInput.classList.add('uncorrect-inputReg')
        passwordInput.classList.remove('uncorrect-inputReg')
        nameInput.classList.remove('uncorrect-inputReg')
        nameUncorrect.style.display = 'none'
        passUncorrect.style.display = 'none'
      }
      if (rawResponse.status === 422) {
        console.log(user.password)
        if (user.password.length >= 8) {
          nameInput.classList.add('uncorrect-inputReg')
          nameUncorrect.style.display = 'block'
        } else {
          passwordInput.classList.add('uncorrect-inputReg')
          nameInput.classList.remove('uncorrect-inputReg')
          loginInput.classList.remove('uncorrect-inputReg')
          nameUncorrect.style.display = 'none'
          userReg.style.display = 'none'
          passUncorrect.style.display = 'block'
        }
      }
      console.log(`Ошибка: ${rawResponse.status}`)
    }

  };
  const handleClickReg = (event) => {
    const login = document.querySelector('.login')
    const registration = document.querySelector('.registration')
    registration.classList.remove('open');
    login.className = 'login open'
  }
  const handleClickClose = () => {
    const frameLog = document.querySelector('.login-frame')
    const registration = document.querySelector('.registration')
    registration.classList.toggle("open")
    setTimeout(() => {
      frameLog.style.display = 'none'
    }, 550)
  }
  const handleShowPassReg = () => {
    const checbox = document.querySelector('.show__pass-inputReg')
    const password = document.querySelector('.passwordReg')
    if (checbox.checked) {
      password.type = 'text'
    }
    else {
      password.type = 'password'
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    createUser({ "name": user.name, "email": user.email, "password": user.password })
    setUser({
      name: '',
      email: '',
      password: ''
    })
  }
  return (
    <div className="registration">
      <img src={closeButton} alt="close" className="close__button" onClick={handleClickClose} />
      <div className="title">
        <img src={loginImg} alt="login" width="50px" />
        <h3>Registration</h3>
      </div>
      <form onSubmit={handleSubmit} method="post" className="registration__form">
        <input
          type="text"
          className="name__user"
          placeholder="Name..."
          value={user.name}
          onChange={e => setUser({ ...user, name: e.target.value })} />
        <p className='uncorrect-name'>Введите имя</p>
        <input
          type="email"
          className="login-input"
          placeholder="example@gmail.com"
          value={user.email}
          onChange={e => setUser({ ...user, email: e.target.value })} />
        <p className='user-register'>Пользователь с таким email уже зарегистрирован</p>
        <input
          type="password"
          className="passwordReg"
          placeholder="Password..."
          value={user.password}
          onChange={e => setUser({ ...user, password: e.target.value })} />
        <p className='uncorrect-pass'>Пароль должен содержать не менее 8 символов</p>
        <div className="show__pass">
          <input type="checkbox" className="show__pass-inputReg" onClick={handleShowPassReg} />
          <span>Show password</span>
        </div>
        <input type="submit" className="submit" value="Sing Up" />
        <p onClick={handleClickReg}>Do you have an account? Sing Ip</p>
      </form>
    </div>
  )
}

export default Registration