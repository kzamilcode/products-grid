
 function changeColor(event) {
    //reset and remove active class first
    document.querySelectorAll('span.active').forEach(function(item) {
      item.classList.remove('active')
    })
    //add active Class to selected menu item
    event.target.classList.add('active')
  }

/***** */



const color = document.getElementById('color');
const bg = document.querySelector('.bg');

color.addEventListener('input', ()=>{
  let colValue = color.value;
  bg.style.background = colValue;
});

const colorone = document.getElementById('colorone');
const bgone = document.querySelector('.bgone');

colorone.addEventListener('input', ()=>{
  let colValue = colorone.value;
  bgone.style.background = colValue;
});

const colorthree = document.getElementById('colorthree');
const bgthree = document.querySelector('.bgthree');

colorthree.addEventListener('input', ()=>{
  let colValue = colorthree.value;
  bgthree.style.background = colValue;
});



/**** */
