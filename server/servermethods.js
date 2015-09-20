Meteor.methods({
	addNewEmailAddress: function(emailAddress) {
		check(emailAddress, String);
		console.log(emailAddress);
		return true;
	}
});