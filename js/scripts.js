/*Burger*/

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__link');

burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (el) {

  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  });


});

/*Search Form*/
document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-search-form').addEventListener('click', (e) => {
      document.getElementById('search-form').classList.add('search-form-show')
      document.getElementById('open-search-form').classList.add('hidden')
    });

    document.getElementById('search-form-close').addEventListener('click', (e) => {
      document.getElementById('search-form').classList.remove('search-form-show')
      document.getElementById('open-search-form').classList.remove('hidden')


    });

    document.getElementById('search-form').addEventListener('submit', (e) => {
      e.preventDefault()
    });
});

/*Tabs*/

let tabsBtn = document.querySelectorAll('.how__btn-slide');
let tabsItem = document.querySelectorAll('.tabs__item');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('how__btn--active')});
    e.currentTarget.classList.add('how__btn--active');

    tabsItem.forEach(function(element){ element.classList.remove('tabs__item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs__item--active');
  });
});
