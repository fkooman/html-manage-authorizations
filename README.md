# Introduction
This application makes it possible to disallow authorized applications with the 
`php-oauth` authorization server through its API.

# Screenshot
![html-manage-authorizations](https://github.com/fkooman/html-manage-authorizations/raw/master/docs/html-manage-authorizations.png)

# Installation
You can use [Bower](http://bower.io) to install the dependencies.

    $ bower install

# Configuration
You need to configure the application to point to your OAuth authorization 
server. This can be done by copying `config/config.js.default` to 
`config/config.js` and modifying it to suit your situation.

This is the default configuration:

    var apiClientId       = 'html-manage-authorizations';
    var authorizeEndpoint = 'http://localhost/php-oauth/authorize.php';
    var apiEndpoint       = 'http://localhost/php-oauth/api.php';

For example, for your situation it may need to be this:

    var apiClientId       = 'html-manage-authorizations';
    var authorizeEndpoint = 'https://www.example.org/php-oauth/authorize.php';
    var apiEndpoint       = 'https://www.example.org/php-oauth/api.php';

# Client Registration
Also, make sure that this client is registered in your OAuth server. The 
following information could be relevant:

* **Identifier**: html-manage-authorizations
* **Name**: Manage OAuth Application Authorizations
* **Description**: Application for end-users to revoke OAuth application 
  consent.
* **Profile**: User-agent-based Application
* **Secret**: _NONE_
* **Redirect URI**: https://www.example.org/html-manage-authorizations/index.html
