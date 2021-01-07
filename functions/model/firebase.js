var admin = require("firebase-admin");

const serviceAccount = require("../serviceAccountKey.json");

const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://employeeapi-96cdc.firebaseio.com"
  
});

const db = admin.firestore();

var MyModule = function(){};
MyModule.prototype.someFunction = function(params){

  db.collection('blogs').doc().set(params);
}
MyModule.prototype.getEmployeeData= async function(){
  
  const empRef = await db.collection('employees');
  
  return empRef;
}
MyModule.prototype.delete= async function(param){
   await db.collection('employees').doc(param).delete();
 
}
MyModule.prototype.search= async function(param){
  var empRef = await db.collection("employees").doc(param).get();
  
  
 return empRef;
}
module.exports = MyModule;

