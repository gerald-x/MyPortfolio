$(document).ready(function() {
    $('.nav-icon').click(function(e) {
        e.preventDefault();
        $('.nav-links').toggleClass('nav-show');
    });

});

$('#submitBtn').click(function(event) {
    var firstName = $('.grid-input').val();
    var lastName = $('.grid-lastInput').val();

    var email = 'geraldokolodc@gmail.com';
    var subject = firstName + " " + lastName + " " + $('#emailSubject').val();
    var emailBody = $('textarea').val();
    document.location = "mailto:" + email + "?subject=" + subject + "&body=" + emailBody;
});