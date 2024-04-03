// First Name
const firstNameError = document.getElementById('first-name-error');
const firstName = document.getElementById('firstName');
const nameErroIcon = document.getElementById('nameErrorIcon');
// Last Name
const lastNameError = document.getElementById('last-name-error');
const lastName = document.getElementById('lastName');
const lastNameErrorIcon = document.getElementById('lastNameErrorIcon');
// Email
const emailError = document.getElementById('email-error');
const email = document.getElementById('email');
const emailErrorIcon = document.getElementById('emailErrorIcon');
// Password
const passwordError = document.getElementById('password-error');
const password = document.getElementById('password');
const passwordErrorIcon = document.getElementById('passwordErrorIcon');

function validateFirstName(){
    if(firstName.value.length == 0){
        firstNameError.innerHTML = "First Name cannot be empty";
        nameErroIcon.innerHTML = "<svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><circle fill='#FF7979' cx='12' cy='12' r='12'/><rect fill='#FFF' x='11' y='6' width='2' height='9' rx='1'/><rect fill='#FFF' x='11' y='17' width='2' height='2' rx='1'/></g></svg>"
        firstName.style.border = '2px solid hsl(0, 100%, 74%)';
        firstName.style.borderRadius = '3px';
        firstName.placeholder = '';
        return false;
    }
    firstNameError.innerHTML = "";
    nameErroIcon.innerHTML = "";
    return true;
}


function validateLastName(){
    if(lastName.value.length == 0){
        lastNameError.innerHTML = "Last Name cannot be empty";
        lastNameErrorIcon.innerHTML = "<svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><circle fill='#FF7979' cx='12' cy='12' r='12'/><rect fill='#FFF' x='11' y='6' width='2' height='9' rx='1'/><rect fill='#FFF' x='11' y='17' width='2' height='2' rx='1'/></g></svg>"
        lastName.style.border = '2px solid hsl(0, 100%, 74%)';
        lastName.style.borderRadius = '3px';
        lastName.placeholder = '';
        return false;
    }
    lastNameError.innerHTML = "";
    lastNameErrorIcon.innerHTML = "";
    return true;
}

function validateEmail(){
    if(email.value.length == 0){
        emailError.innerHTML = "Look like this is not an email ";
        emailErrorIcon.innerHTML = "<svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><circle fill='#FF7979' cx='12' cy='12' r='12'/><rect fill='#FFF' x='11' y='6' width='2' height='9' rx='1'/><rect fill='#FFF' x='11' y='17' width='2' height='2' rx='1'/></g></svg>"
        email.style.border = '2px solid hsl(0, 100%, 74%)';
        email.style.borderRadius = '3px';
        email.placeholder = 'email@example/com';
        email.classList.add('red-placeholder');
        return false;
    }
    emailError.innerHTML = "";
    emailErrorIcon.innerHTML = "";
    return true;
}

function validatePassword(){
    if(password.value.length == 0){
        passwordError.innerHTML = "Password cannot be empty";
        passwordErrorIcon.innerHTML = "<svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><circle fill='#FF7979' cx='12' cy='12' r='12'/><rect fill='#FFF' x='11' y='6' width='2' height='9' rx='1'/><rect fill='#FFF' x='11' y='17' width='2' height='2' rx='1'/></g></svg>"
        password.style.border = '2px solid hsl(0, 100%, 74%)';
        password.style.borderRadius = '3px';
        password.placeholder = '';
        return false;
    }
    passwordError.innerHTML = "";
    passwordErrorIcon.innerHTML = "";
    return true;
}

function validateForm(event){
    
    if(!validateFirstName() || !validateLastName() || !validateEmail() || !validatePassword()){
        validateFirstName();
        validateLastName();
        validateEmail();
        validatePassword();
        return false;
    }
}