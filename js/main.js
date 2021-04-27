import AddNote from "./modules/AddNote.js";
import { ContentCredits } from "./modules/BtnCreditos.js";
import { BtnClick } from "./modules/BtnForm.js";
import BtnStart from "./modules/BtnStart.js";
import { MostrarCronometro, MostrarHora } from "./modules/HoraReloj.js";
import ImprimirProyecto from "./modules/ImprimirProyect.js";




const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
    moment.locale("es-mx");
    MostrarHora();
    
    BtnStart();
    BtnClick();
    AddNote();
    ContentCredits();
    
    ImprimirProyecto();
});

