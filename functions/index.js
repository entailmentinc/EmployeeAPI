const employeeController = require('./controllers/employeeControllers');
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const app = express();
app.set('view engine','ejs');
app.use(cors({ origin: true }));
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

// Test API
app.get('/api-test', (req, res) => {
  return res.status(200).send('Run Successfully!');
});

let listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + Number(listener.address().port));
  functions.logger.log("New - Your app is listening on port", + Number(listener.address().port))
});

exports.app = functions.https.onRequest(app);

//************************ API Mapping **********************************//

const empCtrl  = new employeeController();

// Load admin panel
app.get('/',(request, response) =>{
	var data = {title:'Employee Admin Login', 
    hobbies:['playing football', 'playing chess', 'cycling']}
    response.render('index', {data:data}); 
	// response.render('index', { title: 'Employee Admin Login' });
});


app.get('/api/getemployees', (req, res) => { empCtrl.findAllEmployees(req, res)});

app.get('/api/read/:item_id', (req, res) => { empCtrl.readEmployeeByItem(req, res)});

app.put('/api/update/:item_id', (req, res) => { empCtrl.updateEmployeeByItem(req, res)}); 

app.get('/api/delete/:item_id', (req, res) => { empCtrl.deleteEmployeeByItem(req, res)}); 

app.post('/api/createEmployeeByItem', (req, res) => { empCtrl.createEmployeeByItem(req, res)});


