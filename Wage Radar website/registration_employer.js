const firebaseConfig = {
    apiKey: "AIzaSyDBO9IseP8r8Z_9RbGK4v7RqafavEGAgE8",
    authDomain: "wage-radar.firebaseapp.com",
    databaseURL: "https://wage-radar-default-rtdb.firebaseio.com",
    projectId: "wage-radar",
    storageBucket: "wage-radar.appspot.com",
    messagingSenderId: "1088633229326",
    appId: "1:1088633229326:web:e7b062d7dbf0cbaf026c5f"
  };

firebase.initializeApp(firebaseConfig);

// reference your database
var WgRdrEmployerRegDB = firebase.database().ref("WgRdrEmployerReg");

document.getElementById("WgRdrEmployerReg").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var age = getElementVal("age");
  var pincode = getElementVal("pincode");
  var gender = getElementVal("gender");
  var dob = getElementVal("dob");
  var phnum = getElementVal("phnum");
  var altphnum = getElementVal("altphnum");
  var resAdd = getElementVal("resAdd");
  var profession= getElementVal("profession");
  

  saveMessages(name,age,pincode,gender,dob,phnum,altphnum,resAdd,profession);

  document.getElementById("WgRdrEmployerReg").reset();
}

const saveMessages = (name,age,pincode,gender,dob,phnum,altphnum,resAdd,profession) => {
  var newWgRdrEmployerReg = WgRdrEmployerRegDB.push();

  newWgRdrEmployerReg.set({
    name:name,
    age:age,
    pincode:pincode,
    gender:gender,
    dob:dob,
    phnum:phnum,
    altphnum:altphnum,
    resAdd:resAdd,
    profession:profession,
  });
};
const getElementVal = (id) => {
    return document.getElementById(id).value;
  };