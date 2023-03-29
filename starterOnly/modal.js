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

//FORM ELEMENTS
FirstName = document.getElementById("first");
LastName = document.getElementById("last");
Mail = document.getElementById("email");
bDate = document.getElementById("birthdate");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function closeModal(){
  modalbg.style.display = "none";
}

function checkFirstName(){
  valueFirstName = FirstName.value
  if (valueFirstName.length < 4) {
    formData[0].setAttribute("data-error", "Veuillez entrer 4 caractères ou plus pour le champ du prénom.");
    formData[0].setAttribute("data-error-visible", "true");
  }else {
    formData[0].setAttribute("data-error", null);
    formData[0].setAttribute("data-error-visible", "false");
  }
}

function checkName(){
  valueName = LastName.value
  if (valueName.length < 4) {
    formData[1].setAttribute("data-error", "Veuillez entrer 4 caractères ou plus pour le champ du nom.");
    formData[1].setAttribute("data-error-visible", "true");
  }else {
    formData[1].setAttribute("data-error", null);
    formData[1].setAttribute("data-error-visible", "false");
  }
}

function checkMail(){
  valueMail = Mail.value
  array = valueMail.split("@")
  
  if (array[1] == null || array[1] == "") {
    formData[2].setAttribute("data-error", "Veuillez saisir une addresse mail valide.");
    formData[2].setAttribute("data-error-visible", "true");
  }else{
    if (array[1] != "gmail.com" && array[1] != "proton.me" && array[1] != "protonmail.com" && array[1] != "yahoo.fr" && array[1] != "outlook.com") {
      formData[2].setAttribute("data-error", "Veuillez saisir une addresse mail valide.");
      formData[2].setAttribute("data-error-visible", "true");
    }else{
      formData[2].setAttribute("data-error", null);
      formData[2].setAttribute("data-error-visible", "false");
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
  }else{
    formData[3].setAttribute("data-error", null);
    formData[3].setAttribute("data-error-visible", "false");
  }
}

function checkLocation(){
  valueLocation = document.querySelector("input[type=radio]:checked").value
  return valueLocation
}

function checkCondition(){
  valueCondition = document.querySelector("input[type=submit]:checked").value
  return valueCondition
}

function validate(){
  var button = document.createElement('button');
  const modal = document.getElementById("modal");
  modal.innerHTML = "";
  modal.style.height = "80vh";
  
  button.innerHTML = "Fermer";
  button.classList.add('btn-submit');

  var h2 = document.createElement('h2');
  h2.innerHTML = "Merci pour votre insciption";
  h2.classList.add("thanks");
  modal.appendChild(h2);
  modal.appendChild(button);
}








