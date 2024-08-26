var guardar = document.getElementById("guardar")

function aparecer(){
    var stanbdy= document.getElementById ("niño__texto")
    var texto= document.getElementById ("resultados")
    if (stanbdy.style.display === "none") {
        stanbdy.style.display = "block";
        resultados.style.display = "none"
        }
        else {
            stanbdy.style.display = "none";
            resultados.style.display = "block"
        }
}
function codificar(texto){
    let lista = []
    let longitudText = texto.length
    for (i=0; i<=longitudText-1; i++){
        if (texto[i] == 'a'){
            lista.push('ai')
        }else if (texto[i] =='e'){
            lista.push("enter")
        }else if (texto[i] =="i"){
            lista.push("imes")
        }else if (texto[i] =="o"){
            lista.push("ober")
        }else if (texto[i] =="u"){
            lista.push('ufat')
        }
        else{
            lista.push(texto[i])
        }
    }
    return lista.join("")
}
function decodificar(texto){
    let lista = []
    let longitudText = texto.length
    for (i=0; i<=longitudText-1; i++){
        if (texto[i] == 'a'){
            lista.push('a')
            i=i+1
        }else if (texto[i] =='e'){
            lista.push("e")
            i=i+4
        }else if (texto[i] =="i"){
            lista.push("i")
            i=i+3
        }else if (texto[i] =="o"){
            lista.push("o")
            i=i+3
        }else if (texto[i] =="u"){
            lista.push('u')
            i=i+3
        }
        else{
            lista.push(texto[i])
        }
    }
    return lista.join("")
}
function asignar(elemento, texto){
    return elemento.innerHTML = texto
}

function boton1(){
    aparecer()
    asignar(guardar, codificar(document.getElementById("usuario").value))
    return
}

function boton2(){
    aparecer()
    asignar(guardar, decodificar(document.getElementById("usuario").value))
    return
}