import { Link } from 'react-router-dom';
import { StyledLoginMain } from '../login/styled-login-main';
import './register.css';

function Register() {

    return (
        <StyledLoginMain id="main" className="main__solo">
            <div className="login__container">
                <h2 className="login__title">Register</h2>
                <div className="login__form">
                    <p>Email</p>
                    <input type="email" placeholder="Type your email"/>
                </div>
                <div className="login__form">
                    <p>Password</p>
                    <input type="password" placeholder="Type your password"/>
                </div>
                <div className="login__form">
                    <p>Confirm password</p>
                    <input type="password" placeholder="Type your password again"/>
                </div>
                <button className="login__button clickable">REGISTER</button>
                <p>Or Sign Up with</p>
                <div className="login__social clickable">
                    <i className="icofont-facebook social__icon"></i>
                    <i className="icofont-twitter social__icon"></i>
                    <i className="icofont-google-plus social__icon"></i>
                </div>
                <Link to="/login"><p className="login__toRegister clickable">Already have an account?</p></Link>
            </div>
        </StyledLoginMain>
    )
}

export default Register;