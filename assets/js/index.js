function submitForm(event) {
    event.preventDefault(); 

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email === '' || password === '') {
        alert('Both fields must be filled out before submitting.');
        return;
    }

    console.log('Email:', email);
    console.log('Password:', password);
}
