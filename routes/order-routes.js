
// using images 

const express= require('express');
const orderControllers= require('../controllers/order-controllers')
const {check}= require('express-validator')
const fileUpload=require('../middleware/file-upload')
const router= express.Router();


router.get('/', orderControllers.getOrder);
router.get('/:oid', orderControllers.getOrderById);
router.get('/customer/:cid', orderControllers.getOrderByCustomerId);
router.get('/productcreator/:uid', orderControllers.getOrderByProductcreatorId);
router.get('/', orderControllers.createfinalOrder);

router.post('/',
// fileUpload.single('image'), 
[check('title').not().isEmpty(), check('description').isLength({min:2})], 
orderControllers.createOrder);

// router.post('/customer',fileUpload.single('image'), [ check('description').isLength({min:2}), check('address').not().isEmpty()], orderControllers.createCustomerPlace);

router.patch('/:oid',[check('amount').not().isEmpty()], orderControllers.updateOrder)
router.delete('/:oid', orderControllers.deleteOrder)

module.exports = router;






