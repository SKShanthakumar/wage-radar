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

document.getElementById("WgRdrEmployeeReg").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var age = getElementVal("age");
  var pincode = getElementVal("pincode");
  var gender = getElementVal("gender");
  var dob = getElementVal("dob");
  var phno = getElementVal("phno");
  var altphno = getElementVal("altphno");
  var mobiletype = getElementVal("mobiletype");
  var language = getElementVal("language");
  var aadhar = getElementVal("aadhar");
  var resadd = getElementVal("resadd");
  var skill1 = getElementVal("skill1");
  var skill2 = getElementVal("skill2");
  var skill3 = getElementVal("skill3");
  var wage1 = getElementVal("wage1");
  var wage2 = getElementVal("wage2");
  var wage3 = getElementVal("wage3");
  var email = getElementVal("email");
  var password = getElementVal("password");

  saveDataToFirestore(name, age, pincode, gender, dob, phno, altphno, mobiletype, language, aadhar, resadd, skill1, skill2, skill3, wage1, wage2, wage3,email,password);

  document.getElementById("WgRdrEmployeeReg").reset();
}

const saveDataToFirestore = (name, age, pincode, gender, dob, phno, altphno, mobiletype, language, aadhar, resadd, skill1, skill2, skill3, wage1, wage2, wage3,email,password) => {
  db.collection("WgRdrEmployeeReg").add({
    name: name,
    age: age,
    pincode: pincode,
    gender: gender,
    dob: dob,
    phno: phno,
    altphno: altphno,
    mobiletype: mobiletype,
    language: language,
    aadhar: aadhar,
    resadd: resadd,
    skill1: skill1,
    skill2: skill2,
    skill3: skill3,
    wage1: wage1,
    wage2: wage2,
    wage3: wage3,
    email: email,
    password: password
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