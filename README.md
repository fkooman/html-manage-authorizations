# OAuth Authorizations

## Installation

This application depends on the following components:

* jQuery
* JSrender (JavaScript Template Rendering for jQuery)
* JSO (JavaScript OAuth 2 client)

It can easily be installed by running the following script:

    $ sh docs/install_dependencies.sh

This will download the latest version of those components and everything will
immediately work.

## Configuration

You may need to modify both `authorizeEndpoint` and `apiEndpoint` in 
`js/manage.js` when your OAuth server is not configured at 
`http://localhost/php-oauth`. So you need to change the following lines:

    var authorizeEndpoint = 'http://localhost/php-oauth/authorize.php';
    var apiEndpoint = 'http://localhost/php-oauth/api.php';

To for example:

    var authorizeEndpoint = 'https://www.example.org/php-oauth/authorize.php';
    var apiEndpoint = 'https://www.example.org/php-oauth/api.php';

Also, make sure that this client is registered in your OAuth server. The following
information will be relevant:

<table>
  <tr>
    <td>Client Identifier</td><td>manage_authorizations</td>
  </tr>
  <tr>
    <td>Redirect URI</td><td>https://www.example.org/html-manage-authorizations/index.html</td>
  </tr>
  <tr>
    <td>Secret</td><td></td>
  </tr>
  <tr>
    <td>Name</td><td>List and revoke authorized applications</td>
  </tr>
  <tr>
    <td>Description</td><td>This application lists the applications and their permissions you authorized to access resources on your behalf and allows you to revoke these permissions.</td>
  </tr>
  <tr>
    <td>Application Type</td><td>User Agent Based Application</td>
  </tr>
</table>

That should be all!
