   
   
   // Function to handle form submission
   document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get form values
    var name = document.querySelector('input[name="name"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var phone = document.querySelector('input[name="phone"]').value;
    var projectTitle = document.querySelector('input[name="projectTitle"]').value;
    var education = document.querySelector('select[name="education"]').value;
    var message = document.querySelector('textarea[name="message"]').value;

    // Simple validation
    if (!name || !email || !phone || !projectTitle || !education || !message) {
        alert('Please fill out all fields.');
    } else {
        alert('Your request has been submitted. We will be in touch soon.');
    }
});

