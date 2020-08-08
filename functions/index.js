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

let findAllEmployees = (req, res) =>{

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
};

// read item
let readEmployeeByItem = (req, res) => {
    (async () => {
        try {
            const document = db.collection('employees').doc(req.params.item_id);
            let item = await document.get();
            let response = item.data();
            return res.status(200).send(response);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
        })();
    };

// update
let updateEmployeeByItem = (req, res) => {
(async () => {
    try {
        const document = db.collection('employees').doc(req.params.item_id);
        await document.update({
            item: req.body.item
        });
        return res.status(200).send();
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
    })();
};

// delete
let deleteEmployeeByItem = (req, res) => {
(async () => {
    try {
        const document = db.collection('employees').doc(req.params.item_id);
        await document.delete();
        return res.status(200).send();
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
    })();
};

let createEmployeeByItem = (req, res) => {
(async () => {
    try {
        const document = db.collection('employees').doc();
        await document.set({
            item: req.body.item
        });
        return res.status(200).send();
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
    })();
};


let listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});

exports.app = functions.https.onRequest(app);

//************************ Mobile app start **********************************//

app.get('/api/getemployees',findAllEmployees);

app.get('/api/read/:item_id',readEmployeeByItem);

app.put('/api/update/:item_id',updateEmployeeByItem); 

app.get('/api/delete/:item_id',deleteEmployeeByItem); 

app.post('/api/createEmployeeByItem',createEmployeeByItem);


