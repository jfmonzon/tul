$(document).ready(function()
{
    $.validator.setDefaults({
        submitHandler: function()
        {
            var codigo = convLetra($('#sub_codigo').val());
            $('#sub_codigo').val(codigo);
            var nombre = convLetra($('#sub_nombre').val());
            $('#sub_nombre').val(nombre);
            return true;
        }
    });
   
    $("#form_sub").validate({
        rules:
        {
            ser_id:
            {
                required:true,
            },
            sub_codigo:
            {
                required:true,
                minlength:2,
                maxlength:8,
            },
            sub_nombre:
            {
                required:true,
                minlength:5,
                maxlength:80,
            },
            sub_descripcion:
            {
                required:true,
                minlength:10,
                maxlength:160,
            },
            sub_tiemag:
            {
                required:true,
                number:true,
                min:0,
                max:99,
            },
            sub_tiemac:
            {
                required:true,
                number:true,
                min:0,
                max:99,
            },
            sub_procedimiento:
            {
                required:true,
                minlength:20,
                maxlength:600,
            },
            medsop_id:
            {
                required:true,
            },
            disfin_id:
            {
                required:true,
            },
        },
        messages:
        {
            ser_id:
            {
                required:  "Debe seleccionar una serie documental.",
            },
            sub_codigo:
            {
                required:  "Debe escribir el código de la subserie documental.",
                minlength: "El código de la subserie documental debe tener mínimo 2 caracteres.",
                maxlength: "El código de la subserie documental puede tener máximo 8 caracteres.",
            },
            sub_nombre:
            {
                required:  "Debe escribir el nombre de la subserie documental.",
                minlength: "El nombre de la subserie documental debe tener mínimo 5 caracteres.",
                maxlength: "El nombre de la subserie documental puede tener máximo 80 caracteres.",
            },
            sub_descripcion:
            {
                required:  "Debe escribir la descripción de la subserie documental.",
                minlength: "La descripción de la subserie documental debe tener mínimo 10 caracteres.",
                maxlength: "La descripción de la subserie documental puede tener máximo 160 caracteres.",
            },
            sub_tiemag:
            {
                required:  "Debe escribir el tiempo de retención en archivo de gestión.",
                number:    "El tiempo de retención en archivo de gestion debe ser un número entero.",
                min:       "El tiempo de retención en archivo de gestion debe ser mínimo 0.",
                max:       "El tiempo de retención en archivo de gestion puede ser máximo 99.",
            },
            sub_tiemac:
            { 
                required:  "Debe escribir el tiempo de retención en archivo central.",
                number:    "El tiempo de retención en archivo central debe ser un número entero.",
                min:       "El tiempo de retención en archivo central debe ser mínimo 0.",
                max:       "El tiempo de retención en archivo central puede ser máximo 99.",
            },
            sub_procedimiento:
            {
                required:  "Debe escribir el procedimiento.",
                minlength: "El procedimiento debe tener mínimo 20 caracteres.",
                maxlength: "El procedimiento puede tener máximo 600 caracteres.",
            },    
            medsop_id:
            {
                required:  "Debe seleccionar un medio de soporte.",
            },
            disfin_id:
            {
                required:  "Debe seleccionar la disposición final.",
            },
        },
        errorPlacement: function (error,element)
        {
            error.addClass("invalid-feedback");
            if ( element.is(":radio") ) 
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
    $('.solo-numero').keyup(function (){
        this.value = (this.value + '').replace(/[^0-9]/g,'');
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