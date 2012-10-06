$(document).ready(function () {
    var apiClientId = 'html-manage-authorizations';
    var apiScope = ["authorizations"];

    var authorizeEndpoint = 'http://localhost/php-oauth/authorize.php';
    var apiEndpoint = 'http://localhost/php-oauth/api.php';

    jso_configure({
        "html-manage-authorizations": {
            client_id: apiClientId,
            authorization: authorizeEndpoint
        }
    });
    jso_ensureTokens({
        "html-manage-authorizations": apiScope
    });

    function renderAuthorizedApplicationsList() {
        $.oajax({
            url: apiEndpoint + "/authorizations/",
            jso_provider: "html-manage-authorizations",
            jso_scopes: apiScope,
            jso_allowia: true,
            dataType: 'json',
            success: function (data) {
                $("#authorizedApplicationsList").html($("#authorizedApplicationsListTemplate").render(data));
                addAuthorizedApplicationsListHandlers();
            }
        });
    }

    function addAuthorizedApplicationsListHandlers() {
        $("button.deleteAuthorization").click(function () {
            if (confirm("Are you sure you want to delete the authorization for '" + $(this).data('clientName') + "'?")) {
                deleteAuthorization($(this).data('clientId'));
            }
        });
    }

    function deleteAuthorization(clientId) {
        $.oajax({
            url: apiEndpoint + "/authorizations/" + clientId,
            jso_provider: "html-manage-authorizations",
            jso_scopes: apiScope,
            jso_allowia: true,
            type: "DELETE",
            success: function (data) {
                renderAuthorizedApplicationsList();
            }
        });
    }

    function initPage() {
        renderAuthorizedApplicationsList();
    }
    initPage();
});
