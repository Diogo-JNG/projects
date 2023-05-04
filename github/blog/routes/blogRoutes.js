const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');
const blogController = require('../controllers/blogController');
const {requireAuth,requireAdmin} = require('../middleware/authMiddleware');

// router 
router.get('/', blogController.blog_index);

router.get('/blogs/:id',requireAuth ,blogController.blog_details)

 
router.post('/',blogController.blog_create_post);

 
router.get('/create-new-blog',requireAuth, blogController.blog_create_get);

 
router.delete('/blogs/:id',blogController.blog_delete);



module.exports = router;