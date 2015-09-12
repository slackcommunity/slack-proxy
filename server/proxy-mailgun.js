ProxyMailgun = {
  foward: function(to_lookup, to, from, subject, html, text) {
    text = "This message was sent to " + to + ", if it was related to slack, you will need to use that email to login to slack. \r\n" + text;
    html = "<p><b>This message was sent to " + to + ", if it was related to slack, you will need to use that email to login to slack.</b></p>\r\n" + html;

    Meteor.Mailgun.send({
        to: to_lookup,
        from: from,
        subject: subject,
        text: text,
        html: html
    });

    console.log(to_lookup, to, from, subject, html, text)

    console.log("email sent")
  },
  lookup: function(to) {
    // Swap for proxy lookup code.
    return "justin.cole.mcnally@gmail.com";
  },
  process: function(msg) {
    if (ProxyMailgun.verify(msg)) {
      ProxyMailgun.parse(msg);
    }
  },
  verify: function(msg) {
    var domain = msg.sender.split('@')[1]
    return true;
    var valid_domains = ['slack.com', 'mandrillapp.com']
    if (valid_domains.indexOf(domain) > -1) {
      return true;
    }
    // Log invalid mail?
  },
  parse: function(msg) {
    var subject = msg.subject;
    var html = msg['body-html'];
    var text = msg['body-plain'];
    var from = msg.sender;
    var to = msg.recipient;
    var to_lookup = ProxyMailgun.lookup(to);
    if (to_lookup) {
      ProxyMailgun.foward(to_lookup, to, from, subject, html, text);
    }
  }
}

Meteor.methods({
});