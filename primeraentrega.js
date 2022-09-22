/*class Therapy{
    constructor(terapia,imagen,descripcion,precio,dia,terapeuta,contacto){
        this.terapia=terapia;
        this.imagen=imagen;
        this.descripcion=descripcion;
        this.precio=precio;
        this.dia=dia;
        this.terapeuta=terapeuta;
        this.contacto=contacto;
    }
}
const therapies=[
    new Therapy ("Armonizacion", "./img/armonizacion.jpg","La terapia de Reiki es beneficiosa para todos sin excepcion , no entorpece ningún tratamiento médico, por el contrario; lo complementa y potencia.", 800 ,"Lunes", "Victor", "xx@gmail.com" ),
    new Therapy ("Barras", "./img/barras.jpg","Comenzá a Crear una realidad diferente en tu vida , Sesiones de Barras Access®", 1500 ,"Miercoles", "Betina", "yy@gmail.com"),
    new Therapy ("Bioenergetico","./img/bioenergetico.jpg","Masaje bioenergético:ARMONÍA PARA CUERPO Y MENTE-El ritmo acelerado de vida está íntimamente relacionado con el estrés, del que no siempre somos conscientes, afectándonos en el día a día. Los masajes bioenergéticos restauran nuestra energía bajando los niveles de estrés mientras sentimos una mayor armonía y bienestar entre cuerpo y mente.", 800 , "Viernes", "Mabel", "xy@gmail.com")
]


function showTherapies(therapies) {
    const therapiesContainer=document.getElementById("therapies-container");
    therapiesContainer.innerHTML="";
    therapies.forEach(therapy => {
        const divTherapy=document.createElement("div");
        divTherapy.classList.add("therapy");
        divTherapy.innerHTML=`
        <img src="${therapy.imagen}" alt="${therapy.terapia}">
        <h3>${therapy.terapia} </h3>
        <p>Descripcion : ${therapy.descripcion} </p>
        <p>Precio : ${therapy.precio} </p>
        <p>Terapeuta : ${therapy.terapeuta} </p>
        `;
        const btnShow=createbtnShow(therapy)
        divTherapy.appendChild(btnShow);
        therapiesContainer.appendChild(divTherapy);

    })
}
showTherapies(therapies);
function showTherapies(therapies) {
    const therapiesContainer=document.getElementById("therapies-container");
    therapiesContainer.innerHTML="";
    therapies.forEach(therapy => {
        const divTherapy=document.createElement("div");
        divTherapy.classList.add("therapy");
        divTherapy.innerHTML=`
            <img src ="${therapy.imagen}" lt="${therapy.terapia}">
            <h3>${therapy.terapia} </h3>
            <p>Descripcion : ${therapy.descripcion} </p>
            <p>Precio : ${therapy.precio} </p>
            <p>Terapeuta : ${therapy.terapeuta} </p>

        `;
        const btnShow=createbtnShow(therapy)
        divTherapy.appendChild(btnShow);
        therapiesContainer.appendChild(divTherapy)
    });
}

function showDetails(therapy){
    const therapiesContainer=document.getElementById("therapies-container");
    therapiesContainer.innerHTML="";
    therapiesContainer.innerHTML=`
    <img src="${therapy.imagen}" alt="${therapy.terapia}">
    <h3>${therapy.terapia} </h3>
    <p>Descripcion : ${therapy.descripcion} </p>
    <p>Precio : ${therapy.precio} </p>
    <p>Terapeuta : ${therapy.terapeuta} </p>
    <p>Contacto: ${therapy.contacto} </p>
    `;
    
    
}
function createbtnShow (therapy){
    const button= document.createElement("button");
    button.innerText="Mostrar Mas";
    button.addEventListener("click",()=>{
        showDetails(therapy);
        createBackButton();
        reserveDate();
    })
    return button;
}

function createBackButton(){
    const btnBack=document.createElement("button");
    btnBack.classList.add("back-btn");
    btnBack.innerText="Atras";
    btnBack.addEventListener("click", ()=>{
        showTherapies(therapies);
    })
    document.getElementById("therapies-container").prepend(btnBack);
}
function reserveDate(){
    let reserve=document.createElement("input");
    reserve.setAttribute("type","datetime-local");
    //reserve.setAttribute("value","2022-09-01");
    document.body.appendChild(reserve);
}*/

class Therapy {
    constructor(terapia, precio, terapeuta, contacto) {
        this.terapia = terapia;
        this.precio = precio;
        this.terapeuta = terapeuta;
        this.contacto = contacto;
    }
}

let userId;

document.getElementById("therapiesForm").addEventListener("submit", handlerUserForm);

function handlerUserForm(e) {
    e.preventDefault();
    userId = document.getElementById("user").value;

    const therapyList = document.getElementById("therapyList");
    const therapies = JSON.parse(localStorage.getItem(userId));

    if (therapies == null) {
        therapyList.innerHTML = "<h1>No hay terapias para mostrar</h1>"
    } else {
        showTherapies(therapies);
    }
    showList();
}

function showTherapies(therapies) {
    let therapyList = document.getElementById("therapyList");
    therapyList.innerHTML = "";

    therapies.forEach(therapy => {
        let li = document.createElement("li");
        li.innerHTML = `
        <hr> ${therapy.terapia.toUpperCase()} - ${therapy.precio} $ - 
        ${therapy.terapeuta} - 
        <a href="${therapy.contacto}" target="blank"> Direccion de Correo </a>`;
        const btnDelete = createBtnDelete(therapy);
        li.appendChild(btnDelete);
        therapyList.appendChild(li);
    });
}

function createBtnDelete(therapy) {
    const btnDelete = document.createElement("button");
    btnDelete.innerText = "Borrar";
    btnDelete.addEventListener("click", () => {
        deleteTherapy(therapy);
    })
    return btnDelete;
}

function showList() {
    const options = document.getElementById("options");

    options.innerHTML =
        `<h3>Bienvenido ${userId}</h3>
        <form id="therapiesForm">
        <input type="text" id="terapia" placeholder="Terapia">
        <input type="number" id="precio" placeholder="Precio">
        <input type="text" id="terapeuta" placeholder="Terapeuta">
        <input type="text" id="contacto" placeholder="E-mail">
        <button type="submit">Agregar Servicio</button>
        </form>`;

    document.getElementById("therapiesForm").addEventListener("submit", addTherapy);
}

function validateData(therapy) {
    if (therapy.terapia == "") {
        alert("La terapia no puede estar vacia")
    }
}

function addTherapy(e) {
    e.preventDefault();
    const terapia = document.getElementById("terapia").value;
    const precio = document.getElementById("precio").value;
    const terapeuta = document.getElementById("terapeuta").value;
    const contacto = document.getElementById("contacto").value;

    const therapy = new Therapy(terapia, precio, terapeuta, contacto);

    validateData(therapy)

    const therapiesInLocalStorage = JSON.parse(localStorage.getItem(userId));
    if (therapiesInLocalStorage == null) {
        localStorage.setItem(userId, JSON.stringify([therapy]));
        showTherapies([therapy]);
    } else {
        therapiesInLocalStorage.push(therapy);
        localStorage.setItem(userId, JSON.stringify(therapiesInLocalStorage));
        showTherapies(therapiesInLocalStorage);
    }
    e.target.reset();
}

function deleteTherapy(therapy) {
    const therapiesInLocalStorage = JSON.parse(localStorage.getItem(userId));
    const nuevoArray = therapiesInLocalStorage.filter(item => item.titulo != therapy.titulo);
    localStorage.setItem(userId, JSON.stringify(nuevoArray));
    showTherapies(nuevoArray);
}