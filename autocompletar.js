
let arreglo;

$.ajax({
    type: "get",
    url: "https://pokeapi.co/api/v2/pokemon?limit=500&offset=0",
    //data: "data", solo cuando envio
    dataType: "json",
    success: function (response) {
        console.log(response);
        arreglo = response.results.map(function (x) {
            return x.name;
        });
        var availableTags = arreglo;
        $("#tags").autocomplete({
            source: availableTags
        });
    }
});

var valor = $("#tags").val();

$("#boton").click(function (idInput) { 
    
    e.preventDefault();
    
});






/* $("#boton").click(function () {
    console.log(arreglo);
    var availableTags = arreglo;
    $("#tags").autocomplete({
        source: availableTags
    });
}); */


/*  $( function() {
   console.log(arreglo);
   var availableTags = arreglo ;
   $( "#tags" ).autocomplete({
     source: availableTags
   });
 } ); alt shif A Comentar...... alt shif F identar*/
