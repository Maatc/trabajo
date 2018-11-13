
//const mongoose = require('mongoose');
//const { Schema } = mongoose;
//const employeeSchema = new Schema({
/*const empleadosSchema = new Schema({

    name: { type: String, required: true},
    position: { type: String, required: true },
    office: { type: String, required: true },
    salary: { type: Number, required: true}
});*/

//module.exports = mysql.model('Employee', empleadosSchema);
//module.exports = mongoose.model('Employee', employeeSchema);


const mysql = require(('mysql'));
//const {Schema}  = mysql;



let userModel ={};

userModel.getUsers =(callback)=>
{
    if (connection) 
    {
	connection.query(
		'SELECT * FROM trabajador',
		(err,rows) => {

			if(err){
				throw err;
			}else {
				callback(null,rows);
			}
		    }
	    )
    }
};

userModel.insertUser =(userData,callback) =>{
	if (connection) {
		connection.query(
			'INSERT INTO users SET ?', userData,
			(err, result)=>{
				if(err){
					throw err;
				} else {
					callback(null, {
						'insertId': result.insertId
					})
				}
			})
	}
}


	 	
module.exports =userModel;
