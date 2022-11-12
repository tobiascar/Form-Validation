const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


//show error
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
//show success
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
//check required
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if (input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}
// Check Username and Password Length
function checkLength(input, min, max){
    if (input.value.length < min){
        showError(input, `${getFieldName(input)} must at least have ${min} characters`);
    } else if (input.value.lenght > max){
        showError(input, `${getFieldName(input)} maximum lenght is ${max} characters`);
    } else {
        showSuccess(input);
    }
}
// Check Password Match
function checkPswMatch(input1, input2){
    if (input1.value !== input2.value){
        showError(input2, 'Passwords do not match');
    }
}
// Check E-mail
function checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input)){
        showSuccess(input);
    } else {
        showError(input, 'E-mail is not valid');
    }
}
//get field name
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//Event listeners
form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 20);
    checkEmail(email);
    checkPswMatch(password, password2);
});