/**
 * Busca en relación al campo de busqueda al estudiante
 */

$(function(){
    $('#buscar').click(function(){

        var dato = $("#datoBuscar").val();
        var tablaBody = $("tbody");
        
        $.ajax({
            url: 'http://localhost:3000/estudiante/listarestudiantespormunicipio',
            //data: {'datoBuscar':dato,'orden':'ASC'},
            data: {},
            type: 'GET',
            contentType: 'application/json; charset=UTF-8',
            dataType : 'json',
            success: function(res){
                for (let i = 0; i < res.response.length; i++) {
                    console.log(res.response[i].nombre);
                    tablaBody.append('<tr>');
                    tablaBody.append('<td>' +res.response[i].nombre+'</td>')
                    tablaBody.append('<td>' +res.response[i].ap_paterno+'</td>')
                    tablaBody.append('<td>' +res.response[i].ap_materno+'</td>')
                    tablaBody.append('</tr>');
                }
            },
            error: function(error){
                console.log("error: "+error);
            }
        });
    });
});

/**
 * Agregar un nuevo usuario
 */
$(function(){
    $('#nuevo').click(function(){
        var array = [];
        array.push($("#nombre").val());
        array.push($("#paterno").val());
        array.push($("#materno").val());
        array.push($("#sexo").val());
        array.push($("#email").val());
        array.push($("#tel").val());
        array.push($("#cel").val());
        array.push($("#pais").val());
        array.push($("#estado").val());
        array.push($("#municipio").val());
        array.push($("#colonia").val());
        array.push($("#calle").val());
        array.push($("#num").val());
        array.push($("#cp").val());
        array.push($("#curp").val());
        array.push($("#fenac").val());
        //array.push($("#estatus").val());
        array.push($("#civil").val());
        array.push($("#sangre").val());
        array.push($("#nss").val());
        array.push($("#alergias").val());
        array.push($("#escuela").val());
        array.push($("#fechegreso").val());
        array.push($("#promedio").val());
        array.push($("#tutor").val());

        array.forEach(element => {
            console.log(element);
        });

        $.ajax({
            url: 'http://localhost:3000/estudiante/agregarestudiante',
            data: {
                'nombre':array[0],
                'ap_paterno':array[1],
                'ap_materno':array[2],
                'sexo':array[3],
                'email':array[4],
                'tel':array[5],
                'celular':array[6],
                'pais':array[7],
                'estado':array[8],
                'municipio':array[9],
                'colonia':array[10],
                'calle':array[11],
                'numero':array[12],
                'cp':array[13],
                'curp':array[14],
                'fecha_nacimiento':array[15],
                'id_civ':array[16],
                'tipo_sangre':array[17],
                'nss':array[18],
                'alergias':array[19],
                'esc_procedencia':array[20],
                'fecha_egreso':array[21],
                'promedio':array[22],
                'tutor':array[23]
            },
            type: 'POST',
            success: function(res){
                console.log("Alumno agregado correctamente");
            },
            error: function(error){
                console.log("error: "+error);
            }
        });
    });
});

/**
 * Ver información de los estudiantes
 */
$(function(){
    $('#filtrar').click(function(){
        var filtro = $('#filtro').val();
        var orden = $('#orden').val();
        var tablaBody = $("#tablaInicio2 tbody");
        var tablaHead = $("#tablaInicio2 thead");
        var txtFiltro = "";
        console.log(filtro);
        if(filtro == 0){
            txtFiltro = '/listarestudiantespornombre/'+orden;
        }else if(filtro == 1){
            txtFiltro = '/listarestudiantespormunicipio/'+orden;
        }
        else if(filtro == 2){
            txtFiltro = '/listarestudiantespormunicipio/'+orden;
        } else if(filtro == 1){
            txtFiltro = '/listarestudiantesporescuela/'+orden;
        }
        else alert("Opción no válida");
        
        //tablaBody.innerHTML = "";

        $.ajax({
            url: 'http://localhost:3000/estudiante'+txtFiltro,
            //data: {'datoBuscar':dato,'orden':'ASC'},
            data: {},
            type: 'GET',
            contentType: 'application/json; charset=UTF-8',
            dataType : 'json',
            success: function(res){
                // $('#tablaInicio').DataTable({
                //     "data":res.response,
                //     "destroy":true,
                //     "columns":[
                //         {"data":"ap_paterno"},
                //         {"data":"ap_materno"},
                //         {"data":"nombre"},
                //         {"data":"sexo"},
                //         {"data":"fecha_nacimiento"},
                //         {"data":"curp"},
                //         {"data":"calle"},
                //         {"data":"numero"},
                //         {"data":"colonia"},
                //         {"data":"municipio"},
                //         {"data":"estado"},
                //         {"data":"pais"},
                //         {"data":"cp"},
                //         {"data":"email"},
                //         {"data":"tel"},
                //         {"data":"celular"},
                //         {"data":"estado_civil"},
                //         {"data":"tipo_sangre"},
                //         {"data":"nss"},
                //         {"data":"alergias"},
                //         {"data":"promedio"},
                //         {"data":"esc_procedencia"},
                //         {"data":"fecha_egreso"}
                //     ]
                // });
                tablaBody.empty();
                
                // for (let i = 0; i < tablaBody.children.length; i++) {
                    
                // }
                for (let i = 0; i < res.response.length; i++) {
                    console.log(res.response[i].nombre);
                    tablaBody.append('<tr>');
                    tablaBody.append('<td>' +res.response[i].ap_paterno+'</td>')
                    tablaBody.append('<td>' +res.response[i].ap_materno+'</td>')
                    tablaBody.append('<td>' +res.response[i].nombre+'</td>')
                    tablaBody.append('<td>' +res.response[i].sexo+'</td>')
                    tablaBody.append('<td>' +res.response[i].fecha_nacimiento+'</td>')
                    tablaBody.append('<td>' +res.response[i].curp+'</td>')
                    tablaBody.append('<td>' +res.response[i].calle+'</td>')
                    tablaBody.append('<td>' +res.response[i].numero+'</td>')
                    tablaBody.append('<td>' +res.response[i].colonia+'</td>')
                    tablaBody.append('<td>' +res.response[i].municipio+'</td>')
                    tablaBody.append('<td>' +res.response[i].estado+'</td>')
                    tablaBody.append('<td>' +res.response[i].pais+'</td>')
                    tablaBody.append('<td>' +res.response[i].cp+'</td>')
                    tablaBody.append('<td>' +res.response[i].email+'</td>')
                    tablaBody.append('<td>' +res.response[i].tel+'</td>')
                    tablaBody.append('<td>' +res.response[i].celular+'</td>')
                    tablaBody.append('<td>' +res.response[i].estado_civil+'</td>')
                    tablaBody.append('<td>' +res.response[i].tipo_sangre+'</td>')
                    tablaBody.append('<td>' +res.response[i].nss+'</td>')
                    tablaBody.append('<td>' +res.response[i].alergias+'</td>')
                    tablaBody.append('<td>' +res.response[i].promedio+'</td>')
                    tablaBody.append('<td>' +res.response[i].esc_procedencia+'</td>')
                    tablaBody.append('<td>' +res.response[i].fecha_egreso+'</td>')
                    tablaBody.append('</tr>');
                }
            },
            error: function(error){
                console.log("error: "+error);
            }
        });
    });
});

