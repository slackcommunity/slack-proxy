Template.emailEntry.onRendered(function() {
  console.log("Email Entry");
});

Template.emailEntry.helpers ({

});

Template.emailEntry.events ({
  'click #email-add-btn': function(e, t) {
    e.preventDefault();
    var thisBtn = $(e.currentTarget);
    var emailAddress = $('input#new-email-address.validate.valid').val();
    if (!emailAddress) {return false};
    check(emailAddress, String);
    // console.log('Hello Ken, you clicked the email add thingy.');
    // console.log(emailAddress);
    try {
      Meteor.call("addNewEmailAddress", emailAddress);
      Materialize.toast('Added ' + emailAddress, 4000);
    } catch (error) {
      console.log(error, t);
      Materialize.toast('Mwap mwahhhh. Errors occured!', 4000);
    }
  }
});

