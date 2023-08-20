const firebaseConfig = {
  apiKey: "AIzaSyDBO9IseP8r8Z_9RbGK4v7RqafavEGAgE8",
  authDomain: "wage-radar.firebaseapp.com",
  databaseURL: "https://wage-radar-default-rtdb.firebaseio.com",
  projectId: "wage-radar",
  storageBucket: "wage-radar.appspot.com",
  messagingSenderId: "1088633229326",
  appId: "1:1088633229326:web:a7582a9ec5028fa3026c5f"
};


// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var WgRdrEmployeeLogDB = firebase.database().ref("WgRdrEmployeeLog");

document.getElementById("WgRdrEmployeeLog").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("userid");
  var emailid = getElementVal("passcode");
  

  saveMessages(name, emailid);

  document.getElementById("WgRdrEmployeeLog").reset();
}

const saveMessages = (name, emailid) => {
  var newWgRdrEmployeeLog= WgRdrEmployeeLogDB.push();

  newWgRdrEmployeeLog.set({
    userid: name,
    passcode: emailid,
    
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
