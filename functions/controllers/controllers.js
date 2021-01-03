var admin = require("firebase-admin");

const serviceAccount = require("../serviceAccountKey.json");

const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://employeeapi-96cdc.firebaseio.com"
  
});

const db = admin.firestore();

var Controller = function(){};

Controller.prototype.findAllEmployees = function(req, res) {
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
  Controller.prototype.readEmployeeByItem = (req, res) => {
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
  