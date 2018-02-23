document.addEventListener('DOMContentLoaded', function() {
  //pull from storage
  let primaryThemeStorage = JSON.parse(localStorage.getItem('primaryThemeOptions'));
  let secondaryThemeStorage = JSON.parse(localStorage.getItem('secondaryThemeOptions'));
  let headerStorage = JSON.parse(localStorage.getItem('headerOptions'));
  let bodyStorage = JSON.parse(localStorage.getItem('bodyOptions'));
  let ambienceStorage = JSON.parse(localStorage.getItem('ambienceOptions'));
  let headerOutput = JSON.parse(localStorage.getItem('headerInput'));
  let footerOutput = JSON.parse(localStorage.getItem('footerInput'));
  let image1Output = JSON.parse(localStorage.getItem('image1Input'))
  let image2Output = JSON.parse(localStorage.getItem('image2Input'))
  let image3Output = JSON.parse(localStorage.getItem('image3Input'))
  let bio1Output = JSON.parse(localStorage.getItem('bio1Input'))
  let bio2Output = JSON.parse(localStorage.getItem('bio2Input'))
  let bio3Output = JSON.parse(localStorage.getItem('bio3Input'))
  // indentify elements
  let row1 = document.querySelector('.row1')
  let row2 = document.querySelector('.row2')
  let rowRight = document.querySelector('.row-right')
  let myContainer = document.querySelector('.my-container');
  let header = document.querySelector('.header')
  let footer = document.querySelector('.footer')
  let audio = document.querySelector('.audio-source')
  let img1 = document.querySelector('.img1')
  let img2 = document.querySelector('.img2')
  let img3 = document.querySelector('.img3')
  let bio1 = document.querySelector('.bio1')
  let bio2 = document.querySelector('.bio2')
  let bio3 = document.querySelector('.bio3')
  let body = document.querySelector('.body-my-site')
  // update DOM
      myContainer.classList.add(primaryThemeStorage)
      body.classList.add(primaryThemeStorage)
      row1.classList.add(bodyStorage, secondaryThemeStorage)
      row2.classList.add(bodyStorage, secondaryThemeStorage)
      rowRight.classList.add(bodyStorage, secondaryThemeStorage)
      header.classList.add(headerStorage, primaryThemeStorage)
      footer.classList.add(headerStorage, secondaryThemeStorage)
      header.innerHTML = headerOutput
      footer.innerHTML = footerOutput
      audio.src = ambienceStorage
      img1.src = image1Output || "images/placeholder.png"
      img2.src = image2Output || "images/placeholder.png"
      img3.src = image3Output || "images/placeholder.png"
      bio1.innerHTML = bio1Output
      bio2.innerHTML = bio2Output
      bio3.innerHTML = bio3Output
})
