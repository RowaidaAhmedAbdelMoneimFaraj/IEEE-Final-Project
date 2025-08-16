const items = document.querySelectorAll('.menu-item');
const menuContainer = document.querySelector('.menu-container');
const detailsImg = document.getElementById('details-img');
const detailsDesc = document.getElementById('details-desc');
const detailsPrice = document.getElementById('details-price');

items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        if (detailsImg) detailsImg.src = item.getAttribute('data-img');
        if (detailsDesc) detailsDesc.textContent = item.getAttribute('data-desc');
        if (detailsPrice) detailsPrice.textContent = item.getAttribute('data-price');

        menuContainer.classList.add('blur'); 
        item.classList.add('active');
    });

    item.addEventListener('mouseleave', () => {
        menuContainer.classList.remove('blur');
        item.classList.remove('active');
    });
});


const starContainer = document.createElement('div');
starContainer.classList.add('background-stars');
document.body.prepend(starContainer);

for (let i = 0; i < 50; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  const size = Math.random() * 3 + 2 + 'px';
  star.style.width = size;
  star.style.height = size;
  const topPosition = Math.pow(Math.random(), 1.5) * 100;
  star.style.top = topPosition + '%';
  star.style.left = Math.random() * 100 + '%';
  starContainer.appendChild(star);
}
