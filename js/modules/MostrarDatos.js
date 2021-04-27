const Contenedor = document.querySelector(".contentNotes");



export default function MostrarDatos(RespJSON) {
    
    /* Necesitamos que el contenedor tenga la clase activado */
    Contenedor.classList.add("activado");


    console.log(RespJSON.Cambios);

    let Cambios = RespJSON.Cambios,
        MyString = "";
    

    Cambios.forEach(el => {
        MyString += `<div>
        <h4>${el[0]}</h4>
        <p class="Text">${el[1]}</p>
        <p class="Date">${el[2]}</p>
        </div>
    `;
    });

    Contenedor.innerHTML = MyString;
}