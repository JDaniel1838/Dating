import { MostrarCronometro } from "./HoraReloj.js";

const d = document,
    Formulario = d.querySelector(".formProyect"),
    CardEmergente = d.querySelector(".CamposVacios"),
    FondoContador = d.querySelector(".ClockNumbers"),
    ContainerProyectDate = d.querySelector(".ContainerProyectosmall"),
    $Loader = d.querySelector(".spinner"),
    BtnEnviar = d.querySelector(".enviarProyect");


export default function NuevoProyecto() {
    Formulario.classList.add("activado");

    BtnEnviar.addEventListener("click", (e) => {
        
        e.preventDefault();
        const InputTitle = d.getElementById("InputTitleProyect").value,
            InputDescription = d.getElementById("InputTextProyect").value,
            Fecha = `${moment().format('dddd')} ${moment().format('Do')} ${moment().format('[ de ]MMMM [ del ] YYYY [ a las ] h:mm:ss a')}`;
        
        if (InputDescription.length > 0 && InputTitle.length > 0 && InputTitle.trim()!="" && InputDescription.trim()!="") {
            d.getElementById("InputTitleProyect").value = "";
            d.getElementById("InputTextProyect").value = "";

            let Objeto = {
                NameProyect: InputTitle,
                DescriptionProyect: InputDescription,
                DateTheProyect: Fecha,
            };

            localStorage.setItem("ProyectDatingProps", JSON.stringify(Objeto));

            ContainerProyectDate.innerHTML = `
            <h5>Nombre del Proyecto : ${Objeto.NameProyect}</h5>
            <h6>Este proyecto inicio el  ${Objeto.DateTheProyect}</h6>
            `;

            if (localStorage.getItem("CambiosInDating")===null) {
    
            } else {
                MyObjeto = JSON.parse(localStorage.getItem("CambiosInDating"));
                MostrarDatos(MyObjeto);
            }

            let TiempoCronometro = (localStorage.getItem("ContadorSegundos") === null) ? 0 : localStorage.getItem("ContadorSegundos");
            MostrarCronometro(TiempoCronometro);
            
            Formulario.classList.remove("activado");
            setTimeout(() => {
                $Loader.classList.remove("activado");
            FondoContador.classList.add("activado");
            }, 1000);
            

        } else {
            CardEmergente.classList.add("activado");
        }
        
    });

    
}