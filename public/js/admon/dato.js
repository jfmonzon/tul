$(document).ready(function()
{
    $.validator.setDefaults({
        submitHandler: function()
        {
            return true;
        }
    });
    
    $("#form_dat").validate({
        rules:
        {
           
        },
        messages:
        {
            
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