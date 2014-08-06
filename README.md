Podio
=====

<span style="color:red;"><b>Work in progress...</b></span>

This is the unofficial Node client for accessing the Podio API. 

Version
-------

1.0

Installation
-------

To "install this package" is still necessary to download the lib from github and install it manually because the "library" is still unstable and because that, is not in "npm".

```sh
git clone [git-repo-url]
cd podio-node
npm install
```

Example
-------

```javascript
var credentials = { 
  api_key: 'my_app_name',
  api_secret: 'my_api_secret',
  services: [
    'users', 
    'contacts'
  ],
};

var Podio = require('./lib/podio')( credentials );

/**
 * Authentication method with credentials
 */
Podio.authenticate_with_credentials('bruno.agutoli@gmail.com', '*******', function(accessToken) {

  /**
   * Used to get the current user.
   * @see https://developers.podio.com/doc/users
   */
  Podio.users.current(function(user){
    console.log('User Id:', this.user_id);
    console.log('Mail:', this.mail);
  });

  /**
   * Used to get a list of contacts for the user.
   * @see https://developers.podio.com/doc/contacts
   */
  Podio.contacts.all(function( contacts ){
    console.log('Contacts:', contacts);
  });
});
```

TODO
-------
* More unit tests
* More async tests
* More Docs
* More HTTP's methods POST, PUT and DELETE
* To implement more ways to connect to the API
License
-------

(The MIT License)

Copyright (c) 2012 Bruno Agutoli &lt;bruno.agutoli@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


