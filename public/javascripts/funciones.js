$(function(){
    $('#btn').click(function(){
        
        $.ajax({
            type: 'GET',
            data: {},
            contentType: "application/json", //Tipo de respuesta
            url: 'http://localhost:3000/estudiante/listarestudiantespormunicipio',
            success: function(respuestaServidor){
                alert("Los datos fueron descargados");
            },
            error: function(error){
                console.log(error);
            }
        });
    })
})