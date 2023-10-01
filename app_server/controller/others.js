/* get about page 
module.exports.about = function(req,res){
    res.render('about-info',{title:'About us'});
}; */

/* GET 'about' page */
module.exports.about = function(req, res) {
    res.render('about-info', {
      title: 'CakeryGarden - About',
      pageHeader: {
        title: 'About Us',
        strapline: 'Delicious cakes made with love'
      },
      content: 'CakeryGarden is your destination for delightful cakes. Our cakes are made with the finest ingredients and lots of love. Explore our menu and taste the difference!',
    });
  };