Template.linksItem.events({
	'click .external-link': function(e) {
		e.preventDefault();
		var link = this.url.match(/https.*/);
		window.open(link, '_self');
	}
})