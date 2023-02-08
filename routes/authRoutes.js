const { Router } = require('express');
const authController = require('../controllers/authController')
const {requireAuth} = require('../middleware/authMiddleware') 

const router = Router();

router.get('/', authController.home_get);
router.get('/om-siden', authController.om_get);
router.get('/admin', authController.adminMain_get);
router.get('/admin/form', authController.adminForm_get);
router.get('/login', authController.login_get);
router.get('/create', authController.create_get);
router.get('/logout', authController.logout_get);
router.get('/reset', authController.reset_get);

// router.post('/hashing', authController.hashing_post);
// router.post('/login', authController.login_post);

module.exports = router;