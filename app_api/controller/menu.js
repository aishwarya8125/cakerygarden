var mongoose = require('mongoose');
var Loc = mongoose.model('cake');
var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
    };
module.exports.MenuCreate = function (req, res) {
    console.log(req.body);
    const{name,description,ingredients,price,rating}=req.body;

    const newMenu={
        name,
        description,
        ingredients:[],
        price,
        rating
    };
    Loc.create(newMenu)
    .then((menu)=>{
      console.error(err);
      return res.status(400).json({error:'could not create menu'});
    });
};
module.exports.MenuList = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
    };
module.exports.MenuReadOne = async function (req, res) {
        try {
        const location = await
        Loc.findById(req.params.menuid).exec();
        sendJsonResponse(res, 200, location);
        console.log(location)
        } catch (err) {
        // Handle the error
        sendJsonResponse(res, 500, { error: 'An error occurred' });
        }
        };
module.exports.MenuUpdateOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
    };
module.exports.MenuDeleteOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
    };
    