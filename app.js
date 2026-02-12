let input = document.querySelector("input");
let p = document.querySelector(".fname");
let nameRegex = /^[A-Z][a-z]{2,}$/;

input.addEventListener("input",  ()=> {
     let value = input.value;
     let test = nameRegex.test(value);
     if(test){
          p.textContent = "✔Valid";
          p.style.color = "green";
     }else{
          p.innerHTML = `✖ first name must start with a capital letter and have at least 3 characters <br>✖ only letters <br>✖ have no space <br>✖ more than two letters`;
          p.style.color = "red";
     }
})


let inputLname = document.querySelector("#lname");
let pLname = document.querySelector(".lname");
let nameLnameRegex = /^[A-Z][a-z]{2,}$/;

inputLname.addEventListener("input",  ()=> {
     let value = inputLname.value;
     let test = nameLnameRegex.test(value);
     if(test){
          pLname.textContent = "✔Valid";
          pLname.style.color = "green";
     }else{
          pLname.innerHTML = `✖ last name must start with a capital letter and have at least 3 characters <br>✖ only letters <br>✖ have no space <br>✖ more than two letters`;
          pLname.style.color = "red";
     }
})


let inputPhone = document.querySelector("#phone");
let phoneP = document.querySelector(".phone");
let phoneRegex = /^01[0125][0-9]{8}$/;

inputPhone.addEventListener("input", ()=> {
let value = inputPhone.value;
let test = phoneRegex.test(value);
if(test) {
    phoneP.textContent = "✔Valid";
    phoneP.style.color = "green";
}else{
    phoneP.innerHTML = `✖ phone number must start with 01 and have 11 digits <br>✖ only numbers <br>✖ have no space`;
    phoneP.style.color = "red";
}
})


let inputBirth = document.querySelector("#age");
let birthP = document.querySelector(".birth");

let birthRegex = /^\d{2}-\d{2}-\d{4}$/;

inputBirth.addEventListener("input", () => {
    let value = inputBirth.value; 
    let result = birthRegex.test(value);

    if (result) {
        birthP.textContent = "✔Valid";
        birthP.style.color = "green";
    } else {
        birthP.innerHTML = `✖ birth date must be in the format DD-MM-YYYY <br>✖ only numbers <br>✖ have no space <br>✖ more than two letters`;   
        birthP.style.color = "red";
    }
});


let inputEmail = document.querySelector("#email");
let emailP = document.querySelector(".email");
let emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

inputEmail.addEventListener("input", ()=> {
let value = inputEmail.value;
let test = emailRegex.test(value);
if(test) {
    emailP.textContent = "✔Valid";
    emailP.style.color = "green";
}else{
    emailP.innerHTML = `✖ email must start with small letters <br>✖ have only letters,numbers,and special characters <br>✖ have no space`;
    emailP.style.color = "red";
}
})


let inputPassword = document.querySelector("#password");
let passwordP = document.querySelector(".password");
let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

inputPassword.addEventListener("input", ()=> {
let value = inputPassword.value;
let test = passwordRegex.test(value);
if(test) {
    passwordP.textContent = "✔Valid";
    passwordP.style.color = "green";
}else{
    passwordP.innerHTML = `✖ password must have at least 8 characters <br>✖ have no space`;
    passwordP.style.color = "red";
}
})


let inputConfirmPassword = document.querySelector("#confirmPassword");
let confirmPasswordP = document.querySelector(".confirmPassword");

function checkPasswordMatch(){
    if(inputConfirmPassword.value === ""){
        confirmPasswordP.textContent = "";
        return;
    }

    if(inputConfirmPassword.value === inputPassword.value){
        confirmPasswordP.textContent = "✔Passwords match";
        confirmPasswordP.style.color = "green";
    } else {
        confirmPasswordP.textContent = "✖Passwords do not match";
        confirmPasswordP.style.color = "red";
    }
}

inputConfirmPassword.addEventListener("input", checkPasswordMatch);
inputPassword.addEventListener("input", checkPasswordMatch);

let form = document.querySelector("form");

form.addEventListener("submit", function(e){
  e.preventDefault();

  if (passwordP.textContent === "✔Valid" &&
      confirmPasswordP.textContent.includes("match")) {
      
      window.location.href = "./Day12/index.html";
  }
});

