$(document).ready(function()
{
    $.validator.setDefaults({
        submitHandler: function()
        {
            return true;
        }
    });
    $("#form_ver").validate({
        rules:
        {
            ver_codigo:
            {
                required:true,
                minlength:2,
                maxlength:10,
            },
            ver_nombre:
            {
                required:true,
                minlength:8,
                maxlength:80,
            },
            ver_descripcion:
            {
                required:true,
                minlength:10,
                maxlength:160,
            },
            ver_fecinicio:
            {
                required:true,
            },
            ver_fecfinal:
            {
                required:true,
            },
        },
        messages:
        {
            ver_codigo:
            {
                required:  "Debe escribir el código de la versión.",
                minlength: "El código de la versión debe tener mínimo 2 caracteres.",
                maxlength: "El código de la versión puede tener máximo 10 caracteres.",
            },
            ver_nombre:
            {
                required:  "Debe escribir el nombre de la versión.",
                minlength: "El nombre de la versión debe tener mínimo 8 caracteres.",
                maxlength: "El nombre de la versión puede tener máximo 80 caracteres.",
            },
            ver_descripcion:
            {
                required:  "Debe escribir la descripción de la versión.",
                minlength: "La descripción de la versión debe tener mínimo 10 caracteres.",
                maxlength: "La descripción de la versión puede tener máximo 160 caracteres.",
            },
            ver_fecinicio:
            {
                required: "Debe seleccionar la fecha de inicio.",
            },
            ver_fecfinal:
            {
                required: "Debe seleccionar la fecha final.",
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

    $(".from_date").datepicker({
        format: 'yyyy-mm-dd',
        language: "es",
        autoclose: true,
        startDate:"+0d",
    }).on('changeDate',function (selected){
        var startDate = new Date(selected.date.valueOf());
        startDate.setDate(startDate.getDate()+30);
        $('.to_date').datepicker('setStartDate',startDate);
    }).on('clearDate',function (selected){
        $('.to_date').datepicker('setStartDate',null);
    });

    $(".to_date").datepicker({
        format: 'yyyy-mm-dd',
        language: "es",
        autoclose: true,
        startDate:"+30d",
    }).on('changeDate',function (selected){
        var endDate = new Date(selected.date.valueOf());
        $('.from_date').datepicker('setEndDate',endDate);
    }).on('clearDate',function (selected){
        $('.from_date').datepicker('setEndDate',null);
    });
});