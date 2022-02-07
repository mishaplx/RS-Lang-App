import './Registration.css'
import loginImg from '../../assets/header/login.png'
function Registration() {
  return (
    <div className="registration">
      <div className="title">
        <img src={loginImg} alt="login" width="50px"/>
        <h3>Login</h3>
      </div>
     <form method="post">
       <input type="login" className="login" placeholder = "Login..."/>
       <input type="password" className="password" placeholder = "Password..."/>
       <div className="show__pass">
       <input type="checkbox" className="show__pass-input"/>
       <span>Show password</span>
       </div>
       

       <input type="submit" className="submit" value="sing In"/>
       <a href="#">Don't have an account? Sing Up</a>
     </form>
    </div>
  )
}

export default Registration