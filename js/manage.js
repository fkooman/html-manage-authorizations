$(document).ready(function () {

    var apiScope = ["authorizations"];

    jso_configure({
        "html-manage-authorizations": {
            client_id: apiClientId,
            authorization: authorizeEndpoint
        }
    });
    jso_ensureTokens({
        "html-manage-authorizations": apiScope
    });

    function renderAuthorizationList() {
        $.oajax({
            url: apiEndpoint + "/authorizations/",
            jso_provider: "html-manage-authorizations",
            jso_scopes: apiScope,
            jso_allowia: true,
            dataType: 'json',
            success: function (data) {
                $("#authorizationListTable").html($("#authorizationListTemplate").render({"authz": data}));
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
                renderAuthorizationList();
            }
        });
    }

    $(document).on('click', '#authorizationListTable button', function() {
        if (confirm("Are you sure you want to delete the authorization for '" + $(this).data('clientName') + "'?")) {
            deleteAuthorization($(this).data('clientId'));
        }
    });

    function initPage() {
        renderAuthorizationList();
    }
    initPage();
});
