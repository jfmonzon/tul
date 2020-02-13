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
        $("#form_bor").validate({
            rules:
            {
                tiprad_id:
                {
                    required:true,
                },
                bor_titulo:
                {
                    required:true,
                    minlength:6,
                    maxlength:60,
                },
                bor_descripcion:
                {
                    required:true,
                    minlength:10,
                    maxlength:160,
                },
            },
            messages:
            {
                tiprad_id:
                {
                    required:   "Debe seleccionar un tipo de radicación.",
                },
                bor_titulo:
                {
                    required:   "Debe escribir el título del documento borrador.",
                    minlength:  "El título del documento borrador debe tener mínimo 6 caracteres.",
                    maxlength:  "El título del documento borrador puede tener máximo 60 caracteres.",
                },
                bor_descripcion:
                {
                    required:   "Debe escribir la descripción del documento borrador.",
                    minlength:  "La descripción del documento borrador debe tener mínimo 10 caracteres.",
                    maxlength:  "La descripción del documento borrador puede tener máximo 160 caracteres.",
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