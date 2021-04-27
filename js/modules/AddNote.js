import MostrarDatos from "./MostrarDatos.js";

const d = document,
    form = d.querySelector(".formulario"),
    btnForm = d.querySelector(".enviarForm"),
    CardEmergente = d.querySelector(".CamposVacios"),
    BtnExit = d.querySelector(".BtnExitForm"),
    BtnCardEmergente = d.getElementById("BtnCamposVacios");


let Arreglo,
MiObjeto={};
    

    /* si el valor no existe en localStorage,  */
    if (localStorage.getItem("CambiosInDating")===null) {
        
        Arreglo = [];

        /* Si existe pasamos su valor a el arreglo */
    } else {
        MiObjeto = JSON.parse(localStorage.getItem("CambiosInDating"));

        Arreglo = MiObjeto.Cambios;

        console.log(Arreglo);

    }




export default function AddNote() {

    btnForm.addEventListener("click", (e) => {
        e.preventDefault();

        /* Obtenemos el valor de los inputs al darle click al btn */
        const InputTitle = d.getElementById("Inputitulo").value,
            InputText = d.getElementById("InputTextarea").value;
        
        if (InputText.length > 0 && InputTitle.length > 0 && InputTitle.trim()!="" && InputText.trim()!="") {

            /* Reseteamos el valor */
            d.getElementById("Inputitulo").value = "";
            d.getElementById("InputTextarea").value = "";

            let fecha = `${moment().format('LL')} a las ${moment().format('h:mm:ss a')}`;
            
            
        
            /* Añadimos el valor en forma de arreglo a un arreglo mas grande */
            Arreglo.push([`${InputTitle}`, `${InputText}`,`${fecha}`]);

            /* Creamos un objeto y le pasamos como propiedad el arreglo grande */
            const MyObjeto = {
                Cambios: Arreglo,
            }

            /* Mandamos el objeto a LocalStorage */
            localStorage.setItem("CambiosInDating", JSON.stringify(MyObjeto));

            /* Obtener objeto de localStorage */
            let Datos = JSON.parse(localStorage.getItem("CambiosInDating"));


            /* Mostramos los datos obtenidos
            Nota: no se porque no pide parchar los datos al sacarlos del LocalStorage
            pero, para parsealos en 
            ---console.log(JSON.parse(Datos));----
            */
            
            
            /* Invocamos a la funcion que pintara los datos en el DOM*/
            MostrarDatos(Datos);


            form.classList.remove("activado");
            BtnExit.classList.remove("activado");


        } else {
            
            CardEmergente.classList.add("activado");
        }

        
        /* Borramos lo escrito antes de ocultar el formulario*/
    });


    BtnCardEmergente.addEventListener("click", (e) => {
        CardEmergente.classList.remove("activado");
    });
}