Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function() {
	this.route('linksList', {path: '/'});

	this.route('linkSubmit', {path: '/submit'});
});

var requireLogin = function() {
	if(!Meteor,user()) {
		Router.go('accessDenied');
		//this.stop();
	}
}

Router.before(requireLogin, {only: 'linkSubmit'})