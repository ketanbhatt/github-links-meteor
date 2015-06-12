Template.linkSubmit.events({
	'submit form': function(e) {
		e.preventDefault();

		var link = {
			link: $(e.target).find('[name=link]').val(),
			title: $(e.target).find('[name=title]').val(),
			desc: $(e.target).find('[name=desc]').val()
		}

		Links.insert(link);
		Router.go('linksList');
	},

	'click #btn-cancel': function(e) {
		Router.go('linksList');
	}
})