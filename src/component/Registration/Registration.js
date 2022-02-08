import './Registration.css'
import loginImg from '../../assets/header/login.png'
import closeButton from '../../assets/close-button.png'
function Registration() {
  const handleClickreg = (event) => {
    const login = document.querySelector('.login')
    const registration = document.querySelector('.registration')
    registration.classList.remove('open');
    login.className = 'login open'
}
const handleClickClose = () => {
  const registration = document.querySelector('.registration')
  registration.classList.toggle("open")
}
  return (
    <div className="registration">
      <img src={closeButton} alt="close" className="close__button" onClick={handleClickClose}/>
      <div className="title">
        <img src={loginImg} alt="login" width="50px"/>
        <h3>Registration</h3>
      </div>
     <form method="post" className="registration__form">
       <input type="text" className="name__user" placeholder = "Name..."/>
       <input type="email" className="login-input" placeholder = "example@gmail.com"/>
       <input type="password" className="password" placeholder = "Password..."/>
       <div className="show__pass">
       <input type="checkbox" className="show__pass-input"/>
       <span>Show password</span>
       </div>
       <input type="submit" className="submit" value="Sing Up"/>
       <p onClick = {handleClickreg}>Do you have an account? Sing Ip</p>
     </form>
    </div>
  )
}

export default Registration