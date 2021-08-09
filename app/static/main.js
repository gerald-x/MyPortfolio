$(document).ready(function() {
    $('.nav-icon').click(function(e) {
        e.preventDefault();
        $('.nav-links').toggleClass('nav-show');
    });

    var submit = document.getElementById('submitBtn')
    if (submit) {
        var firstName = $('.grid-input').val();
        var lastName = $('.grid-lastInput').val();

        var email = 'geraldokolodc@gmail.com';
        var subject = "From: " + firstName + " " + lastName + "   Title: " + $('#emailSubject').val();
        var emailBody = $('textarea').val();
        document.location = "mailto:" + email + "?subject=" + subject + "&body=" + emailBody;
    }
});;