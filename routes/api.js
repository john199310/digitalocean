const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');
const auth = require('./auth')


router.get('/todos',auth,(req, res, next) => {
    //get placeholder
    // res.send('dddddddddddddd');
    // Detail.find({},'time')
    // .then((data) => res.json(data))
    // .catch(next);
    
    Todo.find({}, ['action', 'createdAt', 'data',])
    .then((data) => res.json(data))
    .catch(next);
    // Todo.find({})
    //     .then(todos => {
    //         const modifiedTodos = todos.map(todo => {
    //         return {
    //             action: todo.action,
    //             createdAt: new Date(todo.createdAt).toLocaleTimeString()
    //         }
    //         });
    //         res.json(modifiedTodos);
    //     })
    //     .catch(next);
});


router.post('/todos',auth, (req, res, next) => {
    // post placeholder
    if(req.body.action) {
        // const time = new Date();
        // Detail.create(time)
        // .then((data) => res.json(data))
        // .catch(next);
        Todo.create(req.body)
        .then((data) => res.json(data))
        .catch(next);
    } 
    // else if(req.body.data) {
    //     Todo.
        
    // }
    
    else {
        res.json({
            error: 'The input field is empty',
        });
    }
});

router.delete('/todos/:id' , (req, res, next) => {
    //delete place holder
    console.log(req.params.id);
    Todo.findOneAndDelete({_id: req.params.id})
    .then((data) => res.json(data))
    .catch(next);
});

router.post('/updateTodo/:id', (req, res, next) => {
    console.log('here');
    const _id = req.params.id;
    const update = req.body;
    console.log('_id, update', _id, update);

    Todo.updateOne({ _id: _id }, update)
    .then((result) => {
        console.log('erereerer')
        console.log(result); // { n: 1, nModified: 1, ok: 1 }
        return res.json(result);
    })
    .catch(next);

})

module.exports = router;