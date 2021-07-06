let email = document.getElementById("email");
let pwd = document.getElementById("pwd");

function loginValidation(){
    if(email.value==""){
        alert("Email cannot be empty");
        return false;
    }
    else if(pwd.value==""){
        alert("Password cannot be empty");
        return false;
    }
    else if(pwd.value.length<=8){
        alert("Password is too short");
        return false;
    }
    else{
        return true;
    }


}