// var admin = require("firebase-admin");

// const serviceAccount = require("./serviceAccountKey.json");

// const firebaseApp = admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://employeeapi-96cdc.firebaseio.com"
  
// });

// const db = admin.firestore();

// var MyModule = function(){};
// MyModule.prototype.someFunction = function(params){

//   db.collection('blogs').doc().set(params);
// }
// MyModule.prototype.getdata= async function(){
  
//   const citiesRef = db.collection('blogs');
  
// const snapshot = await citiesRef.get();
//  /*snapshot.forEach(doc => {
//         console.log(doc.id, '=>', doc.data().name);
//       });*/ 
// return snapshot;
// }
// MyModule.prototype.delete= async function(param){
//    await db.collection('blogs').doc(param).delete();
 
// }
// MyModule.prototype.search= async function(param){
//   var docRef = await db.collection("blogs").doc(param).get();
  
  
//  return docRef;
// }
// module.exports = MyModule;

