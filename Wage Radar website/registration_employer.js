const firebaseConfig = {
  apiKey: "AIzaSyDBO9IseP8r8Z_9RbGK4v7RqafavEGAgE8",
  authDomain: "wage-radar.firebaseapp.com",
  databaseURL: "https://wage-radar-default-rtdb.firebaseio.com",
  projectId: "wage-radar",
  storageBucket: "wage-radar.appspot.com",
  messagingSenderId: "1088633229326",
  appId: "1:1088633229326:web:e7b062d7dbf0cbaf026c5f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference your Firestore database
var db = firebase.firestore();

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
  var  email= getElementVal("email");
  var  password= getElementVal("password");
  var resAdd = getElementVal("resAdd");
  var profession= getElementVal("profession");

  saveDataToFirestore(name,age,pincode,gender,dob,phnum,altphnum,email,password,resAdd,profession);

  document.getElementById("WgRdrEmployerReg").reset();
}

const saveDataToFirestore = (name,age,pincode,gender,dob,phnum,altphnum,email,password,resAdd,profession) => {
  db.collection("WgRdrEmployerReg").add({

    name:name,
    age:age,
    pincode:pincode,
    gender:gender,
    dob:dob,
    phnum:phnum,
    altphnum:altphnum,
    email:email,
    password:password,
    resAdd:resAdd,
    profession:profession,
  })
  .then(docRef => {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(error => {
    console.error("Error adding document: ", error);
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};