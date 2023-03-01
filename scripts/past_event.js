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



const search = document.getElementById("search")
const btn_search = document.getElementById("btn_busqueda")

const filtrar = () => {
  tarjetas.innerHTML='';
  const texto = search.value.toLowerCase();
  arrayEvent.forEach((item) => {
    let nombre = item.name.toLowerCase();
    let descripcion=item.description.toLowerCase();
    if (nombre.indexOf(texto) !== -1 || descripcion.indexOf(texto) !== -1 ) {
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
  if(tarjetas.innerHTML===''){
    tarjetas.innerHTML+="No hay resultados, por favor modificar los filtros"
  }
}

search.addEventListener('keyup',filtrar)

filtrar();