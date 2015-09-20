Mandrill.config({
  username: Meteor.settings.private.mandrillApiEmail,  // the email address you log into Mandrill with. Only used to set MAIL_URL.
  key: Meteor.settings.private.mandrillApiKey  // get your Mandrill key from https://mandrillapp.com/settings/index
});