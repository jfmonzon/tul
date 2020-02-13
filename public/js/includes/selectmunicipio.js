$('#paises').click(function(e)
{
  var pai_id = e.target.value;
  if (pai_id != '')
  {
    $.get('/admon/datos/departamentos?pai_id='+pai_id,function(data)
    {
      console.log(data);
      $('#departamentos').empty();
      $('#departamentos').append('<option value="0" disable="true" selected="true">::: Seleccione un departamento :::</option>');
      $('#municipios').empty();
      $('#municipios').append('<option value="0" disable="true" selected="true">::: Seleccione un municipio :::</option>');
      $.each(data,function(index, departamentosObj)
      {
        
        $('#departamentos').append('<option value="'+departamentosObj.dep_id+'">'+departamentosObj.dep_nombre+'</option>');
      })
    })

  }
  
});

$('#departamentos').on('change',function(e)
{
  var dep_id = e.target.value;
  $.get('/admon/datos/municipios?dep_id='+dep_id,function(data)
  {
    $('#municipios').empty();
    $('#municipios').append('<option value="0" disable="true" selected="true">::: Seleccione un municipio :::</option>');
    $.each(data,function(index,municipiosObj)
    {
      $('#municipios').append('<option value="'+municipiosObj.mun_id+'">'+municipiosObj.mun_nombre +'</option>');
    })
  });
});