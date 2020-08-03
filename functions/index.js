// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions');
const admin = require('firebase-admin');
// const express = require('express');
import express, { Router, Request } from 'express';
// const engines = require('consolidate');
const cors = require('cors');

// const databaseName = 'employees';

const serviceAccount = require("./serviceAccountKey.json");

const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
  
});
//databaseURL: "https://employeeapi-96cdc.firebaseio.com"

const db = admin.firestore();

const router = Router()
router.get('/', async (req, res, next) => {
    try {
        const noteSnapshot = await db.collection('employees').get();
        const notes = [];
        noteSnapshot.forEach((emp) => {
            notes.push({
                email: emp.email,
                mobile_phone: emp.mobile_phone
            });
        });
        res.json(notes);
    } catch(e) {
        next(e);
    }
});

export default router;

// const app = express();
// app.use(cors());
// app.engine('hbs',engines.handlebars);
// app.set('views','./views');
// app.set('view engine','hbs');


// app.get('/',(request, response) =>{
// 	response.render('index', { title: 'SED Login' });
// });



// Mobile API's
 // to findAll and findByName employees api
//  let findAll = (request, response) =>{
// 	// response.set('Cache-Control', 'public, max-age=300, s-maxage=600');
// 	getEmployees().then(employees => {

// 		var result = {};
// 	    let name = request.query.name;
// 	    let email = request.query.email;
// 	    if (name) {
// 	        let result = employees.filter(employee => (employee.firstName +  ' ' + employee.lastName).toUpperCase().indexOf(name.toUpperCase()) > -1);
// 	        result = response.json(result);
// 	    }else if (email) {
// 	        let result = employees.filter(employee => employee.email === email)[0];
// 	        result = response.json(result);
// 	    }else {
// 	        result = response.json(employees);
// 	    }
// 	    return result;
// 	}).catch(error => {
// 	    console.error(error);
// 	    response.error(500);
// 	});
// };


// Employee API Webservices for Mobile and Admin site

//************************ Mobile app start **********************************//

// app.get('/employeeslist',findAll); //findAll and findByName , findByEmail all together

