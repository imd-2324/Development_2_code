//call toggle api when button is clicked

const buttons = document.querySelectorAll('a[data-id]');

buttons.forEach(button => {
    button.addEventListener('click', async (e) => {
        e.preventDefault();
    
        const id = button.getAttribute('data-id');
        const response = await fetch('/togglebutton', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        });
    
        const data = await response.json();
        if (data.error) {
            console.log(data.error);
        } else {
            if (data.button.status) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        }
    });
});