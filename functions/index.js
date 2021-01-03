const controller = require('./controllers/controllers');
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
  console.log('Your app is listening on port ' + listener.address().port);
});

exports.app = functions.https.onRequest(app);

//************************ API Mapping **********************************//

const cont  = new controller();

// Load admin panel
app.get('/',(request, response) =>{
	response.render('index', { title: 'Employee Adminss Login' });
});


app.get('/api/getemployees', (req, res) => { cont.findAllEmployees(req, res)});

app.get('/api/read/:item_id', (req, res) => { cont.readEmployeeByItem()});

app.put('/api/update/:item_id', (req, res) => { cont.updateEmployeeByItem()}); 

app.get('/api/delete/:item_id', (req, res) => { cont.deleteEmployeeByItem()}); 

app.post('/api/createEmployeeByItem', (req, res) => { cont.createEmployeeByItem()});


