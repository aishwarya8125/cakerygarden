/* get homepage*/
module.exports.welcome = function(req,res){
    res.render('index',{title:'CakeryGarden'});
};

/* get menu page */
module.exports.menu = function(req,res){
    res.render('menu-info',{title:'Menu'});
}; 