const separador = ", ";
let service = []
let products = [
	{ name: "Masaje Energetico", provided: "betina" },
	{ name: "Reiki", provided: "victor" },
	{ name: "Hipnosis", provided: "mabel" },
	{ name: "Piedras Calientes", provided: "betina" },
	{ name: "Barras", provided: "betina" },
]
let reset, payment, tips;
let cost = 0;
function tipsFunc(tipValue) {
	tips = tipValue
	while (isNaN(tips) || tips == "") {
		tips = prompt("Ingrese un valor correcto expresado en números")
	}
	return parseInt(tips)
}
while (true) {
	let welcome = prompt("Bienvenidos a Espacio Terapeutico Getsha ❤️ Tenemos una lista de servicios disponibles. Si desea ver nuestro Listado ingrese 'si/no'").toLowerCase()
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
					service.push("BArras")
					cost += 3500
					break;
			}
			reset = prompt(`Sus servicio incluye:\n${service.join(separador)}\nDesea seguir comprando? (si/no)`)
			while (reset != "si" && reset != "no") {
				reset = prompt(`Desea seguir comprando?\nDebe ingresar si/no`)
			}
		}
		const opcion1 = cost, opcion2 = cost - cost * 0.1, opcion3 = cost - cost * 0.3;
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
			} break
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

const answer = prompt("¿Antes de irse, desea buscar en nuestra base de datos algún terapeuta en particular???(si/no)")

if (answer == "si") {
	const therapists = prompt("¿Qué terapeuta desea ?").toLowerCase;
	const resp = products.find(x => x.provided == therapists);
	if (resp != undefined) {
		alert(`El Terapeuta ${resp.provided} realiza los servicios ${resp.name} sí se encuentra en nuestro estaff`)
	} else {
		alert(`El personaje no se encuentra en stock`)
	}
}