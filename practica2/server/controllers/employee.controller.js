const Employee = require('../models/employee');

const employeeCtrl = {};
//employeeCtrl.getEmployees = async (req, res, next) => { 
employeeCtrl.getUsers = async (req, res, next) => {
     console.log(req.body);
//employeeCtrl.getEmployees = async (req,res)=>{
    //res.json({
        //status:'Employees goes here'});
    const trabajador = await Employee.find();
    res.json(trabajador);
};

//employeeCtrl.createUsers = async (req, res, next) => {

//employeeCtrl.createEmployee = async (req,res)=>{
    //console.log(req.body);
   //const trabajador =new Employee(req.body);
   //console.log(employee);
    //res.json('received');




   /* const employee = new Employee({
       
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    await employee.save();
    res.json({'status': 'Employee save'});
};
*/
/*employeeCtrl.getUsers = async (req, res, next) => {
//employeeCtrl.getEmployee = async (req,res)=>{
    const { id } = req.params;
    const employee = await Employee.findById(id);
    res.json(employee);
};

employeeCtrl.editEmployee = async (req, res, next) => {
employeeCtrl.editEmployee = async (req,res)=>{
     const { id } = req.params;
     const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
};
     await Employee.findByIdAndUpdate(id, {$set: employee}, {new: true});
     res.json({status: 'Employee Updated'});
};

employeeCtrl.deleteEmployee = async (req, res, next) => {
//employeeCtrl.deleteEmployee = async (req,res)=>{
     await Employee.findByIdAndRemove(req.params.id);
     res.json({status: 'Employee Deleted'});
};

module.exports = employeeCtrl;*/