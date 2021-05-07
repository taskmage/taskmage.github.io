const form = document.querySelector('form')

let wrong = document.getElementById('wrong')
let isValidate = false;
const regExpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
let submitButton = document.getElementById('sub-btn')


const validateEl = (el) => {
  if (el.name == 'email') {
    if (!regExpEmail.test(el.value) && el.value != "") {
      el.nextElementSibling.textContent = "Please provide a valid e-mail address"
      isValidate = false
      submitButton.disabled = true
    } 
    else if (el.value.split('.').pop() == 'co') {
      el.nextElementSibling.textContent = "We are not accepting subscriptions from Colombia emails"
      isValidate = false
      submitButton.disabled = true
    } 
     else {
      el.nextElementSibling.textContent = ""
      isValidate = true
      submitButton.disabled = false
    }
  }
}

for (let el of form.elements) {
  if (
    !el.classList.contains('check__input') && el.tagName != "BUTTON") {
    el.addEventListener('blur', () => {
      validateEl(el)
    })
  }
}

form.addEventListener("submit", (even) => {
  even.preventDefault()

  for (let el of form.elements) {
    if (!el.classList.contains('check__input') && el.tagName != "BUTTON") {
      if (el.value == "") {
        el.nextElementSibling.textContent = "Email address is required"
        wrong.textContent = "You must accept the terms and conditions"
        isValidate = false
      } else {
        el.nextElementSibling.textContent = ""
        wrong.textContent = ""
        isValidate = true
        document.location.assign('confirm.html')
      }
    }
  }
  if (isValidate) {
    if (form.querySelector('.check__input').checked) {
      submit()
      form.reset()
      wrong.textContent = ""
      isValidate = true
      document.location.assign('confirm.html')
    } 
    else {
      wrong.textContent = "You must accept the terms and conditions"
      isValidate = false
    }
  }
})