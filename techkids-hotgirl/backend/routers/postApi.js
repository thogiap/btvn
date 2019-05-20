const express = require("express");
const PostApiRouter = express.Router();

const PostModel = require("../model/postModel");


PostApiRouter.get('/', function(req,res){
    PostModel.find({},function(err, posts){
        if(err) res.json({ success: false, err});
        else res.json({ success: true, data: posts });
    })
})

PostApiRouter.post('/',function(req,res){
    // const { posts } = req.body;
    
    PostModel.create(req.body,
    function(err,postCreated){
        if(err) res.json({ success: false, err});
        else res.json({ success: true, data: postCreated}) 
    });

})

PostApiRouter.put('/:id', function(req,res){
    const id = req.params.id;
    PostModel.findById(id, (err, postFound) =>{
        if(err) res.json({ success: false, err});
        else if(!postFound) res.json({ success: false, err: "not"})
        else{
            for( let key in req.body){
                let value = req.body[key];
                if( value !== null){
                    postFound[key] = value;
                }
            }

            postFound.save((err, postUpdated)=>{
                if(err) res.json({ success: false, err})
                else res.json({ success: true, data: postUpdated});
            });
        }
    });

});

PostApiRouter.delete('/:id', function(req,res){
    const id  = req.params.id;

    PostModel.findByIdAndDelete(id, (err) =>{
        if(err) res.json({ success: false, err});
        else res.json({ success: true})
    });

});




module.exports = PostApiRouter;
