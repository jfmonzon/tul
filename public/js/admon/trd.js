$(document).ready(function()
{
    $("#reset_form").click(function(){
        $(".error.invalid-feedback").hide();
        $("select").removeClass("border-danger");
    });
   
    $.validator.setDefaults({
        submitHandler: function()
        {
            return true;
        }
    });
    
    $("#form_trd").validate({
        rules:
        {
            dep_id:
            {
                required:true,
            },
            ver_id:
            {
                required:true,
            },
            ser_id:
            {
                required:true,
            },
            sub_id:
            {
                required:true,
            },
            tipdoc_id:
            {
                required:true,
            },
        },
        messages:
        {
            dep_id:
            {
                required: "Debe seleccionar una dependencia.",
            },
            ver_id:
            {
                required: "Debe haber una versión en Elaboración.",
            },
            ser_id:
            {
                required: "Debe seleccionar una serie documental.",
            },
            sub_id:
            {
                required: "Debe seleccionar una subserie documental.",
            },
            tipdoc_id:
            {
                required: "Debe seleccionar un tipo documental.",
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
            $("#ver_id1").hide();
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