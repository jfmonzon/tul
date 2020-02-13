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
        $("#form_doc").validate({
            rules:
            {
                tiprad_id:
                {
                    required:true,
                },
                doc_titulo:
                {
                    required:true,
                    minlength:6,
                    maxlength:60,
                },
                doc_descripcion:
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
                doc_titulo:
                {
                    required:   "Debe escribir el título del documento de archivo.",
                    minlength:  "El título del documento de archivo debe tener mínimo 6 caracteres.",
                    maxlength:  "El título del documento de archivo puede tener máximo 60 caracteres.",
                },
                doc_descripcion:
                {
                    required:   "Debe escribir la descripción del documento de archivo.",
                    minlength:  "La descripción del documento de archivo debe tener mínimo 10 caracteres.",
                    maxlength:  "La descripción del documento de archivo puede tener máximo 160 caracteres.",
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