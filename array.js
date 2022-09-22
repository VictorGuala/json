let selected;
const time = [
    "Mañana", "Vespertino", "Tarde"
];
const days = [
    "Lunes", "Miercoles", "Viernes",
];
const staff = [
    "Betina", "Victor", "Mabel"
];
let therapists = [{
        id: 1,
        day: 1,
        hour: 1,
        user: 1,
    },
    {
        id: 2,
        day: 3,
        hour: 2,
        user: 2,
    }
];
while (selected !== 0) {
    selected = Number(prompt("Bienvenidos a Espacio Getsha ❤️❤️Que desea realizar ?? \n 1-Agregar Cita\n 2- Ver Cita\n 3-Borrar Cita \n 4- Contratar Servicio\n 0- Salir"));
    switch (selected) {
        case 1:
            const day = Number(prompt("Ingrese que dia se atiende?\n1- Lunes \n 2-Miercoles \n 3-Viernes"));
            const hour = Number(prompt("Ingrese el Horario a realizar el servicio?\n1- Mañana\n2- Vespertino\n3-Tarde"));
            const user = Number(prompt("Ingrese el terapeuta con el cual desea ser atendido \n 1- Betina \n 2- Victor \n 3- Mabel"));
            const createId = lastId() + 1;
            addCites(createId, day, hour, user)
            console.table(therapists)
            break;

        case 2:
            allCites();
            break;

        case 3:
            let deletedId = Number(prompt("Ingrese el numero de Id a ELIMINAR"));
            deleteCite(deletedId);
            console.table(therapists);
            break;
        case 4:
            //Simulador Carrito
            const separador = ", ";
            let service = []
            let products = [{
                    name: "Masaje Energetico",
                    provided: "betina"
                },
                {
                    name: "Reiki",
                    provided: "victor"
                },
                {
                    name: "Hipnosis",
                    provided: "mabel"
                },
                {
                    name: "Piedras Calientes",
                    provided: "betina"
                },
                {
                    name: "Barras",
                    provided: "betina"
                },
            ]
            let reset, payment, tips, confirm;
            let cost = 0;

            function tipsFunc(tipValue) {
                tips = tipValue
                while (isNaN(tips) || tips == "") {
                    tips = prompt("Ingrese un valor correcto expresado en números")
                }
                return parseInt(tips)
            }
            while (true) {
                let welcome = prompt("Bienvenidos a Espacio Terapeutico Getsha ❤️ Desea usted ver listado  y precios de nuestros servicios?? Ingrese 'si/no'").toLowerCase()
                if (welcome == "si") {
                    while (reset != "no") {
                        let buy = parseInt(prompt("Si desea agregar uno de los servicios ingrese su número\n1) Masaje Energetico\n2) Reiki \n3)Hipnosis \n4) Piedras Calientes \n5) Barras"))
                        if (buy != "1" && buy != "2" && buy != "3" && buy != "4" && buy != "5") {
                            alert("Debe ingresar un valor correcto")
                            continue
                        }
                        switch (buy) {
                            case 1:
                                service.push("Masaje Energetico")
                                cost += 1500
                                break;
                            case 2:
                                service.push("Reiki")
                                cost += 800
                                break;
                            case 3:
                                service.push("Hipnosis")
                                cost += 2000
                                break;
                            case 4:
                                service.push("Piedras Calientes")
                                cost += 1800
                                break;
                            case 5:
                                service.push("Barras")
                                cost += 3500
                                break;
                        }
                        reset = prompt(`Sus servicio incluye:\n${service.join(separador)}\nDesea seguir comprando? (si/no)`)
                        while (reset != "si" && reset != "no") {
                            reset = prompt(`Desea seguir comprando?\nDebe ingresar si/no`)
                        }
                    }
                    const opcion1 = cost,
                        opcion2 = cost - cost * 0.1,
                        opcion3 = cost - cost * 0.3;
                    while (true) {
                        payment = prompt(`Su compra final es de:\n${service.join(separador)}\n 1- Precio final credito $${opcion1}\n 2- Precio final en efectivo -10% $${opcion2}\n 3- Precio final con Mercado Pago -30% $${opcion3}\nCómo desea abonar?`)
                        let tip = 0;
                        switch (payment) {
                            case "1":
                                alert(`Su ticket final es de $${opcion1}`)
                                tip = tipsFunc(prompt("Ingrese propina por el servicio"))
                                alert(`Información de su Servicio:\nProductos:\n${service.join(separador)}\nMonto final más propina: $${opcion1 + tip}\n\n\n¡¡¡Gracias por su compra!!!`)
                                break
                            case "2":
                                alert(`Su ticket final es de $${opcion2}`)
                                tip = tipsFunc(parseInt(prompt("Ingrese propina por el servicio")))
                                alert(`Información de su pedido:\nProductos:\n${service.join(separador)}\nMonto final más propina: $${opcion2 + tip}\n\n\n¡¡¡Gracias por su compra!!!`)
                                break
                            case "3":
                                alert(`Su ticket final es de $${opcion3}`)
                                tip = tipsFunc(parseInt(prompt("Ingrese propina por el servicio")))
                                alert(`Información de su pedido:\nProductos:\n${service.join(separador)}\nMonto final más propina: $${opcion3 + tip}\n\n\n¡¡¡Gracias por su compra!!!`)
                                break
                            default:
                                alert("Debe ingresar una opción correcta")
                                continue
                        }
                        break
                    }
                    break
                } else if (ingreso == "no") {
                    alert("Gracias por visitarnos. Lo/a esperamos cuando guste 😊. Hasta pronto!")
                    break
                } else {
                    alert("La respuesta debe ser si/no")
                }
            }
            console.log(service)

            // Busqueda por Nombre
            const answer = prompt("¿Antes de irse, desea buscar en nuestra base de datos algún terapeuta en particular???(si/no)")

            if (answer == "si") {
                const therapists = prompt("¿Qué terapeuta desea ?");
                resp = products.find(x => x.provided == therapists);
                if (resp != undefined) {
                    alert(`El Terapeuta ${resp.provided} realiza los servicios ${resp.name}. Se encuentra en nuestro staff`)
                } else {
                    alert(`El personaje no se encuentra en stock`)
                }
            };
            break;
        case 0:
            alert("Gracias por visitarnos 😊❤️");
            break;
        default:
            alert("Ingrese el dato correcto !!!❤️");
            break;
    };
};

function addCites(id, day, hour, user) {
    therapists.push({
        id,
        day,
        hour,
        user
    });
    alert("Cita creada con exito 😊 identificador" + id);
}

function lastId() {
    const index = therapists.map(therapists => therapists.id);
    return Math.max(...index);

}

function allCites() {
    let message = "-----------------------------\n";
        therapists.forEach((therapist) => message += (therapist.id + " - " + days[therapist.day - 1] + " - " + time[therapist.hour - 1] + " - " + staff[therapist.user - 1] + "\n"));
        alert(message);
    /*const list= document.getElementById(`list`);
        for (id of therapists){
            const item = document.createElement(`li`)
            item.innerHtml =`"<h3>${therapist.id}</h3> -
            <p>${days[therapist.day - 1]}</p> -
            <p>${time[therapist.hour - 1]}</p> -
            <p>${staff[therapist.user - 1]}</p>"`
            list.append(menu); 
            }*/
}

function deleteCite(id) {
    therapists = therapists.filter(therapists => therapists.id != id);
}
9107002