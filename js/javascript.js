function ingresarFruta(fruta){   
var fruta=document.getElementById("fruta").value;     
var capa = document.getElementById("capa");
var h1 = document.createElement("li");
h1.innerHTML = fruta;
capa.appendChild(h1);
}