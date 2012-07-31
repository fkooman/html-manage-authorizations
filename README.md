# OAuth Authorizations

If you want to use the JS management interface you need to modify both 
`authorizeEndpoint` and `apiEndpoint` in `js/manage.js`:

    var authorizeEndpoint = 'http://localhost/php-oauth/authorize.php';
    var apiEndpoint = 'http://localhost/php-oauth/api.php';

To (in this example):

    var authorizeEndpoint = 'https://www.example.org/php-oauth/authorize.php';
    var apiEndpoint = 'https://www.example.org/php-oauth/api.php';

