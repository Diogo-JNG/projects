const User = require('../models/user');
const jwt = require('jsonwebtoken');

// handle errors
// handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: '' };
  
    // incorrect email
    if (err.message === 'incorrect email') {
      errors.email = 'That email is not registered';
    }
  
    // incorrect password
    if (err.message === 'incorrect password') {
      errors.password = 'That password is incorrect';
    }
  
    // duplicate email error
    if (err.code === 11000) {
      errors.email = 'that email is already registered';
      return errors;
    }
  
    // validation errors
    if (err.message.includes('user validation failed')) {
      // console.log(err);
      Object.values(err.errors).forEach(({ properties }) => {
        // console.log(val);
        // console.log(properties);
        errors[properties.path] = properties.message;
      });
    }
  
    return errors;
  }

const maxAge = 3*24*60*60;

const createToken = (id) =>{
    return jwt.sign({id}, 'sign secret', {expiresIn: maxAge});
}

const auth_login_get = (req,res) =>{
    res.render('login');
}
const auth_login_post = async (req,res) =>{
    const {email,password} = req.body;
    
    try {
        const user = await User.login(email,password);
        const token = createToken(user._id);
        res.cookie('jwt',token,{httpOnly:true,maxAge: maxAge * 1000});
        res.status(200).json({ user: user._id });
    } catch (err) {
        res.status(400).json({});
    }
}
const auth_register_get = (req,res) =>{
    res.render('register');
}
const auth_register_post = async (req,res) =>{
    const { name, email, password} = req.body;

    try{
        const user = await User.create({name,email,password});
        const token = createToken(user._id);
        res.cookie('jwt',token,{httpOnly:true,maxAge: maxAge * 1000});
        res.status(201).json({user: user._id});
    }
    catch(err){
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}

const auth_logout_get = (req,res) =>{
    res.cookie('jwt', '', {maxAge:1});
    res.redirect('/');
}
module.exports = {
    auth_login_get,
    auth_login_post,
    auth_register_get,
    auth_register_post,
    auth_logout_get,

}