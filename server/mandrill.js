Mandrill.config({
  username: Meteor.settings.mandrillApiEmail,  // the email address you log into Mandrill with. Only used to set MAIL_URL.
  key: Meteor.settings.mandrillApiKey  // get your Mandrill key from https://mandrillapp.com/settings/index
});