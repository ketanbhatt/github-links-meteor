Links = new Mongo.Collection('links');

Links.allow({
	insert: function(userId, doc) {
		return !! userId;
	}
});