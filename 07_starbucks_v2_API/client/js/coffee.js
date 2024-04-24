const mok = document.getElementById('mok');
const coffee = document.getElementById('coffee');
const darkness = document.getElementById('darkness');
const darknessSlider = document.getElementById('darkness-slider');
const form = document.form;
const container = document.querySelector('.container');

darknessSlider.addEventListener('input', () => {
  const darkness = 100-darknessSlider.value;
  coffee.style.filter = `brightness(${darkness}%)`;
});

const sizes = [...document.form.size];
let prev = 'tall';
sizes.map((size, i) => {
    size.addEventListener('change', function() {
        mok.classList.remove(prev)
        mok.classList.add(this.value);
        prev = this.value;        
    });
});


form.addEventListener('submit', async (e) => {
  // prevent the form from submitting
  e.preventDefault();

  // hide form + loading message
  form.classList.add('hidden');
  const info = container.appendChild(document.createElement('div'));
  info.innerHTML = `
    <h2>We are sending your order</h2>
    <p>Please wait...</p>`;
  

  // send the form data to the server
  const formData = new FormData(form);
  const response = await fetch(form.action, {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  // get the response from the server
  const data = await response.json();

  // show the response to the user and reset the form
  form.reset();
  info.innerHTML = `
    <h2>Thank you for your order!</h2>
    <p>Your order has been placed. You are number ${data.number_of_waiting} in line.</p>
  `;

});

