var express = require('express');
var router = express.Router();
var ctrlMenu=require('../controller/menu');
var ctrlOthers=require('../controller/others');


/*Locations pages*/
router.get('/',ctrlMenu.welcome);
router.get('/menu',ctrlMenu.menu);
/*router.get('/menu/contactus',ctrlMenu.contactus);
router.get('/menu/review',ctrlMenu.addReview);*/

/* Other Pages*/
router.get('/about',ctrlOthers.about); 

module.exports = router;
