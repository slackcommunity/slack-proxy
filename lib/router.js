AccountsTemplates.configure({defaultLayout: 'layout'});

/*
Available route codes are: signIn, signUp, changePwd, forgotPwd, resetPwd, enrollAccount
*/

// GLOBAL SUBSCRIPTIONS
FlowRouter.subscriptions = function() {
  if (Meteor.user) {
    // this.register('savedImages', Meteor.subscribe('images'));
    if(Meteor.isClient) {
      // this.register('extraHtmlSub', Meteor.subscribe("ExtraHtml", function() {
      //   console.log("Inside ExtraHtml sub");
      // }));
    }
  }
};

// Home
FlowRouter.route('/', {
  subscriptions: function(params) {
  },
  action: function(params) {
    BlazeLayout.render("layout", {authenticatedMain: "emailEntry"});
  },
  name: "home"
});
