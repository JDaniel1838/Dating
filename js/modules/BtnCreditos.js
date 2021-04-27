const d = document,
    Boton = d.querySelector(".btnMore"),
    BtnImprimir = d.getElementById("BtnImprimir"),
    BtnDelete = d.getElementById("BtnDeleteDocument"),
    CardEmergente = d.querySelector(".CamposVacios"),
    TextCardEmergente = d.querySelector(".TextCamposVacios"),
    Contenedor = d.querySelector(".Intrucciones");
    
let click = false,
    ExisteProyecto = (localStorage.getItem("ProyectDatingProps") === null) ? false : true;


export function ContentCredits() {
    Boton.addEventListener("click", (e) => {
        if (!click) {
            Contenedor.classList.add("activado");
            click = true;
        } else {
            Contenedor.classList.remove("activado");
            click = false;
        }
    });

    BtnImprimir.addEventListener("click", (e) => {
        if (!ExisteProyecto) {
            ExisteProyecto = (localStorage.getItem("ProyectDatingProps") === null) ? false : true;
            CardEmergente.classList.add("activado");
            TextCardEmergente.textContent = "No tiene ningún proyecto";
        }
        
        /* Codigo que genera el PDF */
    });

    BtnDelete.addEventListener("click", (e) => {
        ExisteProyecto = (localStorage.getItem("ProyectDatingProps") === null) ? false : true;
        if (!ExisteProyecto) {
            
            CardEmergente.classList.add("activado");
            TextCardEmergente.textContent = "No tiene ningún proyecto";
        } else {

            CardEmergente.innerHTML = `
        <h6 class="TextCamposVacios bgBlanco">¿Estas seguro de eliminar el proyecto?</h6>
        <div>
            <button id="BtnDelateProyect">Aceptar</button>
            <button class="ClassBtnCamposVacios">Regresar</button>
        </div>
        `;

        CardEmergente.classList.add("activado");

        const $Aceptar = d.getElementById("BtnDelateProyect"),
            $Cancelar = d.querySelector(".ClassBtnCamposVacios");
        
        $Aceptar.addEventListener("click", (e) => {
            localStorage.removeItem("ProyectDatingProps");
            localStorage.removeItem("ContadorSegundos");
            localStorage.removeItem("CambiosInDating");
            location.reload();

            CardEmergente.classList.remove("activado");
        });

        $Cancelar.addEventListener("click", (e) => {
            CardEmergente.classList.remove("activado");
        });    
        }

        

    });


}
