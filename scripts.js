// This is a javascript for the homepage
document.addEventListener('DOMContentLoaded', function() {

    // Prompt user to enter their name
    let indexHeading = document.querySelector('#greeting');
    function setUserName() {
        let userName = prompt('Please enter your name.');
        // Avoid null value
        if (!userName) {
            setUserName();
        } else {
            localStorage.setItem('name', userName);
            indexHeading.textContent = `Welcome to my first webpage, ${userName}!`;
        }
    }

    // Reuse the user name (cookie)
    // if first time visit -> call the setUserName function
    if (!localStorage.getItem('name')) {
        setUserName();
    } else {
        let storedName = localStorage.getItem('name');
        indexHeading.textContent = `Welcome to my first webpage, ${storedName}!`;
    }

    // Changing name
    let indexButton = document.querySelector('#changeName');
    indexButton.onclick = function() {
        setUserName();
    }
});