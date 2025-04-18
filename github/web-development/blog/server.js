const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const authRoutes = require('./routes/authRoutes');
const app = express();
const cookieParser = require('cookie-parser');
const {checkUser} = require('./middleware/authMiddleware');

//connect to mongoDB
const dbURI = 'mongodb+srv://diogojng99:projetofinal99@node.jliebzv.mongodb.net/node?retryWrites=true&w=majority';
mongoose.connect(dbURI)
    .then((result) =>
    app.listen(3000))
    .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

//routes
app.get('*',checkUser);
app.use(authRoutes);
app.use(blogRoutes);

// 404 - tem de ficar em ultimo

app.use((req,res) =>{
    res.status(404).render('404');
  });

/* Redirect
app.get('/path',(req,res) =>{
    
    res.redirect('/');
})
*/
