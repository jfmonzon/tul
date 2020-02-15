$(document).ready(function()
{
    $.validator.setDefaults(
    {
        submitHandler: function()
        {
            return true;
        }
    });
    
    $("#form_login").validate({
        rules:
        {
            email:
            {
                required:true,
                minlength:5,
                maxlength:100,
                email:true,
            },
            password:
            {
                required:true,
                minlength:5,
                maxlength:16,
            },
        },
        messages:
        {
            email:
            {
                required: "Debe escribir su correo electrónico.",
                minlength: "Su correo electrónico debe tener mínimo 5 caracteres.",
                maxlength: "Su correo electrónico puede tener máximo 100 caracteres.",
                email: "El usuario que escribió no es un correo electrónico"
            },
            password:
            {
                required: "Debe escribir su contraseña de usuario.",
                minlength: "Su contraseña debe tener mínimo 5 caracteres.",
                maxlength: "Su contraseña puede tener máximo 16 caracteres."
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