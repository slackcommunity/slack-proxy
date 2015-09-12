Api = new Restivus({
  version: 'v1',
  prettyJson: true
});


Api.addRoute('inbound', {
  post: {
    action: function () {
      // Handle request
      var events = JSON.parse(this.request.body.mandrill_events);
      for(var i = 0; i < events.length; i++) {
        var event = events[i];
        if (event.event == "inbound") {
          var msg = event.msg;
          ProxyMail.process(msg)
        }
      }
      return {};
    }
  }
});

Api.addRoute('mailgun', {
  post: {
    action: function () {
      // Handle request
      ProxyMailgun.process(this.request.body)
      return {};
    }
  }
});