$(document).ready(function()
{
    $.validator.setDefaults({
        submitHandler: function()
        {
            return true;
        }
    });
    $("#form_glosario").validate({
        rules:
        {
            glo_termino:
            {
                required:true,
                minlength:4,
                maxlength:40,
            },
            glo_definicion:
            {
                required:true,
                minlength:10,
                maxlength:400,
            },
            glo_fuente:
            {
                required:true,
                minlength:10,
                maxlength:120,
            },
        },
        messages:
        {
            glo_termino:
            {
                required:  "Debe escribir el término del glosario.",
                minlength: "El término debe tener mínimo 4 caracteres.",
                maxlength: "El término puede tener máximo 40 caracteres.",
            },
            glo_definicion:
            {
                required:  "Debe escribir la definición del término.",
                minlength: "La definición del término debe tener mínimo 10 caracteres.",
                maxlength: "La definición del término puede tener máximo 400 caracteres.",
            },
            glo_fuente:
            {
                required:  "Debe escribir la fuente del término.",
                minlength: "La fuente del término debe tener mínimo 10 caracteres.",
                maxlength: "La fuente del término puede tener máximo 120 caracteres.",
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