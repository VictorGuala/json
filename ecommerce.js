class Therapy{
    constructor(terapia,imagen,descripcion,precio,dia,terapeuta){
        this.terapia=terapia;
        this.imagen=imagen;
        this.descripcion=descripcion;
        this.precio=precio;
        this.dia=dia;
        this.terapeuta=terapeuta;
    }
}
const therapies=[
    new Therapy ("Armonizacion", "./img/armonizacion.jpg","La terapia de Reiki es beneficiosa para todos sin excepcion , no entorpece ningún tratamiento médico, por el contrario; lo complementa y potencia.", 800 ,"Lunes", "Victor" ),
    new Therapy ("Barras", "./img/barras.jpg","Comenzá a Crear una realidad diferente en tu vida , Sesiones de Barras Access®", 1500 ,"Miercoles", "Betina"),
    new Therapy ("Bioenergetico","./img/bioenergetico.jpg","Masaje bioenergético:ARMONÍA PARA CUERPO Y MENTE-El ritmo acelerado de vida está íntimamente relacionado con el estrés, del que no siempre somos conscientes, afectándonos en el día a día. Los masajes bioenergéticos restauran nuestra energía bajando los niveles de estrés mientras sentimos una mayor armonía y bienestar entre cuerpo y mente.", 800 , "Viernes", "Mabel")
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
function showDetails(therapy){
    const therapiesContainer=document.getElementById("therapies-container");
    therapiesContainer.innerHTML="";
    therapiesContainer.innerHTML=`
    <img src="${therapy.imagen}" alt="${therapy.terapia}">
    <h3>${therapy.terapia} </h3>
    <p>Descripcion : ${therapy.descripcion} </p>
    <p>Precio : ${therapy.precio} </p>
    <p>Terapeuta : ${therapy.terapeuta} </p>
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
}





//=======================================================
/*const therapy1=new Therapy ("Armonizacion", "./img/armonizacion.jpg","La terapia de Reiki es beneficiosa para todos sin excepcion , no entorpece ningún tratamiento médico, por el contrario; lo complementa y potencia.", 800 ,"Lunes", "Victor" );
const therapy2=new Therapy ("Barras", "./img/barras.jpg","Comenzá a Crear una realidad diferente en tu vida , Sesiones de Barras Access®", 1500 ,"Miercoles", "Betina");
const therapy3=new Therapy ("Bioenergetico","./img/bioenergetico.jpg","Masaje bioenergético:ARMONÍA PARA CUERPO Y MENTE-El ritmo acelerado de vida está íntimamente relacionado con el estrés, del que no siempre somos conscientes, afectándonos en el día a día. Los masajes bioenergéticos restauran nuestra energía bajando los niveles de estrés mientras sentimos una mayor armonía y bienestar entre cuerpo y mente.", 800 , "Viernes", "Mabel");

const therapies = []

therapies.push(therapy1);
therapies.push(therapy2);
therapies.push(therapy3 );
*/