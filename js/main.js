// site nav buttons
const elsNavButton = document.querySelectorAll('.js-nav-button')
// site nav
const elSiteNav = document.querySelector('.site-nav')

// site-nav toggler function
function siteNavOpenerAndCloser (evt) {

  console.log(evt.target.matches('.js-nav-button-closer')); 

  if (evt.target.matches('.js-nav-button-closer') && elSiteNav.matches('.site-nav--open')) {
    elSiteNav.classList.remove('site-nav--open')
  } else {
    elSiteNav.classList.add('site-nav--open')
  }

}

if (elsNavButton.length > 0) {

  elsNavButton.forEach(btn => {
    btn.addEventListener('click', siteNavOpenerAndCloser)
  })

}
