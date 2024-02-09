const btn= document.getElementById('btn');
const color= document.querySelector('.color');

btn.addEventListener('click',()=>
{
  const red= Math.floor(Math.random()*255);
  const blue= Math.floor(Math.random()*255);
  const green= Math.floor(Math.random()*255);
  
   const rgbColor= `rgb(${red},${blue},${green})`;

  document.body.style.backgroundColor=rgbColor;
  
  color.textContent=rgbColor;

});