const express = require('express');
const router = express.Router();
const userController = require('./../controllers/userAuthController');
const authenticate = require('../middleware/authMiddleware');

 
router.post('/login', userController.loginUser);

router.get('/userdetails', authenticate , userController.getUserDetails);
router.get('/getusers', userController.getUsers);
router.post('/createuser', userController.createUser);

router.put('/updateuser/:userId', userController.updateUser); 

router.delete('/deleteuser/:userId', userController.deleteUser);
router.post('/forgot-password', userController.forgotPassword);
router.post('/reset-password', userController.ResetPassword);

router.put('/updateuserdetails', authenticate, userController.updateUserDetails);
router.put('/changePassword',authenticate,userController.changePassword);

module.exports = router;
