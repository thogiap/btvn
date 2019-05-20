const express = require("express");
const UserApiRouter = express.Router();

const UserModel = require('../model/userModel');


UserApiRouter.get('/',function(req,res){
    UserModel.find({}, (err,users) =>{
        if(err) res.json({ success: false, err});
        else res.json({ success: true, data: users });
    })
})

UserApiRouter.post('/',function(req,res){
    const { users } = req.body;
    
    UserModel.create(req.body,
    function(err,userCreated){
        if(err) res.json({ success: false, err});
        else res.json({ success: true, data: userCreated}) 
    });

})

UserApiRouter.put('/:id', function(req,res){
    const id = req.params.id;
    UserModel.findById(id, (err, userFound) =>{
        if(err) res.json({ success: false, err});
        else if(!userFound) res.json({ success: false, err: "not"})
        else{
            for( let key in req.body){
                let value = req.body[key];
                if( value !== null){
                    userFound[key] = value;
                }
            }

            userFound.save((err, userUpdated)=>{
                if(err) res.json({ success: false, err})
                else res.json({ success: true, data: userUpdated});
            });
        }
    });

});

UserApiRouter.delete('/:id', function(req,res){
    const id = req.params.id;

    UserModel.findByIdAndDelete(id, (err) =>{
        if(err) res.json({ success: false, err});
        else res.json({ success: true})
    });

});

module.exports = UserApiRouter;
