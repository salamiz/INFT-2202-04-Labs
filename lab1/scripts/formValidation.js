// Function to validate the entire form
function validateForm() {
    // Email Validation
    var email = document.getElementById('inputEmail4').value;
    if (!validateEmailAddressSimple(email)) {
        generalError.textContent = 'Invalid email. Must be in format xxx@xxx.com.';
        generalError.style.backgroundColor = 'red';
        return false;
    }
    
    // Redirect to home page on successful validation
    window.location.href = 'index.html'; 
    return false; // Prevent default form submission
}

// Clear error messages on form reset
document.getElementById('contact-form').onreset = function() {
    document.getElementById('generalError').textContent = '';
    document.getElementById('generalError').style.backgroundColor = 'transparent';
    // Clear other specific error fields as needed
};

 
/**
 * Validate the email address
 * @param {string} email    the email address to validate
 * @returns {boolean}        to indicate if the email is valid
 */
function validateEmailAddressSimple(emailString) {
    console.log('in ValidateEmailAddress');

    // check for @ sign
    let atSymbol = emailString.indexOf('@');
    if(atSymbol < 1) return false;

    let dot = emailString.indexOf('.');
    if(dot <= atSymbol + 2) return false;

    // check that the dot is not at the end
    if (dot === emailString.length - 1) return false;

    return true;
}
