const container = document.querySelector('.main');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const gotoTop = document.querySelector('.gotoTop');
const contents = document.querySelectorAll('.contents');
const firstTop = contents[0].offsetTop;
const secondTop = contents[1].offsetTop;
const thirdTop = contents[2].offsetTop;
const maintop = container.offsetTop;
btn1.onclick = function () {
  window.scroll({ top: firstTop, behavior: 'smooth' });
};
btn2.onclick = function () {
  window.scroll({ top: secondTop, behavior: 'smooth' });
};
btn3.onclick = function () {
  window.scroll({ top: thirdTop, behavior: 'smooth' });
};
gotoTop.onclick = function () {
  window.scroll({ top: maintop, behavior: 'smooth' });
};
