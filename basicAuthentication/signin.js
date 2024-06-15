"use strict";
let currentLogInUserDetails = {};
document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("loginForm");
  // get existing user from local storage
  let existingUser = JSON.parse(localStorage.getItem("users")) || [];
  if (existingUser) {
    console.log("user are there");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let formObj = new FormData(form);
      for (let [key, value] of formObj) {
        currentLogInUserDetails[key] = value;
      }
      let checkUser = existingUser.some(
        (u) =>
          u.email === currentLogInUserDetails.email &&
          u.password === currentLogInUserDetails.password
      );
      if (checkUser) {
        alert("user logged in sucessfully");
      } else {
        alert("user does not exist");
        return;
      }
    });
  } else {
    alert("user not there, signup first");
    return;
  }
});