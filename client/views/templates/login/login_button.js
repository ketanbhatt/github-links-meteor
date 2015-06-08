Template.loginButton.events({
	'click #github-login': function(e){
		Meteor.loginWithGithub({}, function(err) {
			if (err) {
				throw new Meteor.Error("Failed to Log in!");
			}
		});
	},
	'click #logout': function(e) {
		Meteor.logout(function(err) {
			if (err) {
				throw new Meteor.Error("Failed to Log out, Enjoy!");
			}
		});
	}
})