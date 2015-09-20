Template.header.created = function() {

}

Template.header.onRendered(function() {
});

Template.header.helpers({
  isReady: function(sub) {
    if(sub) {
      return FlowRouter.subsReady(sub);
    } else {
      return FlowRouter.subsReady();
    }
  },
  activeRouteClass: function(/* route names */) {
    var args = Array.prototype.slice.call(arguments, 0);
    args.pop();
    var active = _.any(args, function(name) {
      return Router.current().route.name === name
    });
    return active && 'active';
  },
  gravatarUrl: function(email) {
    var md5Hash = Gravatar.hash(email);
    return Gravatar.imageUrl(email, {
      size: 300,
      default: 'mm'
    });
  },
  users: function () {
    return Meteor.users;
  },
  fullName: function() {
    return Meteor.user().profile.fullName;
  },
  images: function () {
    return Images.find({},{sort:{createdAt:-1},limit:100});
  },
  image: function () {
    return Images.findOne({userId:Meteor.userId()});
  // },
  // ExtraNavLinks: function() {
  //   FlowRouter.subsReady('extraHtmlSub', function() {
  //     var res = myExtraHtmlCollection.findOne();
  //     if (res && res.extraHtml) {
  //       res = _.unescape(res.extraHtml);
  //       return res;
  //     }
  //   });
  }
});

