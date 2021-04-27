const d = document,
    Form = d.querySelector(".formulario"),
    BtnExit = d.querySelector(".BtnExitForm"),
    BotonAdd = d.getElementById("ImgAdd");

let Estado = undefined;

export function BtnPower(estado) {
    Estado = estado;

}


export function BtnClick() {
    BotonAdd.addEventListener("click", (e) => {
        if (Estado === true) {
            Form.classList.add("activado");
            BtnExit.classList.add("activado");
        }
    });

    BtnExit.addEventListener("click", (e) => {
        Form.classList.remove("activado");
            BtnExit.classList.remove("activado");
    });
}