/**
 * Eliminar estudiante
 */
$(function(){
    $('#btnEliminar').click(function(){
        
        var id_est = $('#txtID').val();

        $.ajax({
            url: 'http://localhost:3000/estudiante/eliminarestudiante/'+id_est,
            data: {},
            type: 'PUT',
            success: function(res){
                $('#divMensaje').innerHTML = "<h2>Estudiante Eliminado Correctamente</h2>"
                alert("Eliminado");
            },
            error: function(error){
                console.log("error: "+error);
            }
        });
    });
});

/**
 * Buscar dirección de estudiante al estudiante
 */
$(function(){
    $('#btnRellenar').click(function(){
        var id_est = $('#txtID').val();

        $.ajax({
            url: 'http://localhost:3000/estudiante/listarestudiante/'+id_est,
            data: {},
            type: 'GET',
            contentType: 'application/json; charset=UTF-8',
            dataType : 'json',
            success: function(res){
                $('#id_dir').val(res.response[0].id_dir);
                $('#pais').val(res.response[0].pais);
                $('#estado').val(res.response[0].estado);
                $('#municipio').val(res.response[0].municipio);
                $('#colonia').val(res.response[0].colonia);
                $('#calle').val(res.response[0].calle);
                $('#num').val(res.response[0].numero);
                $('#cp').val(res.response[0].cp);
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
    $('#btnActualizar').click(function(){
        alert("Entra");
        var id_dir = $('#id_dir').val();
        var pais = $('#pais').val();
        var estado = $('#estado').val();
        var municipio = $('#municipio').val();
        var colonia = $('#colonia').val();
        var calle = $('#calle').val();
        var numero = $('#num').val();
        var cp = $('#cp').val();

        $.ajax({
            url: 'http://localhost:3000/estudiante/actualizardireccion/'+id_dir,
            data: {
                'pais':pais,
                'estado':estado,
                'municipio':municipio,
                'colonia':colonia,
                'calle':calle,
                'numero':numero,
                'cp':cp
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


// tablaHead.append('<tr>');
// tablaHead.append('<th>' +Per.ap_paterno+'</th>')
// tablaHead.append('<th>' +Per.ap_materno+'</th>')
// tablaHead.append('<th>' +Per.nombre+'</th>')
// tablaHead.append('<th>' +Per.sexo+'</th>')
// tablaHead.append('<th>' +Est.fecha_nacimiento+'</th>')
// tablaHead.append('<th>' +Est.curp+'</th>')
// tablaHead.append('<th>' +Dir.calle+'</th>')
// tablaHead.append('<th>' +Dir.numero+'</th>')
// tablaHead.append('<th>' +Dir.colonia+'</th>')
// tablaHead.append('<th>' +Dir.municipio+'</th>')
// tablaHead.append('<th>' +Dir.estado+'</th>')
// tablaHead.append('<th>' +Dir.pais+'</th>')
// tablaHead.append('<th>' +Dir.cp+'</th>')
// tablaHead.append('<th>' +Con.email+'</th>')
// tablaHead.append('<th>' +Con.tel+'</th>')
// tablaHead.append('<th>' +Con.celular+'</th>')
// tablaHead.append('<th>' +Civ.estado_civil+'</th>')
// tablaHead.append('<th>' +Med.tipo_sangre+'</th>')
// tablaHead.append('<th>' +Med.nss+'</th>')
// tablaHead.append('<th>' +Med.alergias+'</th>')
// tablaHead.append('<th>' +Aca.promedio+'</th>')
// tablaHead.append('<th>' +Aca.esc_procedencia+'</th>')
// tablaHead.append('<th>' +Aca.fecha_egreso+'</th>')
// tablaHead.append('</tr>');