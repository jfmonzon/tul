$(document).ready(function()
{
    $.validator.setDefaults({
        submitHandler: function()
        {
            $('#ser_codigo').val($('#ser_codigo').val().toUpperCase());
            $('#ser_nombre').val( $('#ser_nombre').val().toUpperCase());
            return true;
        }
    });
    
    $("#form_ser").validate({
        rules:
        {
            ser_codigo:
            {
                required:true,
                minlength:2,
                maxlength:8,
            },
            ser_nombre:
            {
                required:true,
                minlength:4,
                maxlength:80,
            },
            ser_descripcion:
            {
                required:true,
                minlength:10,
                maxlength:160,
            },
        },
        messages:
        {
            ser_codigo:
            {
                required:  "Debe escribir el código de la serie documental.",
                minlength: "El código de la serie documental debe tener mínimo 2 caracteres.",
                maxlength: "El código de la serie documental puede tener máximo 8 caracteres.",
            },
            ser_nombre:
            {
                required:  "Debe escribir el nombre de la serie documental.",
                minlength: "El nombre de la serie documental debe tener mínimo 4 caracteres.",
                maxlength: "El nombre de la serie documental puede tener máximo 80 caracteres.",
            },
            ser_descripcion:
            {
                required:  "Debe escribir la descripcion de la serie documental.",
                minlength: "La descripción de la serie documental debe tener mínimo 10 caracteres.",
                maxlength: "La descripción de la serie documental puede tener máximo 160 caracteres.",
            },
        },
        errorPlacement: function (error,element)
        {
            error.addClass("invalid-feedback");
            if (element.is(":radio")) 
            {
                error.appendTo(element.parents('.errores') );
            }else
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
    } );
});