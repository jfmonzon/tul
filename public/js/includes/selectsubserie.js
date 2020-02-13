  $(document).ready(function()
  {
    $('#tabla_dep').hide();
    
    if($('#dep_id').val()!="")
    {
      var dep_id = $('#dep_id').val();
      $.get('/admon/trd/series',function(datas) {
        
        $('#series').empty();
        if (datas[0].ser_id==0)
        {
          $('#series').append('<option value="" disable="true" selected="true">No ha definido ninguna serie</option>');

        }
        else
        {
          $('#series').append('<option value="" disable="true" selected="true">=== Seleccione una Serie ===</option>');
          $('#subseries').empty();
          $('#subseries').append('<option value="" disable="true" selected="true">=== No ha seleccionado una serie ===</option>');
          $('#tiposdoc').empty();
          $('#tiposdoc').append('<option value="" disable="true" selected="true">=== No ha seleccionado una serie ===</option>');
          $.each(datas, function(index, seriesObj)
          {
           
            $('#series').append('<option value="'+ seriesObj.ser_id +'">'+ seriesObj.ser_codigo +'. '+ seriesObj.ser_nombre +'</option>');
          })
        }        
      });
      $('#tabla_dep').show();
      $.get('/admon/trd/dependencias?dep_id=' + dep_id,function(data) {
        
        $('#dependencias').empty();
        $('#datos').empty();
        
        
        if (data.length==0)
        {
          $('#table_trd').hide();
          $('#table_dep').hide();
        }else{
          $('#table_trd').show();
          $('#table_dep').show();
        }
        
        
        var i=0;

        $.each(data, function(index, depenObj)
        {
        
          if (typeof depenObj.trd_id == 'undefined' )
          {
            $('#dependencias').append( 'Dependencia: '+ depenObj.dep_codigo+'. '+ depenObj.dep_titulo);
            $('#datos').append(' <tr><th colspan="4">No hay tipo documental para asignar en la dependencia: '+ depenObj.dep_codigo+'. '+ depenObj.dep_titulo+' </th></tr>');
          }
          else
          {

            
            var datos;
            var url= window.location.href; 
          
            if (i==0)
            {

              $('#dependencias').append( 'Dependencia: '+ depenObj.dependencia.dep_codigo+'. '+ depenObj.dependencia.dep_titulo);
            }
            datos="<tr>";
            
            datos+="<td>"+depenObj.subserie.serie.ser_codigo+". "+depenObj.subserie.serie.ser_nombre+"</td>";
            datos+="<td>"+depenObj.subserie.sub_codigo+". "+depenObj.subserie.sub_nombre+"</td>";
            datos+="<td>"+depenObj.tipodocumental.tipdoc_nombre+"</td>";
            datos+='<td><button class="btn btn-sm ml-1 mb-0  title="" data-toggle="modal" data-target="#tip_Modal">'+
            '<i class="fas fa-trash-alt"></i></button>'+
            '<div class="modal fade" id="tip_Modal" tabindex="-1" role="dialog" aria-labelledby="tip_ModalLabel" aria-hidden="true">'+
            '<div class="modal-dialog modal-dialog-centered" role="document">'+
                '<div class="modal-content border-info">'+
                    '<div class="modal-header bg-info m-0 p-2">'+
                        '<h6 class="modal-title font-weight-bold" id="tip_ModalLabel">TRD</h6>'+
                    '</div>'+
                    '<div class="modal-body">"Quiere eliminar TRD?'+depenObj.subserie.serie.ser_codigo+". "+depenObj.subserie.serie.ser_nombre+" "+depenObj.subserie.sub_codigo+". "+depenObj.subserie.sub_nombre+'"</div>'+
                    '<div class="modal-footer">'+
                        '<form action="'+url+'/destroy/'+depenObj.trd_id+'" id="form_trd_del" method="POST" name="delete_tipo">'+
                            '<button class="btn btn-sm btn-secondary" type="reset" data-dismiss="modal">NO</button>'+
                            '<button class="btn btn-sm btn-danger" type="submit" id="trd_delete" name="trd_delete">SI</button>'+
                            '<input type="hidden" name="_method" value="DELETE">'+" "+
                            '<input type="hidden" name="_token" value="'+depenObj.token+'">'+
                            // '@csrf'+
                        '</form>'+
                    '</div>'+
                '</div>'+
              '</div>'+
            '</div></td>';
            datos+="</tr>";

            $('#datos').append(datos);
            
            i++;
          }
        })
      })
    };

    

    

    $('#series').on('change', function(e){

      var ser_id = e.target.value;
      
      $.get('/admon/trd/subseries?ser_id=' + ser_id,function(data) {
    
        $('#subseries').empty();
        $('#subseries').append('<option value="" disable="true" selected="true">=== Seleccione una Subserie ===</option>');
        $('#tiposdoc').empty();
        $('#tiposdoc').append('<option value="" disable="true" selected="true">=== No ha seleccionado una serie ===</option>');
        $.each(data, function(index, subseriesObj){
            $('#subseries').append('<option value="'+ subseriesObj.sub_id +'">'+ subseriesObj.sub_codigo +'. '+ subseriesObj.sub_nombre +'</option>');
              })
      })
    });

    $('#subseries').on('change', function(e)
    {
      var sub_id = e.target.value;
      var ser_id = $('#series').val();
      var dep_id = $('#dep_id').val();
      var ver_id = $('#ver_id').val();
     
      $.get('/admon/trd/tiposdoc?dep_id=' + dep_id+"&ser_id="+ser_id+"&sub_id="+sub_id+"&ver_id="+ver_id,function(data) {
           
        $('#tiposdoc').empty();
        if (data.length==0)
        {
          $('#tiposdoc').append('<option value="" disable="true" >No hay Tipos Documentales para seleccionar</option>');
        }
        else 
        {
          $('#tiposdoc').append('<option value="" disable="true" selected="true">=== Seleccione un Tipo Documental ===</option>');
         
        }   
       
        $.each(data, function(index, tiposdocObj)
        {
          
          $('#tiposdoc').append('<option value="'+ tiposdocObj.tipdoc_id +'">'+ tiposdocObj.tipdoc_nombre +'</option>');
        });
      });
    });


    
    $('#dep_id').on('change', function(e)
    {
      
        $.get('/admon/trd/series',function(datas) {
          console.log(datas[0].ser_id);
        $('#series').empty();
        if (datas[0].ser_id==0)
        {
          $('#series').append('<option value="" disable="true" selected="true">=== No ha definido ninguna serie ===</option>');

        }
        else
        {
          $('#series').append('<option value="" disable="true" selected="true">=== Seleccione una Serie ===</option>');
          $('#subseries').empty();
          $('#subseries').append('<option value="" disable="true" selected="true">=== No ha seleccionado una serie ===</option>');
          $('#tiposdoc').empty();
          $('#tiposdoc').append('<option value="" disable="true" selected="true">=== No ha seleccionado una subserie ===</option>');
            $.each(datas, function(index, seriesObj){
             
                $('#series').append('<option value="'+ seriesObj.ser_id +'">'+ seriesObj.ser_codigo +'. '+ seriesObj.ser_nombre +'</option>');
                  })
        }
       
      });

      var dep_id = e.target.value;
      $('#tabla_dep').show();
      $.get('/admon/trd/dependencias?dep_id=' + dep_id,function(data) {
        //console.log(data);
        $('#dependencias').empty();
        $('#datos').empty();
        
        
        if (data.length==0)
        {
          $('#table_trd').hide();
          $('#table_dep').hide();
        }else{
          $('#table_trd').show();
          $('#table_dep').show();
        }
        
        
        var i=0;

        $.each(data, function(index, depenObj)
        {
        
          if (typeof depenObj.trd_id == 'undefined' )
          {
            $('#dependencias').append( 'Dependencia: '+ depenObj.dep_codigo+'. '+ depenObj.dep_titulo);
            $('#datos').append(' <tr><th colspan="4">No hay tipo documental para asignar en la dependencia: '+ depenObj.dep_codigo+'. '+ depenObj.dep_titulo+' </th></tr>');
          }
          else
          {

            
            var datos;
            var url= window.location.href; 
          
            if (i==0)
            {

              $('#dependencias').append( 'Dependencia: '+ depenObj.dependencia.dep_codigo+'. '+ depenObj.dependencia.dep_titulo);
            }
            datos="<tr>";
            
            datos+="<td>"+depenObj.subserie.serie.ser_codigo+". "+depenObj.subserie.serie.ser_nombre+"</td>";
            datos+="<td>"+depenObj.subserie.sub_codigo+". "+depenObj.subserie.sub_nombre+"</td>";
            datos+="<td>"+depenObj.tipodocumental.tipdoc_nombre+"</td>";
            datos+='<td><button class="btn btn-sm ml-1 mb-0  title="" data-toggle="modal" data-target="#tip_Modal">'+
            '<i class="fas fa-trash-alt"></i></button>'+
            '<div class="modal fade" id="tip_Modal" tabindex="-1" role="dialog" aria-labelledby="tip_ModalLabel" aria-hidden="true">'+
            '<div class="modal-dialog modal-dialog-centered" role="document">'+
                '<div class="modal-content border-info">'+
                    '<div class="modal-header bg-info m-0 p-2">'+
                        '<h6 class="modal-title font-weight-bold" id="tip_ModalLabel">TRD</h6>'+
                    '</div>'+
                    '<div class="modal-body">"Quiere eliminar TRD?'+depenObj.subserie.serie.ser_codigo+". "+depenObj.subserie.serie.ser_nombre+" "+depenObj.subserie.sub_codigo+". "+depenObj.subserie.sub_nombre+'"</div>'+
                    '<div class="modal-footer">'+
                        '<form action="'+url+'/destroy/'+depenObj.trd_id+'" id="form_trd_del" method="POST" name="delete_tipo">'+
                            '<button class="btn btn-sm btn-secondary" type="reset" data-dismiss="modal">NO</button>'+
                            '<button class="btn btn-sm btn-danger" type="submit" id="trd_delete" name="trd_delete">SI</button>'+
                            '<input type="hidden" name="_method" value="DELETE">'+
                            '<input type="hidden" name="_token" value="'+depenObj.token+'">'+
                            // '@csrf'+
                        '</form>'+
                    '</div>'+
                '</div>'+
              '</div>'+
            '</div></td>';
            datos+="</tr>";

            $('#datos').append(datos);
            
            i++;
          }
        })
      })
    });
  });
 