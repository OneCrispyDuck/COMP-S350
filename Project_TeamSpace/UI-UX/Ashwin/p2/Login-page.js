
document.getElementById('loginForm').onsubmit = function(event) {
    event.preventDefault(); 
    
    const email = document.getElementById('emailLogin').value;
    const password = document.getElementById('passwordLogin').value;
    
    if (email && password) {
        // Perform actual form submission here if needed
        // Example: using AJAX or similar to send data to the server
        window.location.href = '../p3/page3.html';  // Redirect after validation
    } else {
        alert('Please input all fields!');
    }
};

const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signUp');

signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="flex";
})
signInButton.addEventListener('click', function(){
    signInForm.style.display="flex";
    signUpForm.style.display="none";
})

