$(document).ready(function()
{
    $.validator.setDefaults({
        submitHandler: function()
        {
            var nombre = convLetra($('#tipdoc_nombre').val());
            $('#tipdoc_nombre').val(nombre);
            return true;
        }
    });
    $("#form_tipdoc").validate({
        rules:
        {
            tipdoc_nombre:
            {
                required:true,
                minlength:4,
                maxlength:60,
            },
            tipdoc_descripcion:
            {
                required:true,
                minlength:10,
                maxlength:160,
            },
        },
        messages:
        {
            tipdoc_nombre:
            {
                required:  "Debe escribir el nombre del tipo documental.",
                minlength: "El nombre del tipo documental debe tener mínimo 4 caracteres.",
                maxlength: "El nombre del tipo documental puede tener máximo 60 caracteres.",
            },
            tipdoc_descripcion:
            {
                required:  "Debe escribir la descripción del tipo documental.",
                minlength: "La descripción del tipo documental debe tener mínimo 10 caracteres.",
                maxlength: "La descripción del tipo documental puede tener máximo 160 caracteres.",
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
function convLetra(str)
{
   var frase = str.split(" ");
   var arr = [];
   var conector = ['al','de','del','el','en','la','las','lo','los'];
   for (i in frase)
   {
      temp = frase[i].toLowerCase();
      if (!conector.includes(temp))
      {
        temp = temp.charAt(0).toUpperCase()+temp.substring(1);
      }
      arr.push(temp);
   }
   return arr.join(" ");
}