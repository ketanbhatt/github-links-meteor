Template.linksList.helpers({
	links: function() { return Links.find().fetch().reverse(); }
})