const employeeService = require('../services/employeeService');

var Controller = function(){};
var empService = new employeeService();

Controller.prototype.findAllEmployees = function(req, res) {
    (async () => {
        try {
            let response = empService.findAllEmployees();
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
              let response = empService.readEmployeeByItem(req.params.item_id);
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
  