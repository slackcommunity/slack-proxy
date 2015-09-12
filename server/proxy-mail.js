ProxyMail = {
  foward: function(to_lookup, to, from, subject, html, text) {
    text = "This message was sent to " + to + ", if it was related to slack, you will need to use that email to login to slack. \r\n" + text;
    html = "<p><b>This message was sent to " + to + ", if it was related to slack, you will need to use that email to login to slack.</b></p>\r\n" + html;

    Mandrill.messages.send({
      message: {
        subject: subject,
        from_email: from,
        to: [ {email: to_lookup} ],
        text: text,
        html: html
      }
    });
  },
  lookup: function(to) {
    // Swap for proxy lookup code.
    return "justin.cole.mcnally@gmail.com";
  },
  process: function(msg) {
    if (ProxyMail.verify(msg)) {
      ProxyMail.parse(msg);
    }
  },
  verify: function(msg) {
    if (msg.dkim.signed && msg.dkim.valid) {
      var domain = msg.from_email.split('@')[1]
      return true;
      var valid_domains = ['slack.com', 'mandrillapp.com']
      if (valid_domains.indexOf(domain) > -1) {
        return true;
      }
    }
    // Log invalid mail?
  },
  parse: function(msg) {
    var subject = msg.subject;
    var html = msg.html;
    var text = msg.text;
    var from = msg.from_email;
    var to = msg.to[0][0];
    var to_lookup = ProxyMail.lookup(to);
    if (to_lookup) {
      ProxyMail.foward(to_lookup, to, from, subject, html, text);
    }
  }
}

Meteor.methods({
});