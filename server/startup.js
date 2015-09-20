Meteor.startup(function () {
  process.env.MAIL_URL = Meteor.settings.mailUrl;

  // By default, the email is sent from no-reply@meteor.com. If you wish to receive email from users asking for help with their account, be sure to set this to an email address that you can receive email at.
  // Accounts.emailTemplates.from = 'Ken Wallace <feedback@slackcommunity.co>';

  // The public name of your application. Defaults to the DNS name of the application (eg: awesome.meteor.com).
  // Accounts.emailTemplates.siteName = 'SlackCommunity Proxy';

  // A Function that takes a user object and returns a String for the subject line of the email.
  // Accounts.emailTemplates.verifyEmail.subject = function(user) {
  //   return 'Confirm Your Email Address';
  // };

  // A Function that takes a user object and a url, and returns the body text for the email.
  // Note: if you need to return HTML instead, use Accounts.emailTemplates.verifyEmail.html
  // Accounts.emailTemplates.verifyEmail.text = function(user, url) {
  //   return 'click on the following link to verify your email address: ' + url;
  // };

  /*
  * Generate Server Authentication Token
  * Create a token on startup to identify the server when calling methods. This
  * allows the server to call certain methods, but not the client (e.g. if a user)
  * discovers the name of a method that's "destructive," we can prevent any bad
  * actions by checking against this token (which they cannot see). Note, we use
  * the random package to generate our token so that it's even less discoverable.
  */

  // Here, we're calling on Random's secret method which creates a 43 character
  // string with 256 bits of entropy. Per the Meteor docs: "Use Random.secret for
  // security-critical secrets that are intended for machine, rather than human,
  // consumption." This is what we want because only our method(s) will check this
  // value, not us (humans).
  SERVER_AUTH_TOKEN = Random.secret();


  //Service Configurations
  ServiceConfiguration.configurations.upsert(
    { service: "slack" },
    { 
      $set: { 
        clientId: Meteor.settings.private.slack.clientId, 
        secret: Meteor.settings.private.slack.secret, 
        loginStyle: "redirect" 
      } 
    }
  );
});