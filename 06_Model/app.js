// select modal-btn, modal-overlay and close-btn
//listen for click events on modal-btn and close-btn
//when user clicks modal-btn and .OPEN-MODAL to modal-overlay
//when user clicks close-btn remove .OPEN-MODAL form modal-overlay 

const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', () => {
  modalOverlay.classList.add('open-modal');
});

closeBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('open-modal');
});

