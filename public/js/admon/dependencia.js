$(document).ready(function()
{
    $.validator.setDefaults({
        submitHandler: function()
        {
            return true;
        }
    });
    var min=parseInt($("#dep_codigo").attr('maxlength'));
    $("#form_dep").validate({
        rules:
        {
            dep_codigo:
            {
                required:true,
                minlength:min,
            },
            dep_titulo:
            {
                required:true,
                minlength:5,
                maxlength:80,
            },
            dep_descripcion:
            {
                minlength:10,
                maxlength:160,
            },
            padre_id:
            {
                required:true,
            },
            dep_sigla:
            {
                minlength:2,
                maxlength:8,
            },
            dep_direccion:
            {
                minlength:10,
                maxlength:100,
            },
            dep_trd:
            {
                required:true,
            },
        },
        messages:
        {
            dep_codigo:
            {
                required: "Debe escribir el código de la dependencia.",
                minlength: "El código de la dependencia debe tener mínimo "+min+" caracteres.",
            },
            dep_titulo:
            {
                required: "Debe escribir el título de la dependencia.",
                minlength: "El título de la dependencia debe tener mínimo 5 caracteres.",
                maxlength: "El título de la dependencia puede tener máximo 80 caracteres.",
            },
            dep_descripcion:
            {
                minlength: "La descripción de la dependencia debe tener mínimo 10 caracteres.",
                maxlength: "La descripción de la dependencia puede tener máximo 160 caracteres.",
            },
            padre_id:
            {
                required: "Debe seleccionar la dependencia padre.",
            },
            dep_sigla:
            {
                minlength: "La sigla de la dependencia debe tener mínimo 2 caracteres.",
                maxlength: "La sigla de la dependencia puede tener máximo 8 caracteres.",
            },
            dep_direccion:
            {
                minlength: "La dirección de la dependencia debe tener mínimo 10 caracteres.",
                maxlength: "La dirección de la dependencia puede tener máximo 100 caracteres.",
            },
            dep_trd:
            {
                required: "Debe indicar si la dependencia tiene TRD.",
            },
        },
        errorPlacement: function (error,element)
        {
            error.addClass("invalid-feedback");
            if ( element.is(":radio") ) 
            {
                error.appendTo( element.parents('.errores') );
            }
            else
            {
                if(element.prop("type") === "checkbox")
                {
                    error.insertAfter(element.parent("label"));
                }
                else
                {
                    error.insertAfter(element);
                }
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