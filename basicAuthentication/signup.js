"user strict";
let url = "./users.json";
let form = document.getElementById("signUp-form");
const user = {};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  formData.forEach((value, key) => {
    user[key] = value;
  });

  let users = JSON.parse(localStorage.getItem("users")) || [];
  const userExist = users.some((u) => u.email === user.email);
  if (userExist) {
    alert("user already exsit");
    return;
  }
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  alert("user created successfully");
});


/*
// wont work because it will require backed
function apiCall(url, obj) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(obj),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
*/
