function visitor (){
    alert ("Bienvenido a Espacio Terapeutico Getsha❤️");
    let visitorName = prompt("Cual es tu nombre");
    while(visitorName === "") {
        visitorName = prompt("Cual es tu nombre");
    }
}
function selectedItems (){
    let items;
    do {
        items = parseInt(prompt("Que Servicio quiere adquirir?: \n 1- Piedras Calientes \n 2- Reiki \n 3- Hipnosis"))
    }
    while (items != 1 && items != 2 && items != 3)
    switch(items){
        case 1 :
            return "Piedras Calientes";
        case 2 :
            return "Reiki";
        case 3 :
            return "Hipnosis";
    }
}
function prices (items){
    if (items === "Piedras Calientes"){
        return 1500;
    }
    else if (items === "Reiki"){
        return 1200;
    }
    else if (items === "Hipnosis"){
        return 2500;
    }
}
function payment (items, prices){
    alert("Usted a elegido el siguiente servicio " + items + "\n Precio " + prices);
    let pay = parseInt(prompt("Con cuanto abonas??? 💵"));
    if (pay >= prices){
        alert ("Gracias por su compra");
    }
    else {
        alert ("Dinero insuficiente faltan "+ (prices - pay));
    }
}
visitor();
let itemsName = selectedItems();
let itemsPrices = prices(itemsName);
payment (itemsName,itemsPrices);