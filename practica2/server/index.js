const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();


//const { mongoose } = require('./database');

const { mysql} = require('./database');




// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.json());

// Routes
require('./routes/employee.routes')(app);
//app.use('/api/employees', require('./routes/employee.routes'));
//app.use(require('./routes/employee.routes'));

// starting the server
app.listen(app.get('port'),( ) => {
    console.log('server on port 3000');
});