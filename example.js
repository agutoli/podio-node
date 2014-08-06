/**
 * Podio wrapper to rest API
 * example of usage
 */
"use strict";

var credentials = {
  api_key: 'your_api_key',
  api_secret: 'your_api_secret',
  services: ['users', 'contacts', 'apps'],
};

var Podio = require('./lib/podio')( credentials );

Podio.authenticate_with_credentials('your_mail@a.com', '***', function(accessToken){

  Podio.users.current(function(user){
    console.log('User Id:', this.user_id);
    console.log('Mail:', this.mail);
  });

  Podio.contacts.all(function(contacts){
    console.log('Contacts: ', contacts);
  });

  Podio.apps.all(function(apps){
    console.log('Apps: ', apps);
  });
});


