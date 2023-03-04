//   upcoming events
let arrayPastEvent=[];

for(let i=0; i<data.events.length;i++){
    if(data.currentDate>data.events[i].date){
        arrayPastEvent.push(data.events[i])
  }
  }

const tarjetas = document.querySelector(".tarjetas");
const arrayEvent = arrayPastEvent;
const fragment= document.createDocumentFragment();

let categorias = [];
arrayEvent.forEach((item) => {
  categorias.push(item.category)
})
//filtro las categorias para usar el template
const catFiltrada = categorias.filter((valor, indice) => {
  return categorias.indexOf(valor) === indice;
}
);

//template de las categorias
const checkboxes = document.querySelector(".checkboxes");
const template = document.querySelector(".checkbox").content;

catFiltrada.forEach((item) => {
  template.querySelector("label").textContent = item;
  template.querySelector("label").setAttribute("for", item);
  template.querySelector("input").id = item;


  const clone = template.cloneNode(true);
  fragment.appendChild(clone);
})
checkboxes.appendChild(fragment);


//filtrado de eventos
const search = document.getElementById("search")
const btn_search = document.getElementById("btn_busqueda")
const checks = document.querySelectorAll(".check");

const filtrar = () => {
  const selectedCategories = Array.from(checks)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.id);
  // Filtrar los eventos
  const filteredEvents = arrayEvent.filter(
    (event) =>
      (selectedCategories.length === 0 ||
        selectedCategories.includes(event.category))
  );
  tarjetas.innerHTML = ''; 
  const texto = search.value.toLowerCase();
  //filtrado por input de busqueda
  filteredEvents.forEach((item) => {
    let nombre = item.name.toLowerCase();
    let descripcion = item.description.toLowerCase();
    if (nombre.indexOf(texto) !== -1 || descripcion.indexOf(texto) !== -1) {
      const tarjeta = document.createElement("div");
      tarjeta.className = "tarjeta";
      const imgDiv = document.createElement("div");
      imgDiv.className = "cardimg";
      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.category;
      const card = document.createElement("div");
      card.className = "card";
      const cardtitulo = document.createElement("div");
      cardtitulo.textContent = item.name;
      cardtitulo.className = "cardtitulo";
      const cardtxt = document.createElement("div");
      cardtxt.className = "cardtxt";
      const p = document.createElement("p");
      p.textContent = item.description;
      const p2 = document.createElement("p");
      p2.innerHTML = "<b>Price:</b> $" + item.price + "<br> <b>Place: </b>" + item.place;
      const link = document.createElement("a");
      link.href = "./details.html";
      link.textContent = "Details";
      link.dataset.id = item._id;


      tarjeta.appendChild(imgDiv);
      imgDiv.appendChild(img);
      tarjeta.appendChild(card);
      card.appendChild(cardtitulo);
      card.appendChild(cardtxt);
      cardtxt.appendChild(p);
      cardtxt.appendChild(p2);
      cardtxt.appendChild(link);

      fragment.appendChild(tarjeta);
    }
    tarjetas.appendChild(fragment);
  })
  if (tarjetas.innerHTML === '') {
    tarjetas.innerHTML += "No hay resultados, por favor modificar los filtros"
  }
} 


search.addEventListener('keyup', filtrar)
//verificar chech del checkbox
checks.forEach((checkbox) =>checkbox.addEventListener("change", filtrar));

filtrar();

