$(document).ready(function()
{
    $.validator.setDefaults(
    {
        submitHandler: function()
        {
            return true;
        }
    });
 //'nombre', 'apellido', 'ocupacion', 'ciudad', 'cedula', 'estatus', 'rol',  'email', 'password',
    $("#form_registro").validate({
        rules:
        {
            nombre:
            {
                required:true,
                minlength:3,
            },
            apellido:
            {
                required:true,
                minlength:3,
            },
            cedula:
            {
                required:true,
            },
            ciudad:
            {
                required:true,
            },
            ocupacion:
            {
                required:true,
                minlength:5,
            },
           
            rol:
            {
                required:true,
               
            },
            pasword:
            {
                required:true,
               
            },
            foto:
            {
                extension:"jpeg|png|jpg|gif|svg",
            },
            password_confirm:
            {
                required:true,
                equalTo:"#password",
            },
            email:
            {
                required:true,
                email:true,
            },
            dep_id:
            {
                required:true,
            }
        },
        messages:
        {
            nombre:
            {
                required: "Debe escribir su nombre",
                minlength: "Su(s) nombre(s) debe(n) tener al menos 3 caracteres."
               
            },
           apellidos:
            {
                required: "Debe escribir su(s) apellido(s)",
                minlength: "Su(s) apellido(s) debe(n) tener al menos 3 caracteres."
            },
            ocupacion:
            {
                required: "Debe seleccionar su ocupacion",
            },
            
            cedula:
            {
                required: "Debe escribir su número de documento",
                
            },
            password:
            {
                required: "Debe escribir una contraseña",
               
            },
            password_confirm:
            {
                required: "Debe confirmar la contraseña",
                
                equalTo: "La contraseña y la confirmación deben coincidir",
            },
            email:
            {
                required: 'Debe escribir su correo electrónico',
                email:  'Debe escribir un correo electrónico valido',
            },
            rol:
            {
                required: "Debe seleccionar su rol",
            },
            foto:
            {
                extension:"La extensión no es de imagenes"
            }
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
$(".letras").keypress(function (key)
{
    if (
        (key.charCode < 97 || key.charCode > 122)       // letras mayusculas
        && (key.charCode < 65 || key.charCode > 90)     // letras minusculas
        && (key.charCode != 9)                          // Tabulador
        && (key.charCode != 45)                         // retroceso
        && (key.charCode != 241)                        // ñ
        && (key.charCode != 209)                        // Ñ
        && (key.charCode != 32)                         // espacio
        && (key.charCode != 225)                        // á
        && (key.charCode != 233)                        // é
        && (key.charCode != 237)                        // í
        && (key.charCode != 243)                        // ó
        && (key.charCode != 250)                        // ú
        && (key.charCode != 193)                        // Á
        && (key.charCode != 201)                        // É
        && (key.charCode != 205)                        // Í
        && (key.charCode != 211)                        // Ó
        && (key.charCode != 218)                        // Ú
    )
    return false;
});