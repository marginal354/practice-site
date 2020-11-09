"use strict";

function to_top(t) {
  let top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
  if (top > 0) {
    window.scrollBy(0, -50);
    t = setTimeout('to_top()', 10);
  } else clearTimeout(t);
  return false;
}
const btnToTop = document.querySelector('.btn-scroll');
btnToTop.addEventListener('click', to_top);


function showBtnToTop() {
  btnToTop.hidden = true;
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      btnToTop.hidden = false;
    } else {
      btnToTop.hidden = true;
    }
  });
}
showBtnToTop();

function validationEmail() {
  const formSubmit = document.querySelector('form-submit');
  if (formSubmit) {
    formSubmit.addEventListener('click', () => {
      const formEmail = document.querySelector('form-email').value;
      const regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (regx.text(formEmail)) {
        return true;
      } else {
        return false;
      }
    });
  }
}
validationEmail();


function sortingCats() {
  const btnSortingPrice = document.querySelector('.cat-section-sort__btn--price');
  let toggle = false;
  btnSortingPrice.addEventListener('click', () => {
    const items = document.querySelectorAll('.cat-item');
    const parent = document.querySelector('.cat-section');
    let SortElements = new Object();
    items.forEach(function (item, indx) {
      let itemValue = parseInt(item.querySelector('.cat-item__price').textContent.replace('руб', '').replace(/\s+/g, ''));
      SortElements[itemValue] = { 'element': item, 'index': indx };
    });
    let keys = Object.keys(SortElements);
    function compareNumeric1(a, b) {
      a = parseInt(a);
      b = parseInt(b);
      if (a < b) return 1;
      if (a > b) return -1;
    }
    function compareNumeric2(a, b) {
      a = parseInt(a);
      b = parseInt(b);
      if (a > b) return 1;
      if (a < b) return -1;
    }
    if (toggle === false) {
      keys.sort(compareNumeric1);
      toggle = !toggle;
    } else {
      keys.sort(compareNumeric2);
      toggle = !toggle;
    }

    keys.map(function (key, indx) {
      parent.insertAdjacentElement('beforeend', SortElements[key]['element']);
      SortElements[key]['index'] = indx;
    });
    return toggle;
  }, toggle);
}
sortingCats();
