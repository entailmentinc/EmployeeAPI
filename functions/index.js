const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({ origin: true }));

app.get('/hello-world', (req, res) => {
  return res.status(200).send('Hello World!');
});

const serviceAccount = require("./serviceAccountKey.json");

const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://employeeapi-96cdc.firebaseio.com"
  
});
//databaseURL: "https://employeeapi-96cdc.firebaseio.com"

const db = admin.firestore();


app.get('/api/read', (req, res) => {
    (async () => {
        try {
            let query = db.collection('employees');
            let response = [];
            await query.get().then(querySnapshot => {
            let docs = querySnapshot.docs;
	            for (let doc of docs) {
	                const selectedItem = {
	                    email: doc.data().email,
	                 	mobile_phone: doc.data().mobile_phone
	                };
	                response.push(selectedItem);
	            }
	            return null;
            });
            return res.status(200).send(response);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
        })();
    });

let listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});

exports.app = functions.https.onRequest(app);


// // // Create and Deploy Your First Cloud Functions
// // // https://firebase.google.com/docs/functions/write-firebase-functions
// //
// // exports.helloWorld = functions.https.onRequest((request, response) => {
// //  response.send("Hello from Firebase!");
// // });
// const functions = require('firebase-functions');
// const admin = require('firebase-admin');
// const express = require('express');
// const bodyParser = require('body-parser');
// // import express, { Router, Request } from 'express';
// // const engines = require('consolidate');
// const cors = require('cors');

// // const databaseName = 'employees';

// const serviceAccount = require("./serviceAccountKey.json");

// const firebaseApp = admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
  
// });
// //databaseURL: "https://employeeapi-96cdc.firebaseio.com"

// // const db = admin.firestore();

// // const router = Router();
// // router.get('/getEmployees', async (req, res, next) => {
// //     try {
// //     	console.log("getEmployees");
// //         const noteSnapshot = await db.collection('employees').get();
// //         const notes = [];
// //         noteSnapshot.forEach((emp) => {
// //             notes.push({
// //                 email: emp.email,
// //                 mobile_phone: emp.mobile_phone
// //             });
// //         });
// //         res.json(notes);
// //     } catch(e) {
// //         next(e);
// //     }
// // });

// // export default router;

// const app = express();
// app.use(cors());
// const main = express();
// // app.engine('hbs',engines.handlebars);
// // app.set('views','./views');
// // app.set('view engine','hbs');


// //add the path to receive request and set json as bodyParser to process the body 
// main.use('/api/v1', app);
// main.use(bodyParser.json());
// main.use(bodyParser.urlencoded({ extended: false }));

// //initialize the database and the collection 
// const db = admin.firestore();
// const userCollection = 'employees';






// //get all users
// app.get('/employees', async (req, res) => {
//     try {
//         const userQuerySnapshot = await db.collection(userCollection).get();
//         const users = [];
//         userQuerySnapshot.forEach(
//             (doc)=>{
//                 users.push({
//                     email: doc.email,
//                     emp_code:doc.emp_code
//             });
//             }
//         );
//         res.status(200).json(users);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

// // app.get('/',(request, response) =>{
// // 	response.render('index', { title: 'SED Login' });
// // });

// // //************************ Mobile App Start ***************************************//

// // // fetch all employee values from database
// // function getEmployees(){
// // 	const ref = firebaseApp.database().ref(databaseName);
// // 	console.log("Employees Database URL mobile listing: "+ ref);
// // 	return ref.once('value').then(snap => snap.val().filter(item => (item.isActive == true)));
// // 	// return ref.orderByChild('isActive').equalTo(true).once('value', function(snapshot) {
// // 	// 			// var totalRecords =  snapshot.numChildren();
// //  //    // 			console.log("Total Records : " + totalRecords);
// // 	// 		    // console.log(snapshot.val());
// // 	// 		    // snapshot.forEach(function(data) {
// // 	// 		    //     console.log(data.key);
// // 	// 		    // });
// // 	// 		});
// // 	// return ref.orderByChild('isActive').equalTo(true).once('value').then(snap => snap.val());
	
// // 	// return ref.once('value').then(snap => snap.val());
// // 	// return ref.once('value').then(function (snap) {
// // 	// 	 console.log('snap.val()', snap.val());
// // 	// 	 });
// // }


// // // Mobile API's
// //  to findAll and findByName employees api
// //  let findAll = (request, response) =>{
// // 	// response.set('Cache-Control', 'public, max-age=300, s-maxage=600');
// // 	getEmployees().then(employees => {

// // 		var result = {};
// // 	    let name = request.query.name;
// // 	    let email = request.query.email;
// // 	    if (name) {
// // 	        let result = employees.filter(employee => (employee.firstName +  ' ' + employee.lastName).toUpperCase().indexOf(name.toUpperCase()) > -1);
// // 	        result = response.json(result);
// // 	    }else if (email) {
// // 	        let result = employees.filter(employee => employee.email === email)[0];
// // 	        result = response.json(result);
// // 	    }else {
// // 	        result = response.json(employees);
// // 	    }
// // 	    return result;
// // 	}).catch(error => {
// // 	    console.error(error);
// // 	    response.error(500);
// // 	});
// // };


// // // Employee API Webservices for Mobile and Admin site

// // //************************ Mobile app start **********************************//

// // app.get('/employeeslist',findAll); //findAll and findByName , findByEmail all together

// //define google cloud function name
// let listener = app.listen(process.env.PORT, () => {
//   console.log('Your app is listening on port ' + listener.address().port);
// });

// const webApi = functions.https.onRequest(main);

// module.exports = {
//   webApi
// }

