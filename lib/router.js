Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function() {
	this.route('linksList', {path: '/'});

	this.route('linkSubmit', {path: '/submit'});
});
