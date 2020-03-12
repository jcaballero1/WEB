$(function () {
    detectar();
 

});

function detectar(){
    $("#idAgregar").on('click',function(e){
       
        var vec=document.getElementsByClassName("val");
        if(vec[0].value=="" || vec[1].value=="" || vec[2].value=="" || vec[3].value==""){
            alert("todos los campos son obligatorios")
            return 0;
        }
        agregarPropietario(vec[0].value,vec[1].value,vec[2].value,vec[3].value)
        vec[0].value=""
        vec[1].value=""
        vec[2].value=""
        vec[3].value=""

    })
    $("#idbtnCancelar").on('click',function(event){
        var dat=document.getElementsByClassName("dataa");
        dat[0].value=""
        $("#iddivf").hide();
    });
    
}

function habilitarFromMascota(nom){
    $("#iddivp").hide();
    $("#iddivf").show();
    $("#idlabel").html(nom);
}

function agregarPropietario(d1,d2,d3,d4){
    
    $("#idTabla").append('<tr>'+
    '<td >'+
        d1+
    '</td>'+
    '<td>'+
    '<p>'+d2+'</p>'+
    '</td>'+
    '<td>'+
    '<p>'+d3+'</p>'+
    '</td>'+
    '<td>'+
    '<p>'+d4+'</p>'+
    '</td>'+
    '<td class="s">'+
        '<button id="btooo" class="btn agMascota"  >Agregar mascota</button>'+
    '</td>'+
'</tr>');
    var vec=document.getElementsByClassName("agMascota");
    
    for (var i=0; i<vec.length;i++) {
        
        vec[i].addEventListener('click',function (event){
            event.preventDefault();
            var nombre=$(this).closest('tr').children("td:nth-child(1)").html();
            var apellido=$(this).closest('tr').children("td:nth-child(2)").html();
            var nom=nombre+" "+apellido;
            habilitarFromMascota(nom);
            
        },false)
    }
}