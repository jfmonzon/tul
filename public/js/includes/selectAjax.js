$(document).ready(function(){
    var sel_uno = '';
    var sel_dos = '';
    var sel_tres = '';
    $('.dynamic').change(function(){
        if($(this).val() != '')
        {
            var ruta        = $(this).data("ruta");
            var codigo      = $(this).data("codigo");
            var nombre      = $(this).data("nombre");
            sel_uno         = $(this).attr("id");
            sel_dos         = $(this).data("dos");
            sel_tres        = $(this).data("tres");
            var select      = $(this).attr("id");
            var value       = $(this).val();
            var dependent   = $(this).data('dependent');
            var tabla       = $(this).data('tabla');
            var _token      = $('input[name="_token"]').val();
            console.log(ruta,codigo,nombre,select,value,dependent,tabla,sel_uno,sel_dos);
            $.ajax({
                url:"{{route('"+ruta+"')}}",
                method:"POST",
                data:{select:select,value:value,_token:_token,dependent:dependent,tabla:tabla,codigo:codigo,nombre:nombre},
                success:function(result)
                {
                    $('#'+dependent).html(result);
                }
            })
        }
    });
    $('#'+sel_uno).change(function(){
        $('#'+sel_dos).val('');
        $('#'+sel_tres).val('');
    });
    $('#'+sel_dos).change(function(){
        $('#'+sel_tres).val('');
    });
});