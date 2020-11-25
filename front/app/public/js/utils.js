 $( document ).ready(function() {
    var url = "article.json"

    $.getJSON( url, function(obj) {
    $.each(obj, function(key, value) {
            $("#missions").append('<div class="card"><img src="..." class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+value.amount.amount+ ' ' + value.amount.currency +'</h5><p class="card-text">'+value.description+'</p><a href="#" class="btn btn-primary">Me apunto</a></div></div>')
    });
    });
});
