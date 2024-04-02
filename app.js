const sendButton = document.getElementById("snd-nota");

sendButton.addEventListener("click", ()=>{
    let resultado,mensaje;
    try{
        prevRes = parseInt(document.getElementById("nota").value);
        if (isNaN(prevRes)){
            throw "Grasioso";
        }
        resultado = verificarAprovacion(8,5,mensaje);
        mensaje = definirMensaje(resultado[1]);
    }catch(e){
        resultado = "No se puede digitar letras";
        mensaje = "He descubirto que trataste de hackear el sitio"
    }
    abrirModal(resultado[0],mensaje);
});

const definirMensaje = (pr)=>{
    let resultado;
    switch(pr){
        case 1: resultado = "No puedes ser tan hijo de puta";
        break;
        case 2: resultado = "Eres malisimo para mi materia";
        break;
        case 3: resultado = "No sabes casi nada";
        break;
        case 4: resultado = "Muy mal";
        break;
        case 5: resultado = "mal";
        break;
        case 6: resultado = "Regular";
        break;
        case 7: resultado = "No se puede ser tan hpta";
        break;
        case 8: resultado = "Bien, pero puedes mejorar";
        break;
        case 9: resultado = "1Muy bien¡";
        break;
        case 10: resultado = "!Insuperable hijo de puta¡";
        break;
        default: resultado = null;
    }
    return resultado;
}

const verificarAprovacion = (nota1,nota2,prevRes)=>{
    promedio = (nota1 + nota2 + prevRes) / 3;
    if (promedio >= 7){
        return ["<span class='green'>APROBADO</span>"];
    }
    return ["<span class='red'>DESAPROBADO</span>"];
}

const abrirModal = (res,msg)=>{
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML = "Tu prueba: "+ msg;
    let modal = document.querySelector(".modal-background");
    modal.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards";
}