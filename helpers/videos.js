var db = require("../models");

exports.getVideos=function(req,res){
    db.Video.find()
        .then(function(foundtodos){
            res.json(foundtodos);
            console.log(category);
        })
        .catch(function(error){
            res.send(error);
        })
}

exports.addVideo=function(req,res){
    db.Video.create(req.body)
    .then(function(newTodo){
        res.status(201).json(newTodo);
    })
    .catch(function(err){
        res.send(err)
    })
}

exports.getByCategory=function(req,res){
    var query={category: req.params.category};
    db.Video.find(query)
        .then(function(foundtodos){
            res.json(foundtodos);
            console.log(category);
        })
        .catch(function(error){
            res.send(error);
        })

}
// exports.get=function(req,res){
//     db.Todo.findById(req.params.todoId)
//         .then(function(foundTodo){
//             res.json(foundTodo);
//         })
//         .catch(function(err){
//             res.send(err);
//         })
// }

// exports.updateTodos = function(req,res){
//     db.Todo.findOneAndUpdate({_id: req.params.todoId},req.body)
//     .then(function(foundtodo){
//         res.json(foundtodo);
//     })
//     .catch(function(err){
//         res.send(err);
//     })
// }
 
// exports.deleteTodos = function(req,res){
//     db.Todo.remove({_id: req.params.todoId})
//     .then(function(){
//         res.json("deleted");
//     })
    
// }
module.exports = exports;