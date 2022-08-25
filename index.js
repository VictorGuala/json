/*
Menu Maquina dispensadora de bebidas
*/

let name = prompt("Como es tu nombre??");
if (name ==""){
    alert("Ingresa tu nombre por favor!!! 😊");
}
else{
    let drink= prompt(name + " que bebida quieres? agua , cafe , te").toLowerCase();
    if (drink == ""){
        alert("Ingresa la bebida deseada");
    }
    else if (drink == "agua"){
        alert("Retira " + drink + " del dispensador")
    }
    else if (drink == "cafe"){
        alert("Retira " + drink + " del dispensador")
    }
    else if (drink == "te"){
        alert("Retira " + drink + " del dispensador")
    }
    else{
        alert("No tenemos " + drink + " en este dispensador")
    }
}

