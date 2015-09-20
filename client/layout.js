Template.layout.onRendered(function() {
    console.log("Hi Ken");
    var loginButtons = $("#login-buttons-slack, #login-buttons-logout, .text-besides-image .sign-in-text-slack");
    if (loginButtons) {
        // loginButtons.removeClass("login-button single-login-button").addClass("waves-effect waves-light btn");
        loginButtons.addClass("waves-effect waves-light light-blue darken-4 btn");
    }
    var loginIcon = $("#login-buttons-image-slack");
    if (loginIcon) {
        loginIcon.remove();
    }
    $('<i class="material-icons left">cloud</i>').insertBefore("span.text-besides-image.sign-in-text-slack");

});
