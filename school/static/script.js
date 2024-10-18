document.getElementById('start-tour-btn').addEventListener('click', function() {
    alert('Tour started!');
    // You can add more functionality here to start the tour
});


document.getElementById('start-tour-btn').addEventListener('click', function() {
    alert('Tour started!');
    // You can add more functionality here to start the tour
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    alert('Signup successful!');
    // You can add more functionality here to handle the form submission
});

// Existing code for welcome and signup pages

document.getElementById('start-tour-btn').addEventListener('click', function() {
    alert('Tour started!');
    // You can add more functionality here to start the tour
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    alert('Signup successful!');
    // You can add more functionality here to handle the form submission
});

document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Add your sign-in logic here
    alert('Sign-in successful!');
});

// Existing code for welcome, signup, and signin pages

document.getElementById('start-tour-btn').addEventListener('click', function() {
    alert('Tour started!');
    // You can add more functionality here to start the tour
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    alert('Signup successful!');
    // You can add more functionality here to handle the form submission
});

document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Add your sign-in logic here
    alert('Sign-in successful!');
    window.location.href = 'home.html'; // Redirect to home page after successful sign-in
});