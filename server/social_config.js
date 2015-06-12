ServiceConfiguration.configurations.remove({
    service: 'github'
});
 
ServiceConfiguration.configurations.insert({
    service: 'github',
    clientId: configKeys.github.clientId,
    secret: configKeys.github.secret
});

Accounts.onCreateUser(function(options, user) {
    if (options.profile) {
        options.profile.picture = "https://avatars3.githubusercontent.com/u/" + user.services.github.id + "?v=3&amp;s=460";
        user.profile = options.profile;
    }
    return user;
});