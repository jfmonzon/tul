$(document).ready(function()
{
    $.validator.setDefaults(
    {
        submitHandler: function()
        {
            return true;
        }
    });

    $(document).ready(function()
    {
        $.validator.addMethod("greater_Than",
            function (value,element,param)
            {
                var $otherElement = $(param);
                return parseInt(value, 10) > parseInt($otherElement.val(), 10);
            });
        $.validator.addMethod("less_Than",
            function (value, element, param)
            {
                var $otherElement = $(param);
                return parseInt(value, 10) < parseInt($otherElement.val(), 10);
            });

        $("#form_param").validate({
            rules:
            {
                num_vez_clave:
                {
                    required:true,
                    number:true,
                    range: [3,10],
                },
                lon_min_clave:
                {
                    required:true,
                    number:true,
                    range: [6,10],
                    less_Than:"#lon_max_clave",
                },
                lon_max_clave:
                {
                    required:true,
                    number:true,
                    range: [8,20],
                    greater_Than:"#lon_min_clave",
                },
                lon_min_login:
                {
                    required:true,
                    number:true,
                    range: [6,10],
                    less_Than:"#lon_max_login",
                },
                lon_max_login:
                {
                    required:true,
                    number:true,
                    range: [8,20],
                    greater_Than:"#lon_min_login",
                   
                },
                time_reintentar:
                {
                    required:true,
                    number:true,
                    range: [5,15],
                },
                time_inactividad:
                {
                    required:true,
                    number:true,
                    range: [10,60],
                },
                lon_cod_dependencia:
                {
                    required:true,
                    number:true,
                    range: [2,8]
                },
                cod_pais:
                {
                    required:true,
                },
                digitos_consecutivo:
                {
                    required:true,
                    number:true,
                    range: [3,10]
                },
                niv_max_expediente:
                {
                    required:true,
                    number:true,
                    range: [1,8]
                },
            },
            messages:
            {
                num_vez_clave:
                {
                    required: "Debe escribir el número de intentos permitidos al usuario.",
                    number: "Debe escribir un número entero.",
                    range: "Debe escribir un número entero entre 3 y 10.",
                },
                lon_min_clave:
                {
                    required: "Debe escribir la longitud mínima de la contraseña.",
                    number: "Debe escribir un número entero.",
                    range: "Debe escribir un número entero entre 6 y 10.",
                    less_Than: "Debe ser menor que la longitud máxima.",
                },
                lon_max_clave:
                {
                    required: "Debe escribir la longitud máxima de la contraseña.",
                    number: "Debe escribir un número entero.",
                    range: "Debe escribir un número entero entre 8 y 20.",
                    greater_Than: "Debe ser mayor que la longitud mínima.",
                },
                lon_min_login:
                {
                    required: "Debe escribir la longitud mínima del usuario.",
                    number: "Debe escribir un número entero.",
                    range: "Debe escribir un número entero entre 6 y 10.",
                    less_Than: "Debe ser menor que la longitud máxima.",
                },
                lon_max_login:
                {
                    required: "Debe escribir la longitud máxima del usuario.",
                    number: "Debe escribir un número entero.",
                    range: "Debe escribir un número entero entre 8 y 20.",
                    greater_Than: "Debe ser mayor que la longitud mínima.",
                },
                time_reintentar:
                {
                    required: "Debe escribir el tiempo para reintentar la autenticación.",
                    number: "Debe escribir un número entero.",
                    range: "Debe escribir un número entero entre 5 y 15.",
                },
                time_inactividad:
                {
                    required: "Debe escribir el tiempo de inactividad de sesión.",
                    number: "Debe escribir un número entero.",
                    range: "Debe escribir un número entero entre 10 y 60.",
                },
                cod_pais:
                {
                    required: "Debe seleccionar el código del país.",
                },
                lon_cod_dependencia:
                {
                    required: "Debe escribir la longitud del código para las dependencias.",
                    number: "Debe escribir un número entero.",
                    range: "Debe escribir un número entero entre 2 y 8.",
                },
                digitos_consecutivo:
                {
                    required: "Debe escribir la cantidad de dígitos del consecutivo de radicación.",
                    number: "Debe escribir un número entero.",
                    range: "Debe escribir un número entero entre 3 y 10.",
                },
                niv_max_expediente:
                {
                    required: "Debe escribir la cantidad de subexpedientes por expediente.",
                    number: "Debe escribir un número entero.",
                    range: "Debe escribir un número entero entre 1 y 8.",
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
});