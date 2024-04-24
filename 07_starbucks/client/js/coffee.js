const mok = document.getElementById('mok');
const coffee = document.getElementById('coffee');
const darkness = document.getElementById('darkness');
const darknessSlider = document.getElementById('darkness-slider');

darknessSlider.addEventListener('input', () => {
  const darkness = 100-darknessSlider.value;
  coffee.style.filter = `brightness(${darkness}%)`;
});

const sizes = [...document.form.size];
console.log(sizes);
let prev = 'tall';
sizes.map((size, i) => {
    size.addEventListener('change', function() {
        mok.classList.remove(prev)
        mok.classList.add(this.value);
        prev = this.value;        
    });
});