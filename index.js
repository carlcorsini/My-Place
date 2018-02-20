document.addEventListener('DOMContentLoaded', function() {
  let form = document.querySelector(".website-form")
  let primaryThemeOptions = document.querySelector(".primary-theme-options")
  let ambienceOptions = document.querySelector(".ambience-options")
  let fontOptions = document.querySelector(".font-options")
  let myContainer = document.getElementsByClassName('my-container')
  form.addEventListener('submit', changes);
  let exampleButton = document.querySelector('.example-button')
  exampleButton.addEventListener('click', example)
})


function example (event) {
  let bodyOptions = document.querySelector(".body-options")
  let headerOptions = document.querySelector(".header-options")
  let primaryThemeOptions = document.querySelector(".primary-theme-options")
  let bodyValue = bodyOptions.value
  let themeValue = primaryThemeOptions.value
  let headerValue = headerOptions.value
  let fontExample = document.querySelector('.font-example')
  let fontDiv = document.querySelector('.font-example-div')
  let headerExample = document.querySelector('.header-example')
  fontDiv.id = themeValue
  fontExample.id = bodyValue
  headerExample.id = headerValue
}


function changes (event) {
  // event.preventDefault()
  let myContainer = document.getElementsByClassName('my-container')
  let primaryThemeOptions = document.querySelector(".primary-theme-options")
  let secondaryThemeOptions = document.querySelector(".secondary-theme-options")
  let ambienceOptions = document.querySelector(".ambience-options")
  let bodyOptions = document.querySelector(".body-options")
  let headerOptions = document.querySelector('.header-options')
    //theme options
      localStorage.setItem('primaryThemeOptions', JSON.stringify(primaryThemeOptions.value))
      localStorage.setItem('secondaryThemeOptions', JSON.stringify(secondaryThemeOptions.value))

    //font options
      localStorage.setItem('bodyOptions', JSON.stringify(bodyOptions.value))
      localStorage.setItem('headerOptions', JSON.stringify(headerOptions.value))
    //ambience options



}

  // const favorites = JSON.parse(localStorage.getItem('favorites'))||{};
  // localStorage.setItem('favorites', JSON.stringify(favorites));
