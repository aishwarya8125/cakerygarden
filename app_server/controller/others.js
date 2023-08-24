/* get about page */
module.exports.about = function(req,res){
    res.render('about-info',{title:'About us'});
};