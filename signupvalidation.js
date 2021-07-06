let email = document.getElementById("email");
let emailerror = document.getElementById("emailspan"); 
let phone = document.getElementById("phone");
let phoneerror = document.getElementById("phonespan");
let pwd = document.getElementById("pwd");
let repwd = document.getElementById("repwd");
let pwderror = document.getElementById("pwdspan");
let repwderror = document.getElementById("repwdspan");



function signupValidation(){

    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let pwddecimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(!regexp.test(email.value)){
        emailerror.innerHTML = "Invalid Email";
        emailerror.style.color = "red";
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
    else{
        return true;
    }

    


}

