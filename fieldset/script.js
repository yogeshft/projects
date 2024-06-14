"use strict";

// global request obj
let reqObj = {};

// initially hide submit btn
let submitBtn = document.querySelector("#submitBtn");
hideElement(submitBtn);

let fieldset__one = document.getElementsByClassName("one")[0];
let fieldset__two = document.getElementsByClassName("two")[0];

// initially make fieldset 2 disabled and hide
fieldset__two.setAttribute("disabled", "");
hideElement(fieldset__two);

// phase 1
let screenOneBtn = document.getElementById("screenOneBtn");
screenOneBtn.addEventListener("click", () => {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;

  if (fname !== "" && lname !== "") {
    fieldset__one.setAttribute("disabled", "");
    hideElement(fieldset__one);
    fieldset__two.removeAttribute("disabled");
    showElement(fieldset__two);
    reqObj["fname"] = fname;
    reqObj["lname"] = lname;
  } else {
    window.alert("please enter the details");
  }
});

// phase 2
let screenTwoBtn = document.getElementById("screenTwoBtn");
screenTwoBtn.addEventListener("click", () => {
  let address = document.getElementById("address").value;
  let city = document.getElementById("city").value;
  if (address !== "" && city !== "") {
    hideElement(fieldset__two);
    showElement(submitBtn);
    reqObj["address"] = address;
    reqObj["city"] = city;
  }
});

// final submit btn
if (submitBtn) {
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.alert("form submitted", reqObj);
    console.log(reqObj);
  });
}

function hideElement(element) {
  element.style.display = "none";
}

function showElement(element) {
  element.style.display = "block";
}
