Template.linksItem.events({
	'click .external-link': function(e) {
		e.preventDefault();
		var link = this.url;
		var url = link.match(/https.*/)
		window.open(url);
	}
})