// Inicializa ScrollReveal.js
ScrollReveal().reveal('.titulo-seccion', {
    origin: 'left', // Establece el origen de la animación
    distance: '200px', // Establece la distancia del desplazamiento
    duration: 2000, // Establece la duración de la animación en milisegundos
    easing: 'ease', // Establece la función de interpolación de la animación
    reset: true, // Restablece la animación en cada desplazamiento
    viewFactor: 0.3 // Define la proporción de elemento visible antes de activar la animación
});

function mostrar(elem){
    //oculto todos los detalles
    detalles = document.getElementsByClassName("detalle");
    for(i=0; i < detalles.length; i++){
        detalles[i].style.display = "none";
    }

    links = document.querySelectorAll(".habilidades .menu li");
    for(i=0; i < detalles.length; i++){
        links[i].classList = "";
    }

    //visualizo el que corresponde en base al id
    id_skill = "info" + elem.id;
    document.getElementById(id_skill).style.display = "block";
    document.getElementById(elem.id).classList = "selected";
}

const testimonios = [
    {
        foto:"cliente1.png",
        titulo:"Luis Avila Gerente Hotel Marriotte Playa Grande!!",
        texto:"Me complace recomendar a Richard Suarez para cualquier oportunidad que pueda estar disponible. He tenido el placer de conocerlo durante 8 años y puedo decir con confianza que es una persona con competencia, trabajadora y altamente calificada",
        nombre:"Luis Avila",
        puesto:"Gerente de Hotel Marriotte Playa Grande",
    },
    {
        foto:"cliente2.png",
        titulo:"Johander Scucces Especialista RRHH.",
        texto:"Además de sus habilidades técnicas, Richard Suarez es una persona amable y compasiva que siempre está dispuesta a ayudar a sus colegas. Su actitud positiva y su ética de trabajo incansable lo convierten en un activo valioso para cualquier equipo.",
        nombre:"Johander Scucces.",
        puesto:"Gerente de RRHH",
    },
    {
        foto:"cliente3.png",
        titulo:"Hector Nogales, Capitan  E-190 Conviasa.",
        texto:"Richard Suarez demostró habilidades excepcionales en Seguridad Operacional. Su capacidad para Gestionar Safety fue especialmente impresionante y contribuyó significativamente al éxito de nuestro equipo.",
        nombre:"Hector Nogales.",
        puesto:"Jefe de Flota Embraer",
    },
    {
        foto:"cliente4.png",
        titulo:"Yemar Oropeza, Capitan  E-190 Conviasa.",
        texto:"Richard Suarez demostro habilidades de liderazgo en los dos años de gestion, empleando estrategias que lo ayudaron a conseguir los objetivos que se planteo, especialista en resolver conflictos de manera efectiva. .",
        nombre:"Yemar Oropeza",
        puesto:"Gerente General RAV-121",
    }
]

//Variable que controla la ubicación del testimonio actual.
var pos = 0;
//Función para avaznar al siguiente testimonio
function siguiente(){
    pos++;
    document.getElementById("imgCliente").src = "img/" + testimonios[pos].foto;
    document.getElementById("tituloCliente").innerText =testimonios[pos].titulo;
    document.getElementById("txtCliente").innerText = testimonios[pos].texto;
    document.getElementById("nombreCliente").innerText = testimonios[pos].nombre;
    document.getElementById("puestoCliente").innerText = testimonios[pos].puesto;

    if(pos==3){
        pos= -1;
    }
}
//Función para cerrar el menu
function cerrar(){
    document.getElementsByClassName("nav-menu")[0].style.top ="-100%";
}
//Función para abrir el menu
function verMenu(){
    document.getElementsByClassName("nav-menu")[0].style.top ="0";
}