
/**
 * Agregar un nuevo Materia
 */
$(function(){
    $('#btnRegistrarMat').click(function(){
        var array = [];
        array.push($("#nombre").val());
        array.push($("#semestre").val());
        array.push($("#carrera").val());
        array.push($("#ciclo").val());
        array.forEach(element => {
            console.log(element);
        });

        $.ajax({
            url: 'http://localhost:3000/estudiante/agregarmateria',
            data: {
                'nombre':array[0],
                'semestre':array[1],
                'carrera':array[2],
                'ciclo':array[3]
            },
            type: 'POST',
            success: function(res){
                console.log("Materia agregada correctamente");
                $("#nombre").val('');
                $("#ciclo").val('');
            },
            error: function(error){
                console.log("error: "+error);
            }
        });
    });
});

/**
 * Buscar Materia
 */
$(function(){
    $('#btnRellenarMat').click(function(){
        var id_mat = $('#txtIDMat').val();

        $.ajax({
            url: 'http://localhost:3000/estudiante/getmateria/'+id_mat,
            data: {},
            type: 'GET',
            contentType: 'application/json; charset=UTF-8',
            dataType : 'json',
            success: function(res){
                $('#nombre').val(res.response[0].nombre);
                $('#semestre').val(res.response[0].semestre);
                $('#carrera').val(res.response[0].id_car);
                $('#ciclo').val(res.response[0].ciclo);
                $("#semestre").selectmenu('refresh', true);
                $("#carrera").selectmenu('refresh', true);
            },
            error: function(error){
                console.log("error: "+error);
            }
        });
    });
});

/**
 * Actualizar Dirección
 */
$(function(){
    $('#btnActualizarMat').click(function(){
        var nombre = $('#nombre').val();
        var semestre = $('#semestre').val();
        var carrera = $('#carrera').val();
        var ciclo = $('#ciclo').val();
        var id = $('#txtIDMat').val();

        $.ajax({
            url: 'http://localhost:3000/estudiante/actualizarmateria',
            data: {
                'nombre':nombre,
                'semestre':semestre,
                'carrera':carrera,
                'ciclo':ciclo,
                'id': id
            },
            type: 'PUT',
            success: function(res){
                alert("Valores Actualizados");
            },
            error: function(error){
                console.log("error: "+error);
            }
        });
    });
});

/**
 * Eliminar Materia
 */
$(function(){
    $('#btnEliminarMat').click(function(){
        
        var id_mat = $('#txtID').val();
        $('#divMensaje').empty();

        $.ajax({
            url: 'http://localhost:3000/estudiante/eliminarmateria/'+id_mat,
            data: {},
            type: 'PUT',
            success: function(res){
                $('#divMensaje').append("<img src='./images/palomita.png'/>")
                $('#divMensaje').append("<h3>Materia Eliminada</h3>")
            },
            error: function(error){
                $('#divMensaje').append("<img src='./images/error.png'/>")
                $('#divMensaje').append("<h3>ERROR al Eliminar</h3>")

            }
        });
    });
});

/**
 * Ver Materias
 */
$(function(){
    $('#MostrarMat').click(function(){
        var tablaBody = $("#tablaInicio tbody");
        var filtro = $("#filtro").val();
        var orden = $("#orden").val();
        var text = ''; 
        if(filtro == 0){
            text+='getmateriasnombre/'+orden;
        }else if(filtro == 1){
            text+='getmateriassemestre/'+orden;
        }
        $.ajax({
            url: 'http://localhost:3000/estudiante/'+text,
            data: {},
            type: 'GET',
            contentType: 'application/json; charset=UTF-8',
            dataType : 'json',
            success: function(res){
                /*$('#tablaInicio').DataTable({
                    "data":res.response,
                    "destroy":true,
                    "columns":[
                        {"data":"id_mat"},
                        {"data":"nombre"},
                        {"data":"semestre"},
                        {"data":"id_car"},
                        {"data":"ciclo"}
                    ]
                });*/
                tablaBody.empty();

                    for (let i = 0; i < res.response.length; i++) {
                        console.log(res.response[i].nombre);
                        tablaBody.append('<tr>');
                        tablaBody.append('<td>' +res.response[i].id_mat+'</td>')
                        tablaBody.append('<td>' +res.response[i].nombre+'</td>')
                        tablaBody.append('<td>' +res.response[i].semestre+'</td>')
                        tablaBody.append('<td>' +res.response[i].id_car+'</td>')
                        tablaBody.append('<td>' +res.response[i].carrera+'</td>')
                        tablaBody.append('<td>' +res.response[i].ciclo+'</td>')
                        tablaBody.append('</tr>');
                    }
            },
            error: function(error){
                console.log("error: "+error);
            }
        });
    });
});
