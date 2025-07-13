document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    
    // Display in card
    document.getElementById('cardName').textContent = name;
    document.getElementById('cardAge').textContent = age;
    
    // Show the card
    document.getElementById('userCard').classList.remove('hidden');
    
    // Reset form
    this.reset();
});