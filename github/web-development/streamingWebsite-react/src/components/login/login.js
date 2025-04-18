import { Link } from 'react-router-dom';
import { StyledLoginMain } from './styled-login-main';
import './login.css';

function Login() {

    return (
    <StyledLoginMain id="main" className="main__solo darkMode">
        <div className="login__container">
            <h2 className="login__title">Login</h2>
            <div className="login__form">
                <p>Email</p>
                <input type="email" placeholder="Type your email"/>
            </div>
            <div className="login__form">
                <p>Password</p>
                <input type="password" placeholder="Type your password"/>
                <p className="login__forgotPass clickable">Forgot your password?</p>
            </div>
            <button className="login__button clickable">LOGIN</button>
            <p>Or Sign In with</p>
            <div className="login__social clickable">
                <i className="icofont-facebook social__icon"></i>
                <i className="icofont-twitter social__icon"></i>
                <i className="icofont-google-plus social__icon"></i>
            </div>
            <Link to="/register"><p className="login__toRegister clickable">Don't have an account?</p></Link>
        </div>
    </StyledLoginMain>
    )
}

export default Login;