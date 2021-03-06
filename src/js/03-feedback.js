import throttle from "lodash.throttle"

const refs = {
    form: document.querySelector('form'),
    button: document.querySelector('button'),
    email: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea')
}

const formData = {
    email: '',
    message: ''
}




refs.form.addEventListener('input', throttle(updateLocalStorage, 500))
refs.form.addEventListener('submit', onButtonSubmit)

function updateLocalStorage (evt)  {
    formData[evt.target.name] = evt.target.value
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}

function onButtonSubmit (evt) {
    evt.preventDefault();
    evt.currentTarget.reset()
    localStorage.removeItem("feedback-form-state");
    console.log(formData)
    formData.email = '';
    formData.message = '';
}

function populateEmail() {
    const savedEmail = window.localStorage.getItem("feedback-form-state")
    const parsedEmail = JSON.parse(savedEmail)
    if(parsedEmail && Object.values(parsedEmail) !== []) {
        refs.email.value = parsedEmail.email
        formData.email = parsedEmail.email;
   }   
    
} 
 

function populateMessage() {
    const savedMessage = window.localStorage.getItem("feedback-form-state")
    const parsedMessage = JSON.parse(savedMessage)
    if(parsedMessage && Object.values(parsedMessage) !== []) {
        refs.textarea.value = parsedMessage.message
        formData.message = parsedMessage.message;
    }   
}
 

populateEmail()
populateMessage()

 
