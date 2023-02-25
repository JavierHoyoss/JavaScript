//   upcoming events
arrayUpEvent=[];

for(let i=0; i<data.events.length;i++){
    if(data.currentDate<data.events[i].date){
        arrayUpEvent.push(data.events[i])
  }
  }

console.log(arrayUpEvent)

const tarjetas = document.querySelector(".tarjetas");

const arrayEvent = arrayUpEvent;

const fragment= document.createDocumentFragment();

arrayEvent.forEach((item) => {

  const tarjeta = document.createElement("div");
  tarjeta.className="tarjeta";
  const imgDiv=document.createElement("div");
  imgDiv.className="cardimg";
  const img=document.createElement("img");
  img.src=item.image;
  img.alt=item.category;
  const card=document.createElement("div");
  card.className="card";
  const cardtitulo=document.createElement("div");
  cardtitulo.textContent=item.name;
  cardtitulo.className="cardtitulo";
  const cardtxt=document.createElement("div");
  cardtxt.className="cardtxt";
  const p =document.createElement("p");
  p.textContent=item.description;
  const p2 =document.createElement("p");
  p2.innerHTML="<b>Price:</b> $" + item.price + "<br> <b>Place: </b>" + item.place;
  const link=document.createElement("a");
  link.href="./details.html";
  link.textContent="Details";


  tarjeta.appendChild(imgDiv);
  imgDiv.appendChild(img);
  tarjeta.appendChild(card);
  card.appendChild(cardtitulo);
  card.appendChild(cardtxt);
  cardtxt.appendChild(p);
  cardtxt.appendChild(p2);
  cardtxt.appendChild(link);
  
  fragment.appendChild(tarjeta);
});

tarjetas.appendChild(fragment);