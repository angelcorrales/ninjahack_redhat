$( document ).ready(() => {
    var user = "https://backend-users-2-aporebote-ninjahack.apps.cluster-142f.142f.example.opentlc.com/user";

   $.getJSON( user, function(response) {
        $("#name").html(response.name);
    });

    var urlDashboardMissionUrl = "https://backend-users-2-aporebote-ninjahack.apps.cluster-142f.142f.example.opentlc.com/user/1/missions";
                                  
    $.ajax({
        url: urlDashboardMissionUrl,
        type: "GET",
        success: function(respuesta){
            $.each(respuesta, function(key, value) {
                $("#dashboardMissions").append('<div class="card mt-3"><img src=../images/'
                    +value.image+' class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'
                    +value.amount.amount+ ' ' + value.amount.currency 
                    +'</h5><p class="card-text">'+value.description+'</p><a href="#" class="btn btn-secondary">Reclamar recompensa</a></div></div>')
            });
        }
    });
});