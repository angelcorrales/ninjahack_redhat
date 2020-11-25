 $( document ).ready(function() {
    var mockUser = "dashboard/user.json";

    var urlDashboardMissionUrl = "article.json";

    $.ajax({
        url: urlDashboardMissionUrl,
        type: "GET",
        success: function(respuesta){
            console.log(respuesta)
                $.each(respuesta, function(key, value) {
                $("#complete").append('<div class="card mt-3"><img src=../images/'+value.image+' class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+value.amount.amount+ ' ' + value.amount.currency +'</h5><p class="card-text">'+value.description+'</p><a href="#" class="btn btn-secondary">Reclamar recompensa</a></div></div>')
            });
        }
    });
});
