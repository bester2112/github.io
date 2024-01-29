///
const equations = ["+", "-", "*"];
let expectedOutput = "";
let chaptaEquation = "";
var mathPosition = document.getElementById("math-chapta-question");

function generateChaptaEquation() {
  var operation = generateRandomEquation();
  var num1 = generateRandomNumber(10);
  var num2 = generateRandomNumber(10);
  if (operation === "-") {
    if (num1 < num2) {
      // swap if num1 < num2 ex 1 - 10 = -10 you cant enter negative values
      [num1, num2] = [num2, num1];
    }
  }
  chaptaEquation = num1 + " " + operation + " " + num2 + " = ";
  mathPosition.innerHTML = chaptaEquation;
  expectedOutput = calculatedOutput(num1, num2, operation);
  console.log("mathPosition.innerHTML " + mathPosition.innerHTML);
}

function calculatedOutput(num1, num2, operation) {
  switch (operation) {
    case equations[0]: // +
      return num1 + num2;
    case equations[1]: // -
      return num1 - num2;
    case equations[2]: // *
      return num1 * num2;
  }
}

function generateRandomEquation() {
  const index = Math.floor(Math.random() * 10) % 3;
  return equations[index];
}

function generateRandomNumber(multiplier) {
  return Math.floor(Math.random() * multiplier) + 1;
}

function isMathInputCorrect() {
  var result = false;
  let num = document.getElementById("math-solution-input").value;

  if (isNaN(num)) {
    result = false;
  } else {
    var numInt = parseInt(num);
    if (numInt === expectedOutput) {
      result = true;
    } else {
      result = false;
    }
  }
  return result;
}

function updateSubmitButton() {
  let num = document.getElementById("math-solution-input").value;
  console.log(num + " ==> num");
  console.log(expectedOutput + " ==> num");

  if (isMathInputCorrect()) {
    //document.getElementById("result_math").innerHTML += "<p> :) " + chaptaEquation + num + "</p>";
    document.getElementById("blue-close-outline").style.visibility = "hidden";
    document.getElementById("blue-checkmark-outline").style.visibility =
      "visible";
  } else {
    //document.getElementById("result_math").innerHTML += "<p> :! " + chaptaEquation + num + "</p>";
    document.getElementById("blue-close-outline").style.visibility = "visible";
    document.getElementById("blue-checkmark-outline").style.visibility =
      "hidden";
  }
  // to regenerate chapta again

  //to reset input field
  //document.getElementById("math-solution-input").value = "";

  //document.getElementsByClassName("asterix-style-antwort")[0].style.display = "inline-block";
}

///

/*
  needs to be here to call the generateNew Equation method
*/

var kontaktVornameID = document.getElementById("kontakt-vorname");
var kontaktNachnameID = document.getElementById("kontakt-nachname");
var telephoneID = document.getElementById("telephone");
var kontaktMessageID = document.getElementById("kontakt-message");
var mathChaptaQuestion = document.getElementById("math-chapta-question");
var kontaktMathProblemID = document.getElementById("math-solution-input");
var checkboxDataSafety = document.getElementById("data-safety");
var checkboxDataSafetyText = document.getElementById("data-safety-text");

var emailClass = document.getElementsByClassName("kontakt-email");

/** This just adds / removes the Asterix
 *  on top of the input field if the field is empty
 *  and removes it if the inputvield gets text in it **/
// if the error is corrected, check with an onchange Method if it is
// still empty and if not,
// remove the error  color
//var inputVorname = document.getElementsByClassName("kontakt-input-vorname");
//var asterixVorname = document.getElementsByClassName("asterix-style-vorname");
var asterixVorname = document.getElementById("asterix-style-vorname-id");

kontaktVornameID.addEventListener("input", updateVorname);
kontaktVornameID.addEventListener("change", updateVorname);

function updateVorname(event) {
  console.log("updateVorname" + event);
  console.log("updateVorname" + event.type);
  switch (event.type) {
    case "change":
      if (
        kontaktVornameID.classList.contains("kontakt-invalid-content") &&
        kontaktVornameID.value !== ""
      ) {
        kontaktVornameID.classList.remove("kontakt-invalid-content");
      }
      break;

    case "input":
      console.log("kontaktVorname " + kontaktVornameID);
      console.log("asterixVorname " + asterixVorname);
      if (
        kontaktVornameID.getAttribute("placeholder") &&
        kontaktVornameID.value === ""
      ) {
        asterixVorname.style.display = "inline-block";
        //.classList.remove("asterix-style-star-add-remove");
      } else {
        asterixVorname.style.display = "none";
        //asterixVorname.classList.add("asterix-style-star-add-remove");
      }
      break;
  }
}

/** This just adds / removes the Asterix
 *  on top of the input field if the field is empty
 *  and removes it if the inputvield gets text in it **/
//var inputNachname = document.getElementsByClassName("kontakt-input-nachname");
//var asterixNachname = document.getElementsByClassName("asterix-style-nachname");
var asterixNachname = document.getElementById("asterix-style-nachname-id");

kontaktNachnameID.addEventListener("input", updateNachname);
kontaktNachnameID.addEventListener("change", updateNachname);

function updateNachname(event) {
  console.log("updateNachname" + event);
  console.log("updateNachname" + event.type);
  switch (event.type) {
    case "change":
      if (
        kontaktNachnameID.classList.contains("kontakt-invalid-content") &&
        kontaktNachnameID.value !== ""
      ) {
        kontaktNachnameID.classList.remove("kontakt-invalid-content");
      }
      break;

    case "input":
      console.log("kontaktNachnameID " + kontaktNachnameID);
      console.log("asterixNachname " + asterixNachname);
      if (
        kontaktNachnameID.getAttribute("placeholder") &&
        kontaktNachnameID.value === ""
      ) {
        asterixNachname.style.display = "inline-block";
      } else {
        asterixNachname.style.display = "none";
      }
      break;
  }
}

/** This just adds / removes the Asterix
 *  on top of the input field if the field is empty
 *  and removes it if the inputvield gets text in it **/
//var inputeMail = document.getElementsByClassName("kontakt-email");
var asterixeMail = document.getElementById("asterix-style-email-id");

emailClass[0].addEventListener("input", updateeMail);
emailClass[0].addEventListener("change", updateeMail);

function updateeMail(event) {
  console.log("updateeMail" + event);
  console.log("updateeMail" + event.type);
  switch (event.type) {
    case "change":
      if (
        emailClass[0].classList.contains("kontakt-invalid-content") &&
        emailClass[0].value !== ""
      ) {
        emailClass[0].classList.remove("kontakt-invalid-content");
      }
      break;

    case "input":
      console.log("emailClass[0] " + emailClass[0]);
      console.log("asterixeMail " + asterixeMail);
      if (
        emailClass[0].getAttribute("placeholder") &&
        emailClass[0].value === ""
      ) {
        asterixeMail.style.display = "inline-block";
      } else {
        asterixeMail.style.display = "none";
      }
      break;
  }
}

/** This just adds / removes the Asterix
 *  on top of the input field if the field is empty
 *  and removes it if the inputvield gets text in it **/
//var inputAntwort = document.getElementsByClassName("kontakt-math-problem");
//var asterixAntwort = document.getElementsByClassName("asterix-style-antwort");
var asterixAntwort = document.getElementById("asterix-style-antwort-id");

kontaktMathProblemID.addEventListener("input", updateAntwort);
kontaktMathProblemID.addEventListener("change", updateAntwort);

function updateAntwort(event) {
  console.log("updateAntwort " + event);
  console.log("updateAntwort " + event.type);
  switch (event.type) {
    case "change":
      if (
        kontaktMathProblemID.classList.contains("kontakt-invalid-content") &&
        kontaktMathProblemID.value !== ""
      ) {
        kontaktMathProblemID.classList.remove("kontakt-invalid-content");
      }
      break;

    case "input":
      console.log("kontaktMathProblemID " + kontaktMathProblemID);
      console.log("asterixAntwort " + asterixAntwort);
      if (
        kontaktMathProblemID.getAttribute("placeholder") &&
        kontaktMathProblemID.value === ""
      ) {
        asterixAntwort.style.display = "inline-block";
      } else {
        asterixAntwort.style.display = "none";
      }
      break;
  }
}

/** This just adds / removes the Asterix
 *  on top of the input field if the field is empty
 *  and removes it if the inputvield gets text in it **/
var asterixNachrichtArea = document.getElementById(
  "asterix-style-nachricht-area-id"
);

kontaktMessageID.addEventListener("input", updateNachrichtArea);
kontaktMessageID.addEventListener("change", updateNachrichtArea);

function updateNachrichtArea(event) {
  console.log("updateNachrichtArea" + event);
  console.log("updateNachrichtArea" + event.type);
  switch (event.type) {
    case "change":
      console.log("i am now in change");
      if (
        kontaktMessageID.classList.contains("kontakt-invalid-content") &&
        kontaktMessageID.value !== ""
      ) {
        kontaktMessageID.classList.remove("kontakt-invalid-content");
      }
      break;
    case "input":
      console.log("i am now in input");
      console.log("kontaktMessageID " + kontaktMessageID);
      console.log("asterixNachrichtArea " + asterixNachrichtArea);
      if (
        kontaktMessageID.getAttribute("placeholder") &&
        kontaktMessageID.value === ""
      ) {
        asterixNachrichtArea.style.display = "inline-block";
        //asterixNachrichtArea.classList.remove("asterix-style-star-add-remove");
      } else {
        asterixNachrichtArea.style.display = "none";
        //asterixNachrichtArea.classList.add("asterix-style-star-add-remove");
      }
      break;
  }
}

checkboxDataSafety.addEventListener("change", checkCorrectedContentDataSafety);
function checkCorrectedContentDataSafety() {
  if (checkboxDataSafetyText.classList.contains("kontakt-invalid-content")) {
    checkboxDataSafetyText.classList.remove("kontakt-invalid-content");
  }
}

function checkNotEmpty() {
  var content = 0;
  if (kontaktVornameID.value !== "") {
    content++;
  }
  if (kontaktNachnameID.value !== "") {
    content++;
  }
  if (emailClass[0].value !== "") {
    content++;
  }
  if (kontaktMessageID.value !== "") {
    content++;
  }
  if (kontaktMathProblemID.value !== "") {
    content++;
  }
  if (checkboxDataSafety.checked) {
    content++;
  }
  return content;
}

//add event listener to the not empty fields

function checkRequiredDataNotEmpty() {
  var errorCount = 0;
  if (kontaktVornameID.value === "") {
    // error, vorname is empty
    kontaktVornameID.classList.add("kontakt-invalid-content");
    errorCount++;
  }
  if (kontaktNachnameID.value === "") {
    // error, nachname is empty
    kontaktNachnameID.classList.add("kontakt-invalid-content");
    errorCount++;
  }
  if (emailClass[0].value === "") {
    // error, email is empty
    emailClass[0].classList.add("kontakt-invalid-content");
    errorCount++;
  }
  if (kontaktMessageID.value === "") {
    // error, Nachricht is empty
    kontaktMessageID.classList.add("kontakt-invalid-content");
    errorCount++;
  }
  if (kontaktMathProblemID.value === "") {
    // error, math solution is empty
    kontaktMathProblemID.classList.add("kontakt-invalid-content");
    errorCount++;
  }
  if (!checkboxDataSafety.checked) {
    // error, checkbox is empty
    checkboxDataSafetyText.classList.add("kontakt-invalid-content");
    errorCount++;
  }
  return errorCount;
}

function checkEmailValidation(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

var popupBadKontakt = document.getElementById("popup-kontakt-message-bad-id");
var popupGoodKontakt = document.getElementById("popup-kontakt-message-good-id");

function removeBadPopup() {
  popupBadKontakt.classList.remove("popup-kontakt-send-message");
  popupBadKontakt.classList.add("popup-kontakt-message");
}

function validateAll() {
  var validationKorrekt = true;
  console.log("validationKorrekt " + validationKorrekt);
  var mathQuestion = isMathInputCorrect();
  console.log("mathQuestion " + mathQuestion);
  var errors = checkRequiredDataNotEmpty();
  console.log("errors " + errors);

  var emailCheck = checkEmailValidation(emailClass[0].value);
  console.log("emailCheck " + emailCheck);
  if (!emailCheck) {
    emailClass[0].classList.add("kontakt-invalid-content");
  }
  if (errors !== 0 || !emailCheck || !mathQuestion) {
    // show error popup
    popupBadKontakt.classList.add("popup-kontakt-send-message");
    popupBadKontakt.classList.remove("popup-kontakt-message");
    setInterval(removeBadPopup, 6000);
    validationKorrekt = false;
    console.log(
      "in if ->  errors !== 0 : " +
        (errors !== 0) +
        " !emailCheck " +
        !emailCheck +
        " mathQuestion " +
        !mathQuestion +
        " validationKorrekt " +
        validationKorrekt
    );
  }
  return validationKorrekt;
}

function sendEmailSmtpJs() {
  Email.send({
    Host: "smtp.mailtrap.io",
    Username: "de28b0068d20e0",
    Password: "014d5b6fb061da",
    //SecureToken: "ba686c1c-432e-4a3c-9529-23c7a3a1e7ea",
    To: "thomas.rz.2112@googlemail.com",
    From: "noreply.securefly@gmail.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message + "mail send successfully"));
}

function clearInputs() {
  kontaktVornameID.value = "";
  kontaktNachnameID.value = "";
  emailClass[0].value = "";
  telephoneID.value = "";
  kontaktMessageID.value = "";
  //mathChaptaQuestion.innerHTML = "";
  kontaktMathProblemID.value, (checkboxDataSafety.checked = "");

  document.getElementById("math-solution-input").value = "";

  asterixVorname.style.display = "inline-block";
  asterixNachname.style.display = "inline-block";
  asterixeMail.style.display = "inline-block";
  asterixNachrichtArea.style.display = "inline-block";
  asterixAntwort.style.display = "inline-block";

  document.getElementById("blue-close-outline").style.visibility = "hidden";
  document.getElementById("blue-checkmark-outline").style.visibility = "hidden";
}

function removeGoodPopup() {
  popupGoodKontakt.classList.remove("popup-kontakt-send-message");
  popupGoodKontakt.classList.add("popup-kontakt-message");
}

function sendEmail() {
  if (validateAll()) {
    var params = {
      vorname_id: kontaktVornameID.value,
      nachname_id: kontaktNachnameID.value,
      eMail_adress: emailClass[0].value,
      telephone_number: telephoneID.value,
      message_content: kontaktMessageID.value,
      security_question: mathChaptaQuestion.innerHTML,
      security_answer: kontaktMathProblemID.value,
      accept_security: checkboxDataSafety.checked,
    };
    console.log(params);
    /*emailjs
    .send("service_pr2qu1y", "template_z13ok8f", params)
    .then((message) => alert(message + "mail send successfully"));*/

    popupGoodKontakt.classList.add("popup-kontakt-send-message");
    popupGoodKontakt.classList.remove("popup-kontakt-message");
    setInterval(removeGoodPopup, 6000);

    clearInputs();
    generateChaptaEquation();
  }

  //window.location.reload();

  //open("#anchorsection-kontakt", "_self");
}

window.onbeforeunload = function () {
  if (checkNotEmpty() !== 0) {
    var message = "Sind Sie sicher, dass Sie die Seite neu laden wollen?";
    if (typeof evt == "undefined") {
      evt = window.event;
    }
    if (evt) {
      evt.returnValue = message;
    }
  }

  return message;
};

window.onunload = function () {
  clearInputs();
};
