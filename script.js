//alert("ya funciona el js");

 jqNuevo(window).on( "load",function () { 
    jqNuevo("#tarjeta").hide();
    jqNuevo("#tarjeta1").hide();
    jqNuevo("#contenedorTitulo").hide();
});

jqNuevo("#botoncito").on( "clic",function () { 
    jqNuevo("#descripcion").show();
});

/* $(window).on("mouseOut",function () { 
    $("#tarjeta").hide();
});

$(window).click(function () { 
    $("#tarjeta").hide();
});
 */

/* $(document).ready(function () {
    ("#tarjeta").hide();
});  */

//$("").onload(function(){
//$("#card").hide();
//});
            
let arreglo;

jqNuevo.ajax({
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
        $("#idInput").autocomplete({
            source: availableTags
        });
    }
});

           


let dataGlobal;

jqNuevo("#buscarPorId").click(function () {
    
    let idInput = jqNuevo("#idInput").val();
    
    jqNuevo.ajax({
        type: "GET",
        url: " https://pokeapi.co/api/v2/pokemon/" + idInput,
        dataType: "json",
        success: function (data) {   
            console.log(data);
            dataGlobal=data;
            jqNuevo("#chartContainer").remove();
            jqNuevo("#contenedor").text(data.name.toUpperCase());
            //$("#contenedorTitulo").text("Sé un maestro Pokemon con: ");
            //<!-- $("#contenedor").append("<p>" + data.name + "</p>"); -->
            jqNuevo("#idImagen").attr("src", data.sprites.other.dream_world.front_default);
                        
            jqNuevo("#tarjeta").show();
            jqNuevo("#tarjeta1").show();
            jqNuevo("#contenedorTitulo").show();
            // grafico 
            jqNuevo("#columna2").append("<div class='marginMio' id='chartContainer' style='height: 250px; width: 448px;'></div>");
            //$( "#chartContainer" ).insertBefore( ".footer" );
            
          

            console.log(dataGlobal);
            let vida=dataGlobal.stats[0].base_stat;
            let ataque=dataGlobal.stats[1].base_stat;
            let defensa=dataGlobal.stats[2].base_stat;
            let ataqueEspecial=dataGlobal.stats[3].base_stat;
            let defensaEspecial=dataGlobal.stats[4].base_stat;
            let velocidad=dataGlobal.stats[5].base_stat; 
        
            
        
            var chart = new CanvasJS.Chart("chartContainer", {
                theme: "light1", // "light2", "dark1", "dark2"
                animationEnabled: false, // change to true		
                title:{
                    text: "Características del Pokémon"
                },
                data: [
                {
                    // Change type to "bar", "area", "spline", "pie",etc.
                    type: "column",
                    dataPoints: [
                        { label: "Vida",  y: vida  },
                        { label: "Ataque", y: ataque  },
                        { label: "Defensa", y: defensa  },
                        { label: "Ataque Especial",  y: ataqueEspecial },
                        { label: "Defensa Especial",  y: defensaEspecial },
                        { label: "Velocidad",  y: velocidad }
                    ]
                }
                ]
            });
            chart.render();         

        }
    }).done(bien).fail(error);

});

function error() {
    jqNuevo("#idImagen").attr("src","assets/img/quienes.jpg");
    alert('Lo sentimos, ha ocurrido un error, no es un pokemon lo que escribiste :(');
    jqNuevo("#contenedor").text("¿Qué pokémon es?");
   
  }

function bien(){
    
}



/* 
window.onclick = function () {

    console.log(dataGlobal);
    let vida=dataGlobal.stats[0].base_stat;
    let ataque=dataGlobal.stats[1].base_stat;
    let defensa=200;
    let ataqueEspecial=150;
    let defensaEspecial=200;
    let velocidad=200; 

    

    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "light1", // "light2", "dark1", "dark2"
        animationEnabled: false, // change to true		
        title:{
            text: "Basic Column Chart"
        },
        data: [
        {
            // Change type to "bar", "area", "spline", "pie",etc.
            type: "column",
            dataPoints: [
                { label: "Vida",  y: vida  },
                { label: "Ataque", y: ataque  },
                { label: "Defensa", y: 25  },
                { label: "Ataque Especial",  y: 30  },
                { label: "Defensa Especial",  y: 28  },
                { label: "Velocidad",  y: 28  }
            ]
        }
        ]
    });
    chart.render();
    
    }; */