$(document).ready(function()
{
    $.validator.setDefaults({
        submitHandler: function()
        {
            return true;
        }
    });
    $("#form_rol").validate({
        rules:
        {
            rol_titulo:
            {
                required:true,
                minlength:8,
                maxlength:40,
            },
            rol_descripcion:
            {
                required:true,
                minlength:10,
                maxlength:160,
            },
        },
        messages:
        {
            rol_titulo:
            {
                required: "Debe escribir el título del rol.",
                minlength: "El título del rol debe tener mínimo 8 caracteres.",
                maxlength: "El título del rol puede tener máximo 40 caracteres.",
            },
            rol_descripcion:
            {
                required: "Debe escribir la descripción del rol.",
                minlength: "La descripción del rol debe tener mínimo 10 caracteres.",
                maxlength: "La descripción del rol puede tener máximo 160 caracteres.",
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