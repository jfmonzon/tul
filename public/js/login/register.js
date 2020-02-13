$(document).ready(function()
{
    $.validator.setDefaults(
    {
        submitHandler: function()
        {
            return true;
        }
    });

    var min=parseInt($("#usu_password").attr('min_pass'));
    var max=parseInt($("#usu_password").attr('max_pass'));
    $("#form_registro").validate({
        rules:
        {
            usu_nombre:
            {
                required:true,
                minlength:3,
            },
            usu_apellidos:
            {
                required:true,
                minlength:3,
            },
            tipdoc_id:
            {
                required:true,
            },
            usu_documento:
            {
                required:true,
                minlength:5,
            },
            usu_password:
            {
                required:true,
                minlength:min,
                maxlength:max,
            },
            usu_passwordConfirmation:
            {
                required:true,
                minlength:min,
                maxlength:max,
                equalTo:"#usu_password",
            },
            usu_email:
            {
                required:true,
                email:true,
            },
            dep_id:
            {
                required:true,
            }
        },
        messages:
        {
            usu_nombre:
            {
                required: "Debe escribir su nombre",
                minlength: "Su nombre debe tener al menos 3 caracteres."
            },
            usu_apellidos:
            {
                required: "Debe escribir su(s) apellido(s)",
                minlength: "Su(s) apellido(s) debe(n) tener al menos 3 caracteres."
            },
            tipdoc_id:
            {
                required: "Debe seleccionar su tipo de documento",
            },
            usu_documento:
            {
                required: "Debe escribir su número de documento",
                minlength: "Su número de documento debe tener mínimo 5 caracteres."
            },
            usu_password:
            {
                required: "Debe escribir una contraseña",
                minlength: "Su contraseña debe tener al menos "+min+" caracteres.",
                maxlength: "Su contraseña puede tener máximo "+max+" caracteres."
            },
            usu_passwordConfirmation:
            {
                required: "Debe confirmar la contraseña",
                minlength: "Su contraseña debe tener al menos "+min+" caracteres.",
                maxlength: "Su contraseña puede tener máximo "+max+" caracteres.",
                equalTo: "La contraseña y la confirmación deben coincidir",
            },
            usu_email:
            {
                required: 'Debe escribir su correo electrónico',
                email:  'Debe escribir un correo electrónico valido',
            },
            dep_id:
            {
                required: "Debe seleccionar una dependencia",
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
$(".letras").keypress(function (key)
{
    if (
        (key.charCode < 97 || key.charCode > 122)       // letras mayusculas
        && (key.charCode < 65 || key.charCode > 90)     // letras minusculas
        && (key.charCode != 9)                          // Tabulador
        && (key.charCode != 45)                         // retroceso
        && (key.charCode != 241)                        // ñ
        && (key.charCode != 209)                        // Ñ
        && (key.charCode != 32)                         // espacio
        && (key.charCode != 225)                        // á
        && (key.charCode != 233)                        // é
        && (key.charCode != 237)                        // í
        && (key.charCode != 243)                        // ó
        && (key.charCode != 250)                        // ú
        && (key.charCode != 193)                        // Á
        && (key.charCode != 201)                        // É
        && (key.charCode != 205)                        // Í
        && (key.charCode != 211)                        // Ó
        && (key.charCode != 218)                        // Ú
    )
    return false;
});