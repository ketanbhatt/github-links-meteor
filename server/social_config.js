ServiceConfiguration.configurations.remove({
    service: 'github'
});
 
ServiceConfiguration.configurations.insert({
    service: 'github',
    clientId: configKeys.github.clientId,
    secret: configKeys.github.secret
});