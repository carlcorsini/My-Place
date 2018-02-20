document.addEventListener('DOMContentLoaded', function() {
  let primaryThemeStorage = JSON.parse(localStorage.getItem('primaryThemeOptions'));
  let secondaryThemeStorage = JSON.parse(localStorage.getItem('secondaryThemeOptions'));
  let ambienceStorage = JSON.parse(localStorage.getItem('primaryThemeOptions'));
  let headerStorage = JSON.parse(localStorage.getItem('headerOptions'));
  let bodyStorage = JSON.parse(localStorage.getItem('bodyOptions'));
  let row1 = document.querySelector('.row1')
  let row2 = document.querySelector('.row2')
  let rowRight = document.querySelector('.row-right')
  let myContainer = document.querySelector('.my-container');
  let header = document.querySelector('.header')
      myContainer.classList.add(primaryThemeStorage)
      row1.classList.add(bodyStorage, secondaryThemeStorage)
      row2.classList.add(bodyStorage, secondaryThemeStorage)
      rowRight.classList.add(bodyStorage, secondaryThemeStorage)
      header.classList.add(headerStorage)
})
