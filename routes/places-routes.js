
const express= require('express');
const placesControllers= require('../controllers/places-controllers')
const {check}= require('express-validator')
const fileUpload=require('../middleware/file-upload')
const router= express.Router();
const checkAuth= require('../middleware/check-auth')


router.get('/', placesControllers.getPlaces);
router.get('/:pid', placesControllers.getPlaceById);
router.get('/user/:uid', placesControllers.getPlaceUserById);
// router.get('/customer/:uid', placesControllers.getPlaceCustomerCreatorId);
router.get('/name/:nid', placesControllers.getPlaceByName);

//
router.use(checkAuth);
//
router.post('/', fileUpload.single('image'), [check('title').not().isEmpty(), check('description').isLength({min:2}), check('price').not().isEmpty()], placesControllers.createPlace);

// router.post('/customer',fileUpload.single('image'), [ check('description').isLength({min:2}), check('address').not().isEmpty()], placesControllers.createCustomerPlace);

router.patch('/:pid',[check('title').not().isEmpty(), check('description').isLength({min:2})], placesControllers.updatePlace)
router.delete('/:pid', placesControllers.deletePlace)

module.exports = router;






