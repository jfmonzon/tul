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
        $("#form_tip").validate({
            rules:
            {
                tiprad_codigo:
                {
                    required:true,
                    number:true,
                    range: [1,99],
                },
                tiprad_nombre:
                {
                    required:true,
                    minlength:6,
                    maxlength:60,
                },
                tiprad_descripcion:
                {
                    required:true,
                    minlength:10,
                    maxlength:160,
                },
            },
            messages:
            {
                tiprad_codigo:
                {
                    required:   "Debe escribir el código del tipo de radicación.",
                    number:     "El código del tipo de radicación debe ser un número entero.",
                    range:      "El código del tipo de radicación debe ser un número entero entre 1 y 99.",
                },
                tiprad_nombre:
                {
                    required:   "Debe escribir el nombre del tipo de radicación.",
                    minlength:  "El nombre del tipo de radicación debe tener mínimo 6 caracteres.",
                    maxlength:  "El nombre del tipo de radicación puede tener máximo 60 caracteres.",
                },
                tiprad_descripcion:
                {
                    required:   "Debe escribir la descripción del tipo de radicación.",
                    minlength:  "La descripción del tipo de radicación debe tener mínimo 10 caracteres.",
                    maxlength:  "La descripción del tipo de radicación puede tener máximo 160 caracteres.",
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