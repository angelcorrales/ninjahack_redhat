 $( document ).ready(function() {
    var mockUser = "dashboard/user.json";
    var mockUserMissions = "user-missions.json";

   $.getJSON( mockUser, function(response) {
        $("#avatarImage")[0].src = "/images/" + response.img;
    });

    var urlDashboardMissionUrl = "https://backend-hello-world-aporebote-ninjahack.apps.cluster-142f.142f.example.opentlc.com/hello/greeting";

    $.ajax({
        url: urlDashboardMissionUrl,
        type: "GET",
        success: function(respuesta){
                $.each(respuesta, function(key, value) {
                $("#dashboardMissions").append('<div class="card mt-3"><img src=../images/'+value.image+' class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+value.amount.amount+ ' ' + value.amount.currency +'</h5><p class="card-text">'+value.description+'</p><a href="#" class="btn btn-primary">Me apunto</a></div></div>')
            });
        }
    });

    /*$.ajax({
    url: "http://api.openbeerdatabase.com/v1/beers.json",
                    data: {
                                    query: "beer"
                    },
                    type: "GET",
                    success: function(respuesta){
    console.log("Recibes: ", respuesta);
    $("<pre>").text(JSON.stringify(respuesta)).appendTo("body");
                    }
    });*/
});
