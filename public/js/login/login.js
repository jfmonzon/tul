$(document).ready(function()
{
    $.validator.setDefaults(
    {
        submitHandler: function()
        {
            return true;
        }
    });

    var min_pass=parseInt($("#usu_password").attr('min_pass'));
    var max_pass=parseInt($("#usu_password").attr('max_pass'));
    var min_login=parseInt($("#usu_login").attr('min_login'));
    var max_login=parseInt($("#usu_login").attr('max_login'));
    $("#form_login").validate({
        rules:
        {
            usu_login:
            {
                required:true,
                minlength:min_login,
                maxlength:max_login,
            },
            usu_password:
            {
                required:true,
                minlength:min_pass,
                maxlength:max_pass,
            },
        },
        messages:
        {
            usu_login:
            {
                required: "Debe escribir su nombre de usuario.",
                minlength: "Su nombre de usuario debe tener mínimo "+min_login+" caracteres.",
                maxlength: "Su nombre de usuario puede tener máximo "+max_login+" caracteres.",
            },
            usu_password:
            {
                required: "Debe escribir su contraseña de usuario.",
                minlength: "Su contraseña debe tener mínimo "+min_pass+" caracteres.",
                maxlength: "Su contraseña puede tener máximo "+max_pass+" caracteres."
            },
        },
        errorPlacement: function (error,element)
        {
            error.addClass("invalid-feedback");
            if(element.prop("type") === "checkbox")
            {
                error.insertAfter(element.parent("label"));
            }
            else
            {
                error.insertAfter(element);
            }
        },
        highlight: function (element,errorClass,validClass)
        {
            $(element).addClass("border-danger");
        },
        unhighlight: function (element,errorClass,validClass)
        {
            $(element).removeClass("border-danger");
        }
    });
});