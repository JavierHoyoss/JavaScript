let urlAPI = "https://mindhub-xj03.onrender.com/api/amazing";

let categorias = [];


async function getData() {
    try {
        let respuesta = await fetch(urlAPI)
        let datos = await respuesta.json()
        let arrayEvent = datos.events
        console.log(arrayEvent)
        let mayor = getBigger(arrayEvent);
        console.log(mayor.capacity);
        let mayorPor = mayorPorcentaje(arrayEvent);
        console.log(mayorPor.name);
        let menorPor = menorPorcentaje(arrayEvent);
        console.log(menorPor.name);

        let container = document.querySelector(".eventos");
        let tableBodyHTML = "";

        tableBodyHTML += `<tr>
        <td>${mayorPor.name}</td>
        <td>${menorPor.name}</td>
        <td>${mayor.name}</td>
        
    </tr>`;

        container.innerHTML = tableBodyHTML;
    } catch {
        console.log('ocurrio un error con mi api')
    }
}

getData()

function getBigger(data) {
    return data.reduce((acumulador, valorActual) => {
        if (valorActual.capacity > acumulador.capacity) {
            return valorActual;
        } else {
            return acumulador;
        }

    });
}

function mayorPorcentaje(data) {
    return data.reduce((acumulador, valorActual) => {
        if (valorActual.assistance / valorActual.capacity > acumulador.assistance / acumulador.capacity) {
            return valorActual;
        } else {
            return acumulador;
        }

    });
}

function menorPorcentaje(data) {
    return data.reduce((acumulador, valorActual) => {
        if (valorActual.assistance / valorActual.capacity < acumulador.assistance / acumulador.capacity) {
            return valorActual;
        } else {
            return acumulador;
        }

    });
}

async function getData2() {
    try {
        let respuesta = await fetch(urlAPI)
        console.log(respuesta)
        let datos = await respuesta.json()
        console.log(datos.events)

        //   upcoming events
        let arrayPastEvent = [];

        for (let i = 0; i < datos.events.length; i++) {
            if (datos.currentDate < datos.events[i].date) {
                arrayPastEvent.push(datos.events[i])
            }
        }

        const arrayEvent = arrayPastEvent;

        let categorias = [];
        arrayEvent.forEach((item) => {
            categorias.push(item.category)
        })
        //filtro las categorias para usar el template
        const catFiltrada = categorias.filter((valor, indice) => {
            return categorias.indexOf(valor) === indice;
        }

        );
        console.log(catFiltrada)

        let container = document.querySelector(".upcoming");
        let tableBodyHTML = "";
        catFiltrada.forEach(category => {
            tableBodyHTML += `<tr>
        <td>${category}</td>
        </tr>`;
        })
        container.innerHTML = tableBodyHTML;

        let filteredCategorias = getEventsByCategory(category, arrayEvent);

    } catch {
        console.log('ocurrio un error con mi api')
    }
}

getData2()

function getEventsByCategory(category, arrayEvent) {
    return arrayEvent.filter(events => events.category.includes(category));
}