const form = document.getElementById("contact-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const userMsg = document.getElementById("message");

const errorMsg = document.getElementsByClassName("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validate(username, 0, "Username cannot be blank");
  validate(email, 1, "Please enter a valid email address");
  validate(subject, 2, "Subject cannot be blank");
  validate(userMsg, 3, "Message cannot be blank");

     sendQuery();
});

let validate = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";
  }
};

function sendQuery(){
  let name = document.querySelector("#username").value,
   email = document.querySelector("#email").value,
   subject = document.querySelector("#subject").value,
   message = document.querySelector("#message").value

    let newQuery = {
       username:name,
       email: email,
       subject:subject,
       message: message
   }
  fetch("https://john-my-brand.herokuapp.com/query",{
    method: 'POST',
    headers:{
      "Accept":"application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newQuery)
  })
  .then(res=>{
         if (res.ok == true) {
            console.log(res)
         }
         else console.log(`Error Happened: ${res.status}`)
  })
   alert("Your query has been sent successfully");
  // window.location = 'dashboard.html'

}

var burgerMenu = document.getElementById("burger-menu");
var overlay = document.getElementById("menu");
burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  overlay.classList.toggle("active");
});

