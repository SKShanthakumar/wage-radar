const firebaseConfig = {
    apiKey: "AIzaSyDBO9IseP8r8Z_9RbGK4v7RqafavEGAgE8",
    authDomain: "wage-radar.firebaseapp.com",
    databaseURL: "https://wage-radar-default-rtdb.firebaseio.com",
    projectId: "wage-radar",
    storageBucket: "wage-radar.appspot.com",
    messagingSenderId: "1088633229326",
    appId: "1:1088633229326:web:a7582a9ec5028fa3026c5f"
  };

  firebase.initializeApp(firebaseConfig);

  var EmpRegDB = firebase.database().ref("EmployeeReg")

  document.getElementById('EmployeeReg').addEventListener("submit",submitForm)

  function submitForm(e) {
    e.preventDefault();
    var name = getElementVal("name");
    var age = getElementVal("age");
    var pincode= getElementVal("pincode");
    var gender = getElementVal("gender");
    var dob = getElementVal("dob");
    var phnnum = getElementVal("phnnum");
    var altphnnum = getElementVal("altphnnum");
    var mobileType = getElementVal("mobileType");
    var langKnown = getElementVal("langKnown");
    var aadhar = getElementVal("aadhar");
    var resAdd = getElementVal("resAdd");
    var skill1 = getElementVal("skill1");
    var wage1 = getElementVal("wage1");
    var skill2 = getElementVal("skill2");
    var wage2 = getElementVal("wage2");
    var skill3 = getElementVal("skill3");
    var wage3 = getElementVal("wage3");
    console.log(name, age, pincode,gender,dob,phnnum,altphnnum,mobileType,langKnown,aadhar,resAdd,skill1,wage1,skill2,wage2,skill3,wage3);
}
const getElementVal = (id) => {
    return document.getElementById(id).value;
};