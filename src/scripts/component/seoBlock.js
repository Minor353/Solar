module.exports = function () {
  const seoBlock = document.querySelector('.seo-text_content');
  const seoBtn = document.querySelector('.seo-text_btn');

  seoBtn.addEventListener('click', function (e) {
    e.preventDefault();
    seoBlock.classList.toggle('seo-text_content--active');
  })
}