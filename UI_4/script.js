document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.event-card');
        
        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            card.style.display = title.includes(searchTerm) ? 'block' : 'none';
        });
    });

    // Add event listeners to action buttons
    document.querySelectorAll('.event-card').forEach(card => {
        const editBtn = card.querySelector('.edit');
        const viewBtn = card.querySelector('.view');
        const deleteBtn = card.querySelector('.delete');

        editBtn.addEventListener('click', function() {
            alert('Edit event');
        });

        viewBtn.addEventListener('click', function() {
            alert('View event');
        });

        deleteBtn.addEventListener('click', function() {
            if (confirm('Are you sure you want to delete this event?')) {
                card.remove();
            }
        });
    });

    // New button click handler
    const newBtn = document.querySelector('.new-btn');
    newBtn.addEventListener('click', function() {
        alert('New button clicked');
    });
});