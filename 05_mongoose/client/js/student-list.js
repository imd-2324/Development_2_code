const deleteForm = document.querySelectorAll('form');

deleteForm.forEach((form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // Get the student ID from the form's data-id attribute
        const id = form.children[0].value;
        // Ask for confirmation before deleting
        if (confirm('Are you sure you want to delete this student?')) {
            // If user confirms, proceed with deletion
            fetch(`http://localhost:4000/students/destroy/${id}`, {
                method: 'DELETE',
            })
            .then(() => {
             
            window.location.reload(); // Reload the page after successful deletion
                
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle fetch error
            });
        }
    });
});