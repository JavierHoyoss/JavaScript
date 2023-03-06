const arrayEvent = data.events;

const queryString = location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const evento=arrayEvent.find(even=>even._id==id);

console.log(evento)

const details = document.querySelector(".carddet");
const template = document.querySelector(".carddet").content;


template.querySelector("img").src=evento.image;
template.querySelector("figcaption").textContent=evento.name;
template.querySelector("h2").textContent=evento.name;
template.querySelector("p").textContent=evento.description;



const clone = template.cloneNode(true);

details.appendChild(clone);