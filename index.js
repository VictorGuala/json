/*
Menu Maquina dispensadora de bebidas
*/
let name =prompt("Ingresa tu nombre");
let drink 
do{
    console.log("1- Cafe \n 2- Te \n 3- Agua \n 0- Salir");
    drink = Number (prompt(name + " elige una bebida"));
    switch (drink){
        case 0:
            console.log ("Gracias por elegirnos");
        break;
        case 1:
            console.log ("Recoge tu cafe del dispensador");
        break;
        case 2 :
            console.log ("Recoge tu Te del dispensador");
        break;
        case 3 :
            console.log("Recoge tu Agua del dispensador");
        break;
        default:
            console.log("Elige una opcion correcta");
        break;
    }
}while (drink !==0);