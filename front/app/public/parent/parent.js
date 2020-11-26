$( document ).ready(() => {
   /* var user = "https://backend-users-2-aporebote-ninjahack.apps.cluster-142f.142f.example.opentlc.com/user";

   $.getJSON( user, function(response) {
        $("#name").html(response.name);
    });*/

    var urlDashboardMissionUrl = "https://backend-users-2-aporebote-ninjahack.apps.cluster-142f.142f.example.opentlc.com/user/missions";
                           
    $.ajax({
        url: urlDashboardMissionUrl,
        type: "GET",
        success: function(respuesta){

            $.each(respuesta, function(key, value) {
                //ongoing
                if (value.state === 'ACTIVE') {
                    $("#ongoingMission").append('<div class="card mt-3"><img src=../images/'
                        +value.image+' class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'
                        +value.amount.amount+ ' ' + value.amount.currency 
                        +'</h5><p class="card-text">'+value.description
                        +'</p><div class=""><span id="state"></span><button class="btn btn-primary cancel">Cancelar</button></div></div></div>');
                }
                //pending
                if (value.state === 'ACTIVE') {
                    $("#pendingMission").append('<div class="card mt-3"><img src=../images/'
                        +value.image+' class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'
                        +value.amount.amount+ ' ' + value.amount.currency 
                        +'</h5><p class="card-text">'+value.description
                        +'</p><div class="row justify-content-between m-0"><button class="btn btn-success accept">Aceptar</button><span id="state"></span><button class="btn btn-danger deny">Rechazar</button></div></div></div>')
                }
                //reviewed
                if (value.state === 'Accepted' || value.state === 'Deny') {
                    $("#reviewedMissions").append('<div class="card mt-3"><img src=../images/'
                        +value.image+' class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'
                        +value.amount.amount+ ' ' + value.amount.currency 
                        +'</h5><p class="card-text">'+value.description
                        +'</p><div class="row justify-content-between m-0"><button class="btn btn-success accept">Aceptar</button><span id="state"></span><button class="btn btn-danger deny">Rechazar</button></div></div></div>')
                }
            });

            $( ".cancel" ).click(function() {
                $(this).addClass('btn-danger');
                $(this).removeClass('btn-primary');
                $(this).html('Cancelada');
                $(this).disable = true;
            });

            $( ".accept" ).click(function() {
                var card = $(this).parent().parent();
                var cantidad = card.find('h5').html();
                var descripcion = card.find('p').html();
                var imagen = card.parent().find('img')[0].src;

                $("#reviewedMissions").prepend('<div class="card mt-3"><img src="'+imagen
                  +'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'
                  +cantidad+'</h5><p class="card-text">'
                  +descripcion+'</p><span id="state" class="text-success">Aceptada</span></div></div>');

                card.parent().remove();
                checkEmpty();

            });
            $( ".deny" ).click(function() {
                var card = $(this).parent().parent();
                var cantidad = card.find('h5').html();
                var descripcion = card.find('p').html();
                var imagen = card.parent().find('img')[0].src;

                $("#reviewedMissions").prepend('<div class="card mt-3"><img src="'+imagen
                  +'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'
                  +cantidad+'</h5><p class="card-text">'
                  +descripcion+'</p><span id="state" class="text-danger">Rechazada</span></div></div>');

                card.parent().remove();
                checkEmpty();
            });
            checkEmpty = function(){
                if ( $('#pendingMission').children().length == 1) {
                    $('#emptyImage')[0].hidden = false
                }
            }
        }
    });
        
    var urlMissions = "https://backend-missions-aporebote-ninjahack.apps.cluster-142f.142f.example.opentlc.com/missions";
          
    $.ajax({
        url: urlMissions,
        type: "GET",
        success: function(respuesta){
            $.each(respuesta, function(key, value) {
                $("#recomend").append('<div class="card mt-3"><img src=../images/'
                    +value.image+' class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'
                    +value.amount.amount+ ' ' + value.amount.currency 
                    +'</h5><p class="card-text">'+value.description
                    +'</p><div class="row justify-content-between m-0"><button class="btn btn-primary recomend-btn">Asignar</button></div></div></div>');
            });

            $('.recomend-btn').click(function() {
                $(this).addClass('btn-success');
                $(this).removeClass('btn-primary');
                $(this).html('Asignada');
                $(this).disable = true;
            })
        }
    });
});