const firebaseConfig = {
    apiKey: "AIzaSyBfjtQ5eZDaVPfY03NoU5G7ukft4_08520",
    authDomain: "contact-form-be3a1.firebaseapp.com",
    databaseURL: "https://contact-form-be3a1-default-rtdb.firebaseio.com",
    projectId: "contact-form-be3a1",
    storageBucket: "contact-form-be3a1.appspot.com",
    messagingSenderId: "33152882366",
    appId: "1:33152882366:web:b9c6723e617c2dc0c7f0ef",
    measurementId: "G-YP5W23LPWB"

};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
