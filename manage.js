$(document).ready(function () {
    var apiClientId = 'authorization_manager';
    var redirectUri = "http://localhost/html-manage-oauth/index.html";

    var apiScopes = ["authorizations"];

    var apiEndpoint = 'http://localhost/php-oauth/api.php';
    var authorizeEndpoint = 'http://localhost/php-oauth/authorize.php';

    jso_configure({
        "admin": {
            client_id: apiClientId,
            redirect_uri: redirectUri,
            authorization: authorizeEndpoint
        }
    });
    jso_ensureTokens({
        "admin": apiScopes
    });

    function renderApprovalList() {
        $.oajax({
            url: apiEndpoint + "/authorizations/",
            jso_provider: "admin",
            jso_scopes: apiScopes,
            jso_allowia: true,
            dataType: 'json',
            success: function (data) {
                $("#approvalList").html($("#approvalListTemplate").render(data));
                addApprovalListHandlers();
            }
        });
    }

    function addApprovalListHandlers() {
        $("a.deleteApproval").click(function () {
            if (confirm("Are you sure you want to delete '" + $(this).data('clientName') + "'")) {
                deleteApproval($(this).data('clientId'));
            }
        });
    }

    function deleteApproval(clientId) {
        $.oajax({
            url: apiEndpoint + "/authorizations/" + clientId,
            jso_provider: "admin",
            jso_scopes: apiScopes,
            jso_allowia: true,
            type: "DELETE",
            success: function (data) {
                renderApprovalList();
            }
        });
    }

    $("a#approvalsButton").click(function() {
        $(this).parent().siblings().removeClass("active");
        $(this).parent().addClass("active");
        $("#registeredClientsList").hide();
        $("#approvedClientsList").show();
        renderApprovalList();
    });

    function initPage() {
        renderApprovalList();
    }
    initPage();
});
