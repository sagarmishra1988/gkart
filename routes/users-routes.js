const express= require('express');
const usersController= require('../controllers/users-controllers')
const fileUpload= require('../middleware/file-upload')
const {check} = require('express-validator')
const router= express.Router();

// router.get('/:uid', usersController.getUsers)
router.get('/', usersController.getUsers)

router.get('/:uid', usersController.getUsersById)

router.post('/signup', 
fileUpload.single('image'),
[check('name').not().isEmpty(), check('email').normalizeEmail().isEmail(),
check('password').isLength({ min: 2 })], usersController.createUser)

router.post('/login', usersController.login)

router.patch('/:uid',
[check('email').normalizeEmail().isEmail(),
check('password').isLength({ min: 2 })], usersController.updateUser)

router.delete('/:uid', usersController.deleteuser)

module.exports= router;



