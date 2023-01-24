// const usernameEl = document.getElementById('name');
// const emailEl = document.querySelector('#email');
// const messagesEl = document.querySelector('#message');
// const subjectEl = document.querySelector('#subject');



// const form = document.querySelector('#gform');


// const checkUsername = () => {

//     let valid = false;

//     const min = 3,
//         max = 25;

//     const username = usernameEl.value.trim();

//     const element =document.getElementById('name');

//     if (!isRequired(username)) {
//         showError(usernameEl, 'Username cannot be blank.');
//         element.classList.add('error');
//     } else if (!isBetween(username.length, min, max)) {
//         showError(usernameEl, `Username must be between ${min} and ${max} characters.`)
//         element.classList.add('error');
//     } else {
//         showSuccess(usernameEl);
//         valid = true;
        
//         element.classList.add('success')
//     }
    
//     return valid;
// };


// const checkEmail = () => {
//     console.log("check email");
//     let valid = false;
//     const email = emailEl.value.trim();
//     if (!isRequired(email)) {
//         showError(emailEl, 'Email cannot be blank.');
//     } else if (!isEmailValid(email)) {
//         showError(emailEl, 'Email is not valid.')
//     } else {
//         showSuccess(emailEl);
//         valid = true;
//     }
//     return valid;
// };

// const checkMessage = () => {
//     console.log("check message")
//     let valid = false;
//     const min = 3,
//         max = 25;

//     const message = messagesEl.value.trim();

//     if (!isRequired(message)) {
//         showError(messagesEl, 'Message cannot be blank.');
//     }  else if (!isBetween(message.length, min, max)) {
//         console.log("message between min and max")
//         showError(messagesEl, `Message must be between ${min} and ${max} characters.`)
    
//         showSuccess(messagesEl);
//         valid = true;
//     }

//     return valid;
// };


// const checkSubject = () => {
//     console.log("check subject")
//     let valid = false;
//     const min = 3=5,
//         max = 25;

//     const subject =subjectEl.value.trim();

//     if (!isRequired(subject)) {
//         showError(subjectEl, 'Message cannot be blank.');
//     }  else if (!isBetween(subject.length, min, max)) {
//         console.log("message between min and max")
//         showError(subjectEl, `Message must be between ${min} and ${max} characters.`)
    
//         showSuccess(subjectEl);
//         valid = true;
//     }

//     return valid;
// };


// const isEmailValid = (email) => {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
// };


// const isRequired = value => value === '' ? false : true;
// const isBetween = (length, min, max) => length < min || length > max ? false : true;


// const showError = (input, message) => {
//     // get the form-field element
//     const formField = input.parentElement;

//     // add the error class
//     formField.classList.remove('success');
//     formField.classList.add('error');

//     // show the error message
//     const error = formField.querySelector('small');
//     error.textContent = message;
// };

// const showSuccess = (input) => {
//     // get the form-field element
//     const formField = input.parentElement;


//     const element =document.getElementById('name');
//     element.classList.remove('error')
//     element.classList.add('success');

//     // remove the error class
//     formField.classList.remove('error');
//     formField.classList.add('success');

//     // hide the error message
//     const error = formField.querySelector('small');
//     error.textContent = '';
// }


// form.addEventListener('submit', function (e) {
//     // prevent the form from submitting
//     e.preventDefault();

//     // validate fields
//     let isUsernameValid = checkUsername(),
//         isEmailValid = checkEmail();
//         isMessageValid = checkMessage();
//         isSubjectValid = checkSubject();

//     let isFormValid = isUsernameValid &&
//         isEmailValid && isMessageValid&&isSubjectValid;
    

//     // submit to the server if the form is valid
//     if (isFormValid) {

//         $("#gform").submit((e)=>{
//             e.preventDefault()
//             $.ajax({
//                 url:"https://script.google.com/macros/s/AKfycbzKJGoHRa9gMzCi69k3jIAVBvNyzX82IcQ616sHvJeAdnrrh0EVVvx_YNIcTzm2fdXrqA/exec",
//                 data:$("#gform").serialize(),
//                 method:"post",
//                 success:function (response){
//                     alert("Form submitted successfully")
//                     window.location.reload()
//                 },
//                 error:function (err){
//                     alert("Something Error")
//                 }
//             })
//         })

//     }
//     else
//     {
//         alert("Something Error")

//     }
// });

// form.addEventListener('input',(e)=>{
//     switch (e.target.id) {
//         case 'name':
//             checkUsername();
//             break;
//         case 'email':
//             checkEmail();
//             break;
//         case 'message':
//             checkMessage();
//             break;
//         case 'subject':
//             checkSubject();
//             break;
//     }
// });




//---------------------------------------------------------------------------------------------------------


var errorName = document.getElementById('name')
var errorEmail = document.getElementById('email')
var errorPhonenumber = document.getElementById('mobile')
function validateName() {
    const name1 = document.getElementById('name').value;   
    if (name1 == "") {
        alert('please fill the fields')
        errorName.innerHTML = 'Enter your Name'
        return false
    }
    if (!name1.match(/^[a-zA-Z ]*$/)) {
        errorName.innerHTML = 'Number are not allowed'
        return false
    }
     if (name1.match(/^[ ]*$/)) {
        errorName.innerHTML = 'enter a valid name'
        return false
    }
    errorName.innerHTML = null
    return true
}
function validEmail() {
    const email1 = document.getElementById('email').value
    if (email1 == "") {
        errorEmail.innerHTML = "enter you email address"
        return false
    }
    if (!email1.match(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/)) {
        errorEmail.innerHTML = 'enter a proper email address'
        return false
    }
    errorEmail.innerHTML = null
    return true
}


 function validPhonenumber() {
    const mob = document.getElementById('mobile').value
    if (mob == "") {
        errorPhonenumber.innerHTML = "enter a phonenumber"
        return false
    }
    if(!mob.match(/^[0-9]{10}$/)){
        errorPhonenumber.innerHTML = "Enter valid phone number"
        return false
    }
    errorPhonenumber.innerHTML = null
    return true
}

    function check(){
          let validatearray =[!validateName() , !validEmail()  , !validPhonenumber()]

          return validatearray.every(validation)
         

    }



function validateForm() {
    if (!validateName() ,!validEmail() ,!validPhoneumber())      {
        return false
    }
    return true
}



// ----------------------------------------------------------------------------------------------------------




// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const password2 = document.getElementById('password2');

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     validateInputs();
// });

// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success')
// }

// const setSuccess = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// };

// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// const validateInputs = () => {
//     const usernameValue = username.value.trim();
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();
//     const password2Value = password2.value.trim();

//     if(usernameValue === '') {
//         setError(username, 'Username is required');
//     } else {
//         setSuccess(username);
//     }

//     if(emailValue === '') {
//         setError(email, 'Email is required');
//     } else if (!isValidEmail(emailValue)) {
//         setError(email, 'Provide a valid email address');
//     } else {
//         setSuccess(email);
//     }

//     if(passwordValue === '') {
//         setError(password, 'Password is required');
//     } else if (passwordValue.length < 8 ) {
//         setError(password, 'Password must be at least 8 character.')
//     } else {
//         setSuccess(password);
//     }

//     if(password2Value === '') {
//         setError(password2, 'Please confirm your password');
//     } else if (password2Value !== passwordValue) {
//         setError(password2, "Passwords doesn't match");
//     } else {
//         setSuccess(password2);
//     }



// };
