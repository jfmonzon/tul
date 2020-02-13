$(document).ready(function()
{
    $.validator.setDefaults({
        submitHandler: function()
        {
            return true;
        }
    });
    $("#form_exp").validate({
        rules:
        {
            exp_codigo:
            {
                required:true,
                minlength:10,
                maxlength:40,
            },
            exp_nombre:
            {
                required:true,
                minlength:10,
                maxlength:80,
            },
            exp_descripcion:
            {
                required:true,
                minlength:10,
                maxlength:320,
            },
            exp_notas:
            {
                minlength:10,
                maxlength:320,
            },
        },
        messages:
        {
            exp_codigo:
            {
                required:  "Debe escribir el código del expediente.",
                minlength: "El código del expediente debe tener mínimo 10 caracteres.",
                maxlength: "El código del expediente puede tener máximo 40 caracteres.",
            },
            exp_nombre:
            {
                required:  "Debe escribir el nombre del expediente.",
                minlength: "El nombre del expediente debe tener mínimo 10 caracteres.",
                maxlength: "El nombre del expediente puede tener máximo 80 caracteres.",
            },
            exp_descripcion:
            {
                required:  "Debe escribir la descripción del expediente.",
                minlength: "La descripción del expediente debe tener mínimo 10 caracteres.",
                maxlength: "La descripción del expediente puede tener máximo 320 caracteres.",
            },
            exp_notas:
            {
                minlength: "Las notas del expediente deben tener mínimo 10 caracteres.",
                maxlength: "Las notas del expediente pueden tener máximo 320 caracteres.",
            },
        },
        errorPlacement: function (error,element)
        {
            error.addClass("invalid-feedback");
            if (element.is(":radio"))
            {
                error.appendTo(element.parents('.errores'));
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