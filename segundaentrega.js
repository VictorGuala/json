class Therapy {
  constructor(titulo, duracion,terapeuta, contacto) {
    this.titulo = titulo;
    this.duracion = duracion;
    this.terapeuta = terapeuta;
    this.contacto = contacto;
  }
}

let userId;

document.getElementById("userForm").addEventListener("submit", handlerUserId);

function handlerUserId(e) {

  e.preventDefault();
  userId = document.getElementById("user").value;

  const therapyList = document.getElementById("therapyList");
  const therapies = JSON.parse(localStorage.getItem(userId));

  if (therapies == null) {
    therapyList.innerHTML = "<h1>No hay terapias para mostrar</h1>"
  } else {
    showTherapies(therapies);
  }
  showPanel();
}

function showTherapies(therapies) {
  let therapyList = document.getElementById("therapyList");
  therapyList.innerHTML = "";

  therapies.forEach(prueba => {
    let li = document.createElement("li");
    li.innerHTML = `
    <hr> ${prueba.titulo.toUpperCase()} - ${prueba.duracion} minutos - 
    ${prueba.terapeuta} - 
    <a href="${prueba.contacto}" target="blank"> Correo Electornico </a>`;
    const btnDelete = createBtnDelete(prueba);
    li.appendChild(btnDelete);
    therapyList.appendChild(li);
  });
}

function createBtnDelete(therapy){
  const btnDelete = document.createElement("button");
    btnDelete.innerText = "Eliminar";
    btnDelete.addEventListener("click", () => {
      deleteTherapy(therapy);
    })
    return btnDelete;
}

function showPanel() {
  const options = document.getElementById("options");

  options.innerHTML =
    `<h3>Bienvenido ${userId}</h3>
    <form id="therapyForm">
      <input type="text" id="titulo" placeholder="Terapia">
      <input type="number" id="duracion" placeholder="Duracion">
      <input type="text" id="terapeuta" placeholder="Terapeuta">
      <input type="text" id="contacto" placeholder="Contacto">
      <button type="submit">Agregar Terapia</button>
    </form>`;

  document.getElementById("therapyForm").addEventListener("submit", addTherapy);
}

function validateData(therapy) {
  if(therapy.titulo == ""){
    alert("La terapia no puede ser vacio")
  }
}

function addTherapy(e) {
  e.preventDefault();
  const titulo = document.getElementById("titulo").value;
  const duracion = document.getElementById("duracion").value;
  const terapeuta = document.getElementById("terapeuta").value;
  const contacto = document.getElementById("contacto").value;

  const therapy = new Therapy(titulo, duracion, terapeuta, contacto);

  validateData(therapy)

  const therapiesLocalStorage = JSON.parse(localStorage.getItem(userId));

  if (therapiesLocalStorage == null) {
    localStorage.setItem(userId, JSON.stringify([therapy]));
    showTherapies([therapy]);
  } else {
    therapiesLocalStorage.push(therapy);
    localStorage.setItem(userId, JSON.stringify(therapiesLocalStorage));
    showTherapies(therapiesLocalStorage);
  }
  e.target.reset();
}

function deleteTherapy(therapy) {
  const therapiesLocalStorage = JSON.parse(localStorage.getItem(userId));
  const newArray = therapiesLocalStorage.filter(item => item.titulo != therapy.titulo);
  localStorage.setItem(userId, JSON.stringify(newArray));
  showTherapies(newArray);
}