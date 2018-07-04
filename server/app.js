const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.json());

const todoData = [
    {
        todoItemId: 0,
        name: 'an item',
        priority: 3,
        completed: false
    },
    {
        todoItemId: 1,
        name: 'another item',
        priority: 2,
        completed: false
    },
    {
        todoItemId: 2,
        name: 'a done item',
        priority: 1,
        completed: true
    }
];

//status message from server
app.get('/', (req, res) => {
    res.status(200).send({ status: 'ok' });
});

//read all todo items
app.get('/api/TodoItems', (req, res) => {
    res.status(200).send(todoData);
});

//read single todo item
app.get('/api/TodoItems/:number', (req, res) => {
    const singleItem = todoData.find(todo => todo.todoItemId == req.params.number);
    res.status(200).send(singleItem);
});

//create single todo item
app.post('/api/TodoItems/', (req, res) => {
    const postItem = todoData.slice(todo => todo.todoItemId == req.params.number);
    res.status(201).send(postItem[0]);
});

//delete single todo item
app.delete('/api/TodoItems/:number', (req, res) => {
    const singleItem = todoData.find(todo => todo.todoItemId == req.params.number);
    res.status(200).send(singleItem);
});

module.exports = app;