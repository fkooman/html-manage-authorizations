$(document).ready(function () {

    var apiScope = ["http://php-oauth.net/scope/authorize"];

    jso_configure({
        "http://php-oauth.net/app/authorize": {
            client_id: apiClientId,
            authorization: authorizeEndpoint
        }
    });
    jso_ensureTokens({
        "http://php-oauth.net/app/authorize": apiScope
    });

    function renderAuthorizationList() {
        $.oajax({
            url: apiEndpoint + "/authorizations/",
            jso_provider: "http://php-oauth.net/app/authorize",
            jso_scopes: apiScope,
            jso_allowia: true,
            dataType: 'json',
            success: function (data) {
                var authorizationListSource = $("#authorizationList-template").html();
                var authorizationListTemplate = Handlebars.compile(authorizationListSource);
                var authorizationList = authorizationListTemplate({
                    authorizations: data,
                });

                $("#authorizationListTable").html(authorizationList);
            }
        });
    }

    function deleteAuthorization(clientId) {
        $.oajax({
            url: apiEndpoint + "/authorizations/" + clientId,
            jso_provider: "http://php-oauth.net/app/authorize",
            jso_scopes: apiScope,
            jso_allowia: true,
            type: "DELETE",
            complete: function (status) {
                renderAuthorizationList();
            }
        });
    }

    $(document).on('click', '#authorizationListTable button', function () {
        if (confirm("Are you sure you want to delete the authorization for '" + $(this).data('clientName') + "'?")) {
            deleteAuthorization($(this).data('clientId'));
        }
    });

    function initPage() {
        renderAuthorizationList();
    }
    initPage();
});
