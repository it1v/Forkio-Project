const onSvg = document.querySelector('.burger');
const offSvg = document.querySelector('.off');
const headerNav = document.querySelector('.burger_nav');
let isSvgVisible = true;

const toggleMenu = () => {
  if (isSvgVisible) {
    onSvg.style.display = 'none';
    offSvg.style.display = 'block';
    headerNav.style.display = 'flex';
  } else {
    offSvg.style.display = 'none';
    onSvg.style.display = 'flex';
    headerNav.style.display = 'none';
  }
  isSvgVisible = !isSvgVisible;
};

onSvg.addEventListener('click', toggleMenu);
offSvg.addEventListener('click', toggleMenu);