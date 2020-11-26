 $( document ).ready(function() {
    var mockUser = "dashboard/user.json";

    var urlDashboardMissionUrl = "article.json";

    $.ajax({
        url: urlDashboardMissionUrl,
        type: "GET",
        success: function(respuesta){
            console.log(respuesta)
                $.each(respuesta, function(key, value) {
                $("#complete").append('<div class="card mt-3"><img src=../images/'+value.image+' class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+value.amount.amount+ ' ' + value.amount.currency +'</h5><span class="badge badge-dark">Misión BBVA Play</span><p class="card-text">'+value.description+'</p><p><i>Misión completada</i></p></div></div>')
            });
        }
    });
});
