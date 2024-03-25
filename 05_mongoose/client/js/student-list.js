const deleteForm = document.querySelectorAll('form');

deleteForm.forEach((form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // Get the student ID from the form's data-id attribute
        const id = form.children[0].value;
        // Ask for confirmation before deleting
        if (confirm('Are you sure you want to delete this student?')) {
            // If user confirms, proceed with deletion
            fetch(`http://localhost:3000/api/students/${id}`, {
                method: 'DELETE',
            })
            .then((response) => {
                if (response.ok) {
                    window.location.reload(); // Reload the page after successful deletion
                } else {
                    // Optionally handle unsuccessful deletion
                    console.error('Failed to delete student');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle fetch error
            });
        }
    });
});