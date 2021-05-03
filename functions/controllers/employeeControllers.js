// const employeeService = require('../services/employeeService');

var Controller = function(){};
// var empService = new employeeService();

var admin = require("firebase-admin");

const serviceAccount = require("../serviceAccountKey.json");

const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://employeeapi-96cdc.firebaseio.com"
  
});

const db = admin.firestore();

Controller.prototype.findAllEmployees = function(req, res) {
    (async () => {
        // const docRef = db.collection('employees').doc();
        // docRef.get().then(function(doc) {
        //     if (doc.exists) {
        //         console.log("KHANDAL -----");
        //         console.log(doc);
        //     } else {
        //       //user does not exist..
        //     }
        //   })
        try {

            var empArray = [];
            const employeesRef = db.collection('employees');
            const snapshot = await employeesRef.get();
            snapshot.forEach(doc => {
            // console.log(doc.id, '=>', doc.data());
                empArray.push(doc.data());
            });
            return res.status(200).send(empArray);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
  };
  
  // read item
  Controller.prototype.readEmployeeByItem = (req, res) => {
      (async () => {
          try {
            //   let response = empService.readEmployeeByItem(req.params.item_id);
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
  Controller.prototype.updateEmployeeByItem = (req, res) => {
  (async () => {
      try {
          const document = db.collection('employees').doc(req.params.item_id);
          await document.update({
              first_name: req.body.fname
          });
          return res.status(200).send();
      } catch (error) {
          console.log(error);
          return res.status(500).send(error);
      }
      })();
  };
  
  // delete
  Controller.prototype.deleteEmployeeByItem = (req, res) => {
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
  
  Controller.prototype.createEmployeeByItem = (req, res) => {
  (async () => {
      try {
          const document = db.collection('employees').doc();
          await document.set({
              first_name: req.body.fname
          });
          return res.status(200).send();
      } catch (error) {
          console.log(error);
          return res.status(500).send(error);
      }
      })();
  };

  module.exports = Controller;
  