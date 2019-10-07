var express = require('express');
var router = express.Router();
const UserModel = require('../models/user');

/* GET users listing. */
router.get('/registration', function(req, res, next) {
  
});

router.post("/registration", function (req, res) {
    console.log(req.body);
    const user = new UserModel({
        userName: req.body.user,
        email: req.body.email,
        pwd: req.body.pwd
    });

    if(!req.body) res.sendStatus(400);
    let name = req.body.user;
    let email = req.body.email;
    let pwd = req.body.pwd;
    UserModel.find({"userName" : name, "email" : email, "pwd": pwd})

    .then(data => {
        if(data.length===0)
            user.save()
            .then(function(doc){
                console.log("Сохранен объект", doc);
            })
            .catch(function (err){
                console.log(err);
            });
        
        else res.send('User is found, please login')
    });
});



module.exports = router;