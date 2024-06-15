"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("deleteUserForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");
    let existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const indexToDelete = existingUsers.findIndex((user) => {
      return user.email === email && user.password === password;
    });
    if (indexToDelete !== -1) {
      existingUsers.splice(indexToDelete, 1);
      localStorage.setItem("users", JSON.stringify(existingUsers));

      console.log("User deleted successfully.");
    } else {
      console.log("User not found.");
    }
    form.reset();
  });
});
