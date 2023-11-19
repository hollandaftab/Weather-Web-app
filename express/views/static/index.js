let hamburger = document.querySelector('.nav__toggle');
const menu = document.getElementById('menu');
let startX;
let currentX = 0;
let isDragging = false;

hamburger.addEventListener('click', () => {
  currentX = 0; // Reset the translation to 0
  menu.style.transform = `translateX(${currentX}px)`;
});

menu.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

menu.addEventListener('touchmove', (e) => {
  if (!isDragging) return;

  const diffX = e.touches[0].clientX - startX;
  currentX = Math.min(Math.max(currentX + diffX, -menu.offsetWidth), 0);
  startX = e.touches[0].clientX;

  menu.style.transform = `translateX(${currentX}px)`;
});

menu.addEventListener('touchend', () => {
  isDragging = false;

  if (currentX < -menu.offsetWidth / 30) {
    currentX = -menu.offsetWidth;
  } else {
    currentX = 0;
  }

  menu.style.transform = `translateX(${currentX}px)`;
});




/*=============== For Changin Color of Control Buttons ===============*/
const airConditionerButtons = document.querySelectorAll('.control__btn__child');

const checkboxes = document.querySelectorAll('.control__btn__child input[type="checkbox"]');

checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener('click', function() {
    const button = airConditionerButtons[index];
    const connectivity = button.querySelector('.connectivity');
    const bgChildDiv = button.querySelector('.bg__child__div');
    const pathIcons = button.querySelectorAll('.path__icon');

    if (this.checked) {
      button.style.backgroundColor = '#1BABFC';
      bgChildDiv.style.backgroundColor = '#ffff';

      pathIcons.forEach(pathIcon =>{

        pathIcon.style.fill = 'black';
      })
      connectivity.textContent = 'Connected';
    } else {
      button.style.backgroundColor = '#1BABFC';
      button.style.background = 'rgba(255, 255, 255, 0.13)';
      button.style.boxShadow = '0px 4px 10px 0px rgba(0, 0, 0, 0.05)';
      bgChildDiv.style.backgroundColor = '#0A153E';
      pathIcons.forEach(pathIcon => {
        pathIcon.style.fill = 'white';
      });
      connectivity.textContent = 'Not Connected';
    }
  });
});






// let buttons = document.querySelectorAll(".btn");



// checkbox.addEventListener('change', function() {
//   if (this.checked) {
//     airConditioner.style.backgroundColor = '#1BABFC';
//     bg__child__div.style.backgroundColor = '#ffff';
//     path__icon.style.fill = 'black';
//     connectivity.textContent = 'Connected';
//   } else {
    // airConditioner.style.backgroundColor = '#1BABFC';
    // airConditioner.style.background = 'rgba(255, 255, 255, 0.13)';
    // airConditioner.style.boxShadow = '0px 4px 10px 0px rgba(0, 0, 0, 0.05)';
    // bg__child__div.style.backgroundColor = '#0A153E';
    // path__icon.style.fill = 'white';
    // connectivity.textContent = 'Not Connected';
//   }
// });

/*=============== For Changin Color of Control Buttons ===============*/







