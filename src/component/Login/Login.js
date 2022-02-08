import './Login.css'
import loginImg from '../../assets/header/login.png'
import closeButton from '../../assets/close-button.png'
function Login() {
  const handleClick = (event) => {
      const login = document.querySelector('.login')
      const registration = document.querySelector('.registration')
      login.classList.toggle('open');
      registration.classList.toggle('open');
  }
  const handleClickClose = () => {
    const login = document.querySelector('.login')
    login.classList.toggle("open")
  }
  const handleShowPass = ()=>{
    const checbox = document.querySelector('.show__pass-input')
    const password = document.querySelector('.password')
    if(checbox.checked){
      password.type = 'text'
    }
    else{
      password.type = 'password'
    }
  }
  return (
    <div className="login" >
      <img src={closeButton} alt="close" className="close__button" onClick={handleClickClose}/>
      <div className="title">
        <img src={loginImg} alt="login" width="50px" />
        <h3>Login</h3>
      </div>
     <form method="post">
       <input type="login" className="login-input" placeholder = "Login..."/>
       <input type="password" className="password" placeholder = "Password..."/>
       <div className="show__pass">
       <input type="checkbox" className="show__pass-input" onClick ={handleShowPass}/>
       <span>Show password</span>
       </div>
       

       <input type="submit" className="submit" value="Sing In"/>
       <p onClick = {handleClick}>Don't have an account? Sing Up</p>
     </form>
    </div>
  )
}

export default Login