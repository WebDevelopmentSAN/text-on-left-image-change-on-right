const menuItems = document.querySelectorAll('.menu li');
const image = document.querySelector('.content img');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menuItems.forEach(item => item.classList.remove('active'));
    item.classList.add('active');
    const imagePath = item.getAttribute('data-image');
    image.setAttribute('src', imagePath);
  });
});
