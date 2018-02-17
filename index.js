document.addEventListener('DOMContentLoaded', function() {
  let form = document.querySelector(".website-form")
  let themeOptions = document.querySelector(".theme-options")
  let ambienceOptions = document.querySelector(".ambience-options")
  let fillIn = document.querySelector(".fill-in")
  form.addEventListener('submit', changes);
  // deliveryRadio.addEventListener('click', displayForm);
  // pickupRadio.addEventListener('click', hideForm)
  // console.log(themeOptions[1])
  let myContainer = document.getElementsByClassName('my-container')
  // console.log(myContainer);
})


function changes (event) {
  // event.preventDefault()
  let themeOptions = document.querySelector(".theme-options")
  let myContainer = document.getElementsByClassName('my-container')
  console.log(myContainer)
  for (i = 0; i < themeOptions.length; i++) {
    if (themeOptions[i].value === 'blue') {
      myContainer.classList.add('blue')
    }
  }
}
