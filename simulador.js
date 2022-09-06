/* 
Simulador de venta de productos y servicios. Estarán disponibles 8 servicios, cada uno con su valor. 
La persona podrá agregar al carro de buys todos los productos que desee . Cuando agregue un producto,
aparecerá en alert una lista tipo carro de buys con lo elegido al momento. Tambien se podra elimnar lo adquirido.
En caso de pagar en efectivo se le hará un 10% de descuento sobre el monto total.*/
let service = []
let typeServices = [
    {name: "Piedras Calientes", type: "Masajes"},
    {name: "Reiki", type: "Cursos"},
    {name: "BioEnergetico", type: "Masajes"},
    {name: "Hipnosis", type: "Terapia"},
    {name: "Reiki Grado I", type: "Cursos"},
]
let cost = 0
let reset;
let payment;

while (true) {
    let enter = prompt("Bienvenidos a Espacio Getsha Uruguay❤️ . Si desea ver nuestros servicios ingrese 'si/no'").toLowerCase()
    if (enter == "si") {
        while (reset != "no") {
            let buy = parseInt(prompt("Si desea agregar uno de los servicios ingrese su número correspondiente \n 1) Piedras Calientes $1000 \n 2)Reiki $2000\n 3) Bioenergetico $1250 \n 4) Hipnosis $3000 \n 5) Reiki Grado I $5500"))
            if (buy != "1" && buy != "2" && buy != "3" && buy != "4" && buy != "5" ) {
                alert("Debe ingresar un valor correcto")
                continue
            }
            switch (buy) {
                case 1:
                    service.push("Piedras Calientes\n")
                    cost += 1000
                    break;
                case 2:
                    service.push("Reiki\n")
                    cost += 2000
                    break;
                case 3:
                    service.push("Bioenergetico\n")
                    cost += 1250
                    break;
                case 4:
                    service.push("Hipnosis\n")
                    cost += 3000
                    break;
                case 5:
                    service.push("Reiki Grado I\n")
                    cost += 5500
                    break;
            }
            reset = prompt(`Su carrito incluye:\n${service.join("")}\nDesea seguir comprando? (si/no)`)
            while (reset != "si" && reset != "no") {
                reset = prompt(`Desea seguir comprando?\nDebe ingresar si/no`)
            }
        }        
        while (true) {
            payment = prompt(`Su compra final es de:\n${service.join("")}\n 1- Precio final credito $${cost}\n 2- Precio final en efectivo -10% $${cost - cost * 0.1}\n 3- Precio final con Oca -30% $${cost - cost * 0.3}\nCómo desea abonar?`).toLowerCase()
            switch (payment) {
                case "1":
                    alert(`Su ticket final es de $${cost}`)
                    alert(`Información de su pedido:\nProductos:\n${service.join("")}\nMonto final  $${cost}\n\n\n¡¡¡Gracias por su compra!!!`)
                    break
                case "2":
                    alert(`Su ticket final es de $${cost - cost * 0.1}`)
                    alert(`Información de su pedido:\n Productos:\n ${service.join("")}\n Monto final : $${cost - cost * 0.1}\n\n\n¡¡¡Gracias por su compra!!!`)
                    break
                case "3":
                    alert(`Su ticket final es de $${cost - cost * 0.3}`)
                    alert(`Información de su pedido:\nProductos:\n${service.join("")}\n Monto final : $${cost - cost * 0.3}\n\n\n¡¡¡Gracias por su compra!!!`)
                    break
                default:
                    alert("Debe ingresar una opción ")
                    continue
            } break
        }
        break
    } else if (enter == "no") {
        alert("Gracias por visitarnos. Le dejamos nuestro teléfono de contacto ")
        break
    } else {
        alert("La respuesta debe ser si/no")
    }
}