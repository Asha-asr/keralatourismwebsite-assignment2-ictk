let email = document.getElementById("email");
let emailerror = document.getElementById("emailspan"); 
let phone = document.getElementById("phone");
let phoneerror = document.getElementById("phonespan");
let pwd = document.getElementById("pwd");
let repwd = document.getElementById("repwd");
let strengthBadge = document.getElementById('StrengthDisp');

let pwderror = document.getElementById("pwdspan");
let repwderror = document.getElementById("repwdspan");
let errorspan = document.getElementById("errorspan");
let timeout;
let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')

email.addEventListener("input", emailVerify, true );
phone.addEventListener("input", phoneVerify, true);
pwd.addEventListener('input', pwdVerify, true);
repwd.addEventListener('input',repwdVerify, true);

pwd.addEventListener("input", () => {
    strengthBadge.style.display = 'block';
    clearTimeout(timeout);
    timeout = setTimeout(() => StrengthChecker(pwd.value), 500);
    if(pwd.value.length !== 0) {
        strengthBadge.style.display != 'block';
    } else {
        strengthBadge.style.display = 'none';
    }
});

function signupValidation(){

    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let pwddecimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if(email.value == "" && phone.value == "" && pwd.value == "" && repwd.value == ""){
        errorspan.innerHTML = "Please enter all required fields";
        errorspan.style.color = "red";
        emailerror.innerHTML = "Email is Required";
        emailerror.style.color = "red";
        phoneerror.innerHTML = "Phone number is Required";
        phoneerror.style.color = "red";
        pwderror.innerHTML = "Passwords are required";
        pwderror.style.color = "red";
        repwderror.innerHTML = "Passwords are required";
        repwderror.style.color = "red";
        return false;
    }

    
    if(email.value == ""){
        emailerror.innerHTML = "Please enter email";
        emailerror.style.color = "red";
        email.focus();
        return false;
    }
     
    if(!regexp.test(email.value)){
        emailerror.innerHTML = "Invalid Email";
        emailerror.style.color = "red";
        return false;
      }

      if(phone.value == ""){
        phoneerror.innerHTML = "Please enter phone number";
        phoneerror.style.color = "red";
        phone.focus();
        return false;
      }
   
   if(!phoneno.test(phone.value)){
        phoneerror.innerHTML = "Invalid Phone No.";
        phoneerror.style.color = "red";
        return false;
    }

   if(phone.value.length < 10 || phone.value.length > 10){
        phoneerror.innerHTML = "Please Enter 10 Digit Phone No.";
        phoneerror.style.color = "red";
        return false;
    }

    if(pwd.value == ""){
        pwderror.innerHTML = "Password is required";
        pwderror.style.color = "red";
        pwd.focus()
        return false;
    }

    if(pwd.value == "" && repwd.value == ""){
        repwderror.innerHTML = "Please enter passwords";
        repwderror.style.color = "red";
        return false;
    }

    if(pwd.value != repwd.value){
        repwderror.innerHTML = "Passwords are not matching";
        repwderror.style.color = "red";
        return false;

    }

    if(!pwddecimal.test(repwd.value)){
        repwderror.innerHTML = "Please enter valid password";
        repwderror.style.color = "red";
        return false;
    }

       if(repwd.length < 8) {
        repwderror.innerHTML = "Password length must be atleast 8 characters";
        repwderror.style.color = "red";
        return false;

    }


}

function StrengthChecker(PasswordParameter) {
    if(strongPassword.test(pwd.value)) {
       strengthBadge.style.backgroundColor = "green";
       strengthBadge.innerHTML = 'Strong';
   } else if(mediumPassword.test(pwd.value)) {
       strengthBadge.style.backgroundColor = 'blue';
       strengthBadge.innerHTML = 'Medium';
   } else {
       strengthBadge.style.backgroundColor = 'red';
       strengthBadge.innerHTML = 'Weak';
       return false;
   }
}

function emailVerify(){
    if(email.value !== ""){
        emailerror.innerHTML = "";
        return true;
    }

}

function phoneVerify(){
    if(phone.value !== ""){
        phoneerror.innerHTML = "";
        return true;
      }
}

function pwdVerify(){
    if(pwd.value !== ""){
        pwderror.innerHTML = "";
        return true;
      }
   


}

function repwdVerify(){
    
        if(repwd.value !== ""){
        repwderror.innerHTML = "";
        return true;
      }

      if(pwd.value == repwd.value){
        repwderror.innerHTML = "Passwords are not matching";
        repwderror.style.color = "red";
        return true;

    }


}





