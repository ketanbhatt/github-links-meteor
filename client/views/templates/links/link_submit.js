Template.linkSubmit.events({
	'submit form': function(e) {
		e.preventDefault();

		var link = {
			url: $(e.target).find('[name=url]').val(),
			title: $(e.target).find('[name=title]').val(),
			desc: $(e.target).find('[name=desc]').val()
		}

		Links.insert(link);
		Router.go('linksList');
	},

	'click #btn-cancel': function(e) {
		e.preventDefault();
		Router.go('linksList');
	}
})