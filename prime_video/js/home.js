function abrirMenu(){
    var manipulation = document.getElementById("menuhover").style;
    var escondeforme = document.getElementById("input_form").style;
    escondeforme.display = "none";
    manipulation.display = "flex";

}
function globalFechaMenu(){
    var manipulation = document.getElementById("menuhover").style;
    manipulation.display = "none";
}
function formulario(){
    var manipulation = document.getElementById("input_form").style;
    var manipulation2 = document.getElementById("menuhover").style;
    manipulation.display = "flex";
    manipulation2.display = "none";
    document.getElementById("inputform").focus();

}
function scripts(){
    var manipulation = document.getElementById("input_form").style;
    manipulation.display = "none";
    var manipulation2 = document.getElementById("menuhover").style;
    manipulation2.display = "none";
}