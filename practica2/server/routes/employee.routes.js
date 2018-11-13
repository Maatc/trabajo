const express = require('express');
const router = express.Router();
const app = express();
const employee = require('../controllers/employee.controller');



/*router.get('/', employee.getEmployees);
router.post('/', employee.createEmployee);
router.get('/:id', employee.getEmployee);
router.put('/:id', employee.editEmployee);
router.delete('/:id', employee.deleteEmployee);*/



//module.exports = router;
const User = require('../models/employee');

module.exports = function (app){

    
app.get('/', function(req,res){
    res.send('Hello World');
})

    app.get('/employee', (req, res) =>{
        User.getUsers((err,data) =>{
            res.status(200).json(data);
    
        });
    });
    
    app.post('/employee',(req,res) =>{
        const userData = {
            id: null,
            name: req.body.name,
            position: req.body.position,
            office: req.body.office,
            salary: req.body.salary,
            created_at: null,
            update_at: null
        };
    
        User.insertUser(userData, (err,data) =>{
            if (data && data.insertId){
                res.json()
    
            }
        })
    
        });
    
    }