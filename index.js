document.addEventListener('DOMContentLoaded', function() {
  let form = document.querySelector(".website-form")
  let exampleButton = document.querySelector('.example-button')
  form.addEventListener('submit', changes);
  exampleButton.addEventListener('click', example)
})


function example (event) {
  let bodyOptions = document.querySelector(".body-options")
  let headerOptions = document.querySelector(".header-options")
  let primaryThemeOptions = document.querySelector(".primary-theme-options")
  let secondaryThemeOptions = document.querySelector(".secondary-theme-options")
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


function changes (event) {
  // options
  let primaryThemeOptions = document.querySelector(".primary-theme-options")
  let secondaryThemeOptions = document.querySelector(".secondary-theme-options")
  let ambienceOptions = document.querySelector(".ambience-options")
  let bodyOptions = document.querySelector(".body-options")
  let headerOptions = document.querySelector('.header-options')
  // text input
  let headerInput = document.querySelector('.header-input')
  let footerInput = document.querySelector('.footer-input')
  let img1Input = document.querySelector('.image1-input')
  let img2Input = document.querySelector('.image2-input')
  let img3Input = document.querySelector('.image3-input')
  let bio1Input = document.querySelector('.bio1-input')
  let bio2Input = document.querySelector('.bio2-input')
  let bio3Input = document.querySelector('.bio3-input')

    //theme options
      localStorage.setItem('primaryThemeOptions', JSON.stringify(primaryThemeOptions.value))
      localStorage.setItem('secondaryThemeOptions', JSON.stringify(secondaryThemeOptions.value))
    //font options
      localStorage.setItem('bodyOptions', JSON.stringify(bodyOptions.value))
      localStorage.setItem('headerOptions', JSON.stringify(headerOptions.value))
    //ambience options
      localStorage.setItem('ambienceOptions', JSON.stringify(ambienceOptions.value))
    //header & footer input
      localStorage.setItem('headerInput', JSON.stringify(headerInput.value))
      localStorage.setItem('footerInput', JSON.stringify(footerInput.value))
    //image input
      localStorage.setItem('image1Input', JSON.stringify(img1Input.value))
      localStorage.setItem('image2Input', JSON.stringify(img2Input.value))
      localStorage.setItem('image3Input', JSON.stringify(img3Input.value))

    //bio input
      localStorage.setItem('bio1Input', JSON.stringify(bio1Input.value))
      localStorage.setItem('bio2Input', JSON.stringify(bio2Input.value))
      localStorage.setItem('bio3Input', JSON.stringify(bio3Input.value))
}

  // const favorites = JSON.parse(localStorage.getItem('favorites'))||{};
  // localStorage.setItem('favorites', JSON.stringify(favorites));
