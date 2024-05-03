[...document.querySelectorAll('.seat:has(input)')].map(seat => {
  seat.addEventListener('click', (evt) => {
    evt.preventDefault();
    console.log(seat);
    console.log(seat.querySelector('input'));
    seat.querySelector('input').toggleAttribute('checked');
  })
});