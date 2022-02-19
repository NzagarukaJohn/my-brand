let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(email, 0, "Email cannot be blank");
  engine(password, 1, "Password cannot be blank");

  signin(email.value, password.value);

});

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";
    return false;
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";
    return true;
  }  
};


const signin = (email, password) =>{
    let url = "https://john-my-brand.herokuapp.com/login";
     fetch(url,{
      method: 'POST',
       headers:{
        "Accept":"application/json, text/plain, */*",
         'Content-Type': "application/json"
       },
       body: JSON.stringify({email:email, password:password})
     }).then(res=>{
       if(res.ok){
         return res.json();
       }else if(res.status == 400){
         alert("Wrong email or password")
       }
     }).then(data =>{
       localStorage.setItem("token", data.token); 
       window.location.replace("../dashboard.html")
     }).catch(err=>{
       alert("Problem connecting to the server")
     })
}
