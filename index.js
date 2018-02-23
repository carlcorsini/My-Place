document.addEventListener('DOMContentLoaded', function() {
  remember()
  let form = document.querySelector('.website-form')
  let exampleButton = document.querySelector('.example-button')
  form.addEventListener('submit', changes);
  exampleButton.addEventListener('click', example)

})


//example div
function example (event) {
  let bodyOptions = document.querySelector('.body-options')
  let headerOptions = document.querySelector('.header-options')
  let primaryThemeOptions = document.querySelector('.primary-theme-options')
  let secondaryThemeOptions = document.querySelector('.secondary-theme-options')
  let bodyValue = bodyOptions.value
  let primaryValue = primaryThemeOptions.value
  let secondaryValue = secondaryThemeOptions.value
  let headerValue = headerOptions.value
  let fontExample = document.querySelector('.font-example')
  let primaryDiv = document.querySelector('.font-example-div')
  let headerExample = document.querySelector('.header-example')
  let secondaryDiv = document.querySelector('.secondary-div')
  primaryDiv.id = primaryValue
  secondaryDiv.id = secondaryValue
  fontExample.id = bodyValue
  headerExample.id = headerValue
}

//store stuff
function changes (event) {
  let selectArray= document.querySelectorAll('select')
  let inputArray= document.querySelectorAll('input')
  inputArray.forEach(function(a) {
    localStorage.setItem(a.dataset.inputgetter, JSON.stringify(a.value))
  })
  selectArray.forEach(function(a) {
    localStorage.setItem(a.dataset.selectgetter, JSON.stringify(a.value))
  })
}

//remember stuff
function remember () {
  let inputArray = document.querySelectorAll('input')
  let selectArray = document.querySelectorAll('select')
  inputArray.forEach(function(a) {
    a.value = JSON.parse(localStorage.getItem(a.dataset.inputgetter)) || ''
  })
}
