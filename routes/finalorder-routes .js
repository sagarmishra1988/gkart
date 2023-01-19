
// using images 

const express= require('express');
const finalorderControllers= require('../controllers/finalorder-controllers')
const {check}= require('express-validator')
const fileUpload=require('../middleware/file-upload')
const router= express.Router();


router.get('/', finalorderControllers.getOrder);
router.get('/:oid', finalorderControllers.getOrderById);
router.get('/customer/:cid', finalorderControllers.getOrderByCustomerId);
router.get('/productcreator/:uid', finalorderControllers.getOrderByProductcreatorId);
// router.get('/title/:oid', finalorderControllers.getPlaceByTitle);

router.post('/',
// fileUpload.single('image'), 
// [check('title').not().isEmpty(), check('description').isLength({min:2})], 
finalorderControllers.createOrder);

// router.post('/customer',fileUpload.single('image'), [ check('description').isLength({min:2}), check('address').not().isEmpty()], finalorderControllers.createCustomerPlace);

router.patch('/:oid',[check('quantity').not().isEmpty()], finalorderControllers.updateOrder)
router.delete('/:oid', finalorderControllers.deleteOrder)

module.exports = router;






