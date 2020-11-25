 $( document ).ready(function() {
    var mockUser = "user.json";
    var mockUserMissions = "user-missions.json";

   $.getJSON( mockUser, function(obj) {
        $("")

        $.each(obj, function(key, value) {
            $("#missions").append('<div class="card"><img src="..." class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+value.amount.amount+ ' ' + value.amount.currency +'</h5><p class="card-text">'+value.description+'</p><a href="#" class="btn btn-primary">Me apunto</a></div></div>')
       });
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
