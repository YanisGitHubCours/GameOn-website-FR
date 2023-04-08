function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
var content = ""
var modal = document.getElementById("modal")
//FORM ELEMENTS
FirstName = document.getElementById("first");
LastName = document.getElementById("last");
Mail = document.getElementById("email");
bDate = document.getElementById("birthdate");


//GET DATA FROM MODAL
let data = {
  firstname: null,
  lastname: null,
  email: null,
  birthdate: null,
  tournament: 0,
  locate: null,
  condition: false,
  state: false
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
document.querySelector(".close").addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function closeModal(){
  modalbg.style.display = "none";
  if (content != ""){
    modal.innerHTML = content
  }
}

function checkFirstName(){
  valueFirstName = FirstName.value
  if (valueFirstName.length < 4 || valueFirstName == null) {
    formData[0].setAttribute("data-error", "Veuillez entrer 4 caractères ou plus pour le champ du prénom.");
    formData[0].setAttribute("data-error-visible", "true");
    data['state'] = true;
  }else {
    formData[0].setAttribute("data-error", null);
    formData[0].setAttribute("data-error-visible", "false");
    data["state"] = false;
    data["firstname"] = valueFirstName

  }
}

function checkName(){
  valueName = LastName.value
  if (valueName.length < 4 || valueName == null) {
    formData[1].setAttribute("data-error", "Veuillez entrer 4 caractères ou plus pour le champ du nom.");
    formData[1].setAttribute("data-error-visible", "true");
    data['state'] = true;
  }else {
    formData[1].setAttribute("data-error", null);
    formData[1].setAttribute("data-error-visible", "false");
    data['state'] = false;
    data['lastname'] = valueName
  }
}

function checkMail(){
  valueMail = Mail.value
  array = valueMail.split("@")
  
  if (array[1] == null || array[1] == "") {
    formData[2].setAttribute("data-error", "Veuillez saisir une addresse mail valide.");
    formData[2].setAttribute("data-error-visible", "true");
    data['state'] = true;
  }else{
    if (array[1] != "gmail.com" && array[1] != "proton.me" && array[1] != "protonmail.com" && array[1] != "yahoo.fr" && array[1] != "outlook.com") {
      formData[2].setAttribute("data-error", "Veuillez saisir une addresse mail valide.");
      formData[2].setAttribute("data-error-visible", "true");
      data['state'] = true;
    }else{
      formData[2].setAttribute("data-error", null);
      formData[2].setAttribute("data-error-visible", "false");
      data['state'] = false;
      data['email'] = valueMail
    }
  }
}

function checkBirth(){
  bdValue = bDate.value
  currentYear = new Date().getFullYear() 
  arrayBirth = bdValue.split("-")

  if (currentYear - arrayBirth[0] < 16){
    formData[3].setAttribute("data-error", "Vous avez moins de 16 ans");
    formData[3].setAttribute("data-error-visible", "true");
    data['state'] = true;
  }else{
    formData[3].setAttribute("data-error", null);
    formData[3].setAttribute("data-error-visible", "false");
    data['state'] = false;
    data['birthdate'] = bdValue
  }
}

function checkTournament(){
  quantity = document.querySelector("input[name=quantity]").value 
  if (!isNaN(parseInt(quantity))){
    data["tournament"] = parseInt(quantity);
    data["state"] = true
  } else {
    formData[4].setAttribute("data-error", "Ce n'est pas un nombre");
    formData[4].setAttribute("data-error-visible", "true");
    data["tournament"] = 0;
    data["state"] = false
  }
}

function checkLocation(){
  valueLocation = document.querySelector("input[type=radio]:checked").value
  data['locate'] = valueLocation
}

function checkCondition(){
  valueCondition = document.querySelector("#checkbox1:checked") != null
  console.log(valueCondition)
  data['condition'] = valueCondition
}

function validate(){
  if (data['firstname'] != null && data['lastname'] != null && data['email'] != null && data['birthdate'] != null && data['condition'] && data['state'] == false) {
    content = modal.innerHTML
    modal.innerHTML = ""
    var button = document.createElement('button');

    button.innerHTML = "Fermer";
    button.classList.add('btn-submit');
    button.addEventListener("click", closeModal)

    var h2 = document.createElement('h2');
    h2.innerHTML = "Merci pour votre insciption";
    h2.classList.add("thanks");
    h2.style.margin = "30px 0"

    modal.appendChild(h2);

    modal.appendChild(button);
  } else {
    alert("Des informations sont manquantes.");
    data['state'] = true
  }
}








