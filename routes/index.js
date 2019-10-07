var express = require('express');
var router = express.Router();
const UserModel = require('../models/user');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Club' });
});

router.post("/", function (req, res) {
    console.log(req.body);
    const user = new UserModel({
        userName: req.body.user,       
        pwd: req.body.pwd
    });

    
    let name = req.body.user;
    let pwd = req.body.pwd;
    UserModel.find({"userName" : name, "pwd": pwd})

    .then(data => {
        if(data.length===0)
          res.send("User is  not found, please to registration")
          // .then(function(){
          //   console.log("User is  not found, please to registration");
          // })
          .catch(function (err){
              console.log(err);
          });
        else res.send('User is found, welcome to club')
        
    });
});
module.exports = router;
