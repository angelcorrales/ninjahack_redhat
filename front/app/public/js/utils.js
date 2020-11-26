 $( document ).ready(function() {
    var url = "https://backend-missions-aporebote-ninjahack.apps.cluster-142f.142f.example.opentlc.com/missions"

$.ajax({
    url: url,
    type: "GET",
    success: function(respuesta){
        $.each(respuesta, function(key, value) {
            $("#missions").append('<div class="card mt-3"><img src=../images/'+value.image+' class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+value.amount.amount+ ' ' + value.amount.currency +'</h5><p class="card-text">'+value.description+'</p><a href="#" class="btn btn-primary mission">Me apunto</a></div></div>')
        });
        $( ".mission" ).click(function() {
            $(this).removeClass('btn-primary').addClass('btn-success').html('Apuntado').addClass('disabled')
        });
    }
    });
});
