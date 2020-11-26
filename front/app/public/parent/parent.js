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
                $("#parentMissions").append('<div class="card mt-3"><img src=../images/'
                    +value.image+' class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'
                    +value.amount.amount+ ' ' + value.amount.currency 
                    +'</h5><p class="card-text">'+value.description
                    +'</p><div class="row justify-content-between m-0"><button class="btn btn-success accept">Aceptar</button><span id="state"></span><button class="btn btn-danger deny">Rechazar</button></div></div></div>')
            });
            $( ".accept" ).click(function() {
                $(this).parent().find('button')[0].hidden = true
                $(this).parent().find('button')[1].hidden = true
                $(this).parent().find('#state')[0].innerHTML = "Aceptada";
                $(this).parent().find('#state')[0].classList.add('text-success');
            });
            $( ".deny" ).click(function() {
                $(this).parent().find('button')[0].hidden = true
                $(this).parent().find('button')[1].hidden = true
                $(this).parent().find('#state')[0].innerHTML = "Rechazada";
                $(this).parent().find('#state')[0].classList.add('text-danger');
            });
        }
    });
});

var meApunto = function(mission) {
    var imagen = $('.carousel-inner div:nth-child(1) img')[mission].src;
    var cantidad =  $('.carousel-inner div:nth-child(1) .card-body h5')[mission].innerHTML;
    var descripcion =  $('.carousel-inner div:nth-child(1) .card-body p')[mission].innerHTML;
    var boton = $('.carousel-inner div:nth-child(1) button')[mission];
    
    boton.setAttribute('disabled', true);
    boton.innerHTML = 'Apuntado';
    boton.classList.add('btn-success');
    boton.classList.remove('btn-primary');
    
    $("#dashboardMissions").append('<div class="card mt-3"><img src="'+imagen+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'
        +cantidad 
        +'</h5><p class="card-text">'+descripcion+'</p><button class="btn btn-primary reward">Reclamar recompensa</button></div></div>')

    $( ".reward" ).click(function() {
        $(this).removeClass('btn-primary').addClass('btn-success').html('Recompensa reclamada')
    });
}


