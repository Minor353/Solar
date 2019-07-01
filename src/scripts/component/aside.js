module.exports = function () {
  const burgerAside = document.querySelector('.ham');
  const aside = document.querySelector('.aside');
  const asideCross = document.querySelector('.aside_cross');

  if (aside) {
    burgerAside.addEventListener('click', function () {
      aside.classList.add('aside--active');
      burgerAside.classList.remove('active');
    });
    asideCross.addEventListener('click', function () {
      aside.classList.remove('aside--active');
    })
  }
}