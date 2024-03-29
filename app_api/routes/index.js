var express = require('express');
var router = express.Router();
var ctrlMenu=require('../controller/menu');
//var ctrlReviews=require('../controller/reviews');
router.get('/menu', ctrlMenu.MenuList);
router.post('/menu', ctrlMenu.MenuCreate);
router.get('/menu/:menuid', ctrlMenu.MenuReadOne);
router.put('/menu/:menuid', ctrlMenu.MenuUpdateOne);
router.delete('/menu/:menuid', ctrlMenu.MenuDeleteOne);
module.exports = router;