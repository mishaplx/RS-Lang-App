import './Registration.css'
import loginImg from '../../assets/header/login.png'
import closeButton from '../../assets/close-button.png'
import React, { useState } from 'react'

function Registration() {
  const createUser = async user => {
    const rawResponse = await fetch('https://react-rs-language.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    const content = await rawResponse.json();

    console.log(content);
  };
  const handleClickReg = (event) => {
    const login = document.querySelector('.login')
    const registration = document.querySelector('.registration')
    registration.classList.remove('open');
    login.className = 'login open'
  }
  const handleClickClose = () => {
    const registration = document.querySelector('.registration')
    registration.classList.toggle("open")
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
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  })
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
        <input
          type="email"
          className="login-input"
          placeholder="example@gmail.com"
          value={user.email}
          onChange={e => setUser({ ...user, email: e.target.value })} />
        <input
          type="password"
          className="passwordReg"
          placeholder="Password..."
          value={user.password}
          onChange={e => setUser({ ...user, password: e.target.value })} />
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