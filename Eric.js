function drop() {
  const drop = document.querySelector('.cnt')
  drop.classList.toggle('show')
  drop.style.transition = 'width 3s'
}

function dark() {
  let element = document.body
  element.classList.toggle('dark-mode')
  document.querySelector('.header').classList.toggle('dark-mode')
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('darkMode', 'enabled')
  } else {
    localStorage.setItem('darkMode', 'disabled')
  }
}
if (localStorage.getItem('darkMode') == 'enabled') {
  document.body.classList.add('dark-mode')
  document.querySelector('.header').classList.add('dark-mode')
}

function closeNav() {
  let z = document.querySelector('.cnt')
  z.classList.toggle('show')
}

function openLink(evt, linkName) {
  let content = document.getElementsByClassName('hidden')
  for (i = 0; i < content.length; i++) {
    content[i].style.display = 'none'
  }
  let navLinks = document.getElementsByClassName('nav-links')
  for (i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.add('active')
  }

  document.getElementById(linkName).style.display = 'block'
  evt.currentTarget.className += 'active'
}

function colorText() {
  let colorer = document.getElementById('txtcolor1').value
  let p = document.getElementsByTagName('p')
  for (i = 0; i < p.length; i++) {
    p[i].style.color = colorer
  }
  let span = document.getElementsByTagName('h4')
  for (i = 0; i < span.length; i++) {
    span[i].style.color = colorer
  }
}

function setbg() {
  const bgg = document.getElementById('bgcolor').value
  document.body.style.backgroundColor = bgg
  document.querySelector('.header').style.backgroundColor = bgg
}

window.onload = () => {
  document.getElementById('home').style.display = 'block'
  document.body.style.transition = 'all 3s ease-in-out'
}

function display() {
  let pan = document.querySelector('.dwn')
  pan.classList.toggle('shine')
  let pane = document.querySelector('.pane')
  if (pane.style.display === 'block') {
    pane.style.display = 'none'
  } else {
    pane.style.display = 'block'
  }
}

