const express= require('express');
const customerController= require('../controllers/customer-controller')
const {check}= require('express-validator');

const router = express.Router();

router.get('/:cid', customerController.getCustomerById)
router.get('/', customerController.getCustomers)

router.post('/signup',
[check('name').not().isEmpty(), 
check('email').normalizeEmail().isEmail(), 
check('password').isLength({min:2})], 
customerController.signupCustomer)

router.post('/login',
[check('email').normalizeEmail().isEmail(), 
check('password').isLength({min:2})], 
customerController.loginCustomer)

router.patch('/:cid',
[check('name').not().isEmpty(), 
check('email').normalizeEmail().isEmail(), 
check('password').isLength({min:2})], customerController.updateCustomer)

router.delete('/:cid', customerController.deleteCustomer
)

module.exports= router;