import {BtnPower} from "./BtnForm.js";
import { MostrarCronometro, MostrarHora, OcultarCronometro, OcultarHora } from "./HoraReloj.js";
import MostrarDatos from "./MostrarDatos.js";
import NuevoProyecto from "./NuevoProyecto.js";

export default function BtnStart () {
    const d = document,
        ImgBtn = d.querySelector(".ImgBtnPowe"),
        Boton = d.querySelector(".containerBtnPowerSmall"),
        BacgroundBoton = d.querySelector(".containerBtnPowerBig"),
        BackgroundClock = d.querySelector(".CirculoGrande"),
        FondoReloj = d.querySelector(".numbers"),
        FondoContador = d.querySelector(".ClockNumbers"),
        $Loader = d.querySelector(".spinner"),
        ContainerTextProyect = d.querySelector(".containerProyecto"),
        ContenedorNotas = d.querySelector(".NotaGrande"),
        ContainerProyectDate = d.querySelector(".ContainerProyectosmall"),
        Contenedor = document.querySelector(".contentNotes");
    
    let MyObjeto = {},
        click = false,
        TiempoCronometro,
        ProyectoNuevo;
    
    Boton.addEventListener("click", (e) => {

        if (!click) {
            $Loader.classList.add("activado");


            ProyectoNuevo = (localStorage.getItem("ProyectDatingProps") === null) ? true : false;

            if (ProyectoNuevo===true) {
                NuevoProyecto();
            }


            ImgBtn.src = "../../icons/pause-button.svg";
            click = true;

            /* Intrucciones al iniciar el programa */
            
            BacgroundBoton.classList.add("AnimacionBlanco");
            BacgroundBoton.classList.remove("AnimacionAzul");

            BackgroundClock.classList.add("AnimacionAzul");
            BackgroundClock.classList.remove("AnimacionBlanco");

            OcultarHora();

            //FondoContador: Contador
            //Reloj: FondoReloj
            //Loader
            FondoReloj.classList.remove("activado");
            $Loader.classList.add("activado");

                
                

            
            
            

            /* console.log(ContainerTextProyect.style); */
            
            ContainerTextProyect.style.backgroundColor = "#00D9F6";
            ContenedorNotas.style.backgroundColor = "#00D9F6";
            
            /* Llamamos a la funcion para decir que prendimos el sistema */
            BtnPower(true);

            let ExisteProyecto = (localStorage.getItem("ProyectDatingProps") === null) ? false : true;
            
            if (ExisteProyecto === true) {
                TiempoCronometro = (localStorage.getItem("ContadorSegundos") === null) ? 0 : localStorage.getItem("ContadorSegundos");
                MostrarCronometro(TiempoCronometro);

                /* colocamos en el DOM los detalles del proyecto */
                let DateProyec = JSON.parse(localStorage.getItem("ProyectDatingProps"));
                console.log(DateProyec);
                ContainerProyectDate.innerHTML = `
                <h5>Nombre del Proyecto : ${DateProyec.NameProyect}</h5>
                <h6>Este proyecto inicio el  ${DateProyec.DateTheProyect}</h6>
                `;

                /* si el valor no existe en localStorage, no hagas nada, si existe ejecuta esa funcion  */
            
                if (localStorage.getItem("CambiosInDating")===null) {
        
                } else {
                    MyObjeto = JSON.parse(localStorage.getItem("CambiosInDating"));
                    MostrarDatos(MyObjeto);
                }


                /* Quita el loader y activa el cronometro ya con contador */
                setTimeout(() => {
                    $Loader.classList.remove("activado");
                FondoContador.classList.add("activado");    
                }, 1000);
                

            }

            /* TiempoCronometro = (localStorage.getItem("ContadorSegundos") === null) ? 0 : localStorage.getItem("ContadorSegundos");
            
            MostrarCronometro(TiempoCronometro); */


            

        } else {
            ImgBtn.src = "../../icons/power.svg";
            click = false;

            
            

            BacgroundBoton.classList.add("AnimacionAzul");
            BacgroundBoton.classList.remove("AnimacionBlanco");

            BackgroundClock.classList.add("AnimacionBlanco");
            BackgroundClock.classList.remove("AnimacionAzul");


            FondoContador.classList.remove("activado");
            $Loader.classList.add("activado");
            MostrarHora();
            
            setTimeout(() => {
                $Loader.classList.remove("activado");
                FondoReloj.classList.add("activado");    
            }, 1000);

            

            
            
            OcultarCronometro();

            ContainerTextProyect.style.backgroundColor = "#FFFFFF";
            ContenedorNotas.style.backgroundColor = "#FFFFFF";

            /* Llamamos a la funcion para decir que apagamos el sistema */
            BtnPower(false);

            Contenedor.classList.remove("activado");
            Contenedor.innerHTML = `<p>No tienes notas</p>`;
            

        }
        
    });
}