 $( document ).ready(function() {
    var url = "https://backend-hello-world-aporebote-ninjahack.apps.cluster-142f.142f.example.opentlc.com/hello/greeting"

    $.getJSON( url, function(obj) {
    $.each(obj, function(key, value) {
            $("#missions").append('<div class="card mt-3"><img src=../images/'+value.image+' class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+value.amount.amount+ ' ' + value.amount.currency +'</h5><p class="card-text">'+value.description+'</p><a href="#" class="btn btn-primary">Me apunto</a></div></div>')
    });
    });
});
