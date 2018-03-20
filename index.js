document.addEventListener('DOMContentLoaded', function() {
  remember()
  let form = document.querySelector('.website-form')
  let exampleButton = document.querySelector('.example-button')
  let randomButton = document.querySelector('.random-button')
  let styleArray = document.querySelectorAll(".styled")
  try {
  form.addEventListener('submit', changes);
} catch(err) {
  //test
}
  exampleButton.addEventListener('click', example)
  randomButton.addEventListener('click', random)
  styleArray.forEach(textBoxFocus)
  styleArray.forEach(textBoxBlur)
  })
  // blue text box on focus
  function textBoxFocus (a) {
    a.addEventListener('focus', function() {
    a.style.background='#e5fff3'
    })
  }
  // back to white on blur
  function textBoxBlur (a) {
    a.addEventListener('blur', function() {
    a.style.background='white'
  });
  }

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

// random integer function
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// randomize style elements
function random (event) {
  let primaryThemeOptions = document.querySelector('.primary-theme-options')
  let secondaryThemeOptions = document.querySelector('.secondary-theme-options')
  let bodyOptions = document.querySelector('.body-options')
  let headerOptions = document.querySelector('.header-options')
  primaryThemeOptions.value = primaryThemeOptions[getRandomInt(4)].value
  secondaryThemeOptions.value = secondaryThemeOptions[getRandomInt(4)].value
  bodyOptions.value = bodyOptions[getRandomInt(4)].value
  headerOptions.value = headerOptions[getRandomInt(4)].value
}

//store stuff
function changes (event) {
  let selectArray= document.querySelectorAll('select')
  let textArray= document.querySelectorAll('.textarea')
  textArray.forEach(function(a) {
    localStorage.setItem(a.dataset.textgetter, JSON.stringify(a.value))
  })
  selectArray.forEach(function(a) {
    localStorage.setItem(a.dataset.selectgetter, JSON.stringify(a.value))
  })
}

//remember stuff
function remember () {
  let textArray = document.querySelectorAll('.textarea')
  let selectArray = document.querySelectorAll('select')
  let selectOptions = document.querySelectorAll('option')
  let selected = selectOptions[0]
  textArray.forEach(function(a) {
    a.value = JSON.parse(localStorage.getItem(a.dataset.textgetter)) || ''
  })
  selectArray.forEach(function(a) {
    a.value = JSON.parse(localStorage.getItem(a.dataset.selectgetter)) || a[0].value
  })
}


// Add a text field (incomplete)
// var countBox =4;
// var boxName = 0;
// function addInput()
// {
//      var boxName="textBox"+countBox;
// document.getElementById('response').innerHTML+='<br/>Image ' + countBox + ' Address:<br><input type="url" data-textgetter="image3Input" class="textarea styled one-line" value="" name="styled-textarea"><br>Body ' + countBox + ': <br><textarea data-textgetter="bio3Input" class="textarea styled bio3-input" value="" name="styled-textarea"></textarea><br/>';
//      countBox += 1;
// }
