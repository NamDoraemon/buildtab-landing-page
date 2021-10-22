$(document).ready(function () {
    $("#email-form-2").submit(function (event) {
        event.preventDefault();
        var url = "https://buildtab.vn:3003/v1/register-trial"
        var data = {
            name: $('#email-form-2').find('input[name="name"]').val(),
            phone: $('#email-form-2').find('input[name="phone"]').val(),
            email: $('#email-form-2').find('input[name="email"]').val(),
            description: $('#email-form-2').find('textarea[name="description"]').val()
        }

        $.ajax(url, {
            data: JSON.stringify(data),
            contentType: 'application/json',
            type: 'POST',
            success: function () {
                $(".w-form-fail").hide();
                $(".w-form-done").show();
            },
            error: function () {
                $(".w-form-fail").show();
                $(".w-form-done").hide();
            }
        })
    });
});
