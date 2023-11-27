
$(document).ready(function () {
    $('#signupForm').submit(function (event) {
        event.preventDefault();

        var firstName = $('input[placeholder="First Name"]').val();
        var lastName = $('input[placeholder="Last Name"]').val();
        var mobileEmail = $('#mobileEmail').val();
        var newPassword = $('#newPassword').val();
        var selectedYear = $('#year').val();
        var genderChecked = $('input[name="gender"]:checked').val();

        if (firstName === '' || lastName === '') {
            alert('Please enter both First Name and Last Name.');
            return;
        }

        if (mobileEmail === '') {
            alert('Please enter mobile number or email.');
            return;
        }

        if (newPassword.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(newPassword)) {
            alert('Password must be at least 8 characters long and contain at least one special character.');
            return;
        }

        var currentYear = new Date().getFullYear();
        if (currentYear - selectedYear < 16) {
            alert('You must be at least 16 years old to sign up.');
            return;
        }

        if (!genderChecked) {
            alert('Please select your gender.');
            return;
        }

        alert('Sign up successful!');

        var redirectUrl = 'success_page.html' +
            '?firstName=' + encodeURIComponent(firstName) +
            '&lastName=' + encodeURIComponent(lastName) +
            '&mobileEmail=' + encodeURIComponent(mobileEmail) +
            '&newPassword=' + encodeURIComponent(newPassword) +
            '&selectedYear=' + encodeURIComponent(selectedYear) +
            '&gender=' + encodeURIComponent(genderChecked);

        // Open the success page in a new tab
        window.open(redirectUrl, 'success_page.html');
    });
});