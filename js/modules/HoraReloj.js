const d = document,
    Reloj = d.querySelector(".NumHors"),
    Am = d.querySelector(".NumMinuts"),
    $Horas = d.querySelector(".ClockHrs"),
    $Minutos = d.querySelector(".ClockMinuts"),
    FondoReloj = d.querySelector(".numbers"),
    $Segundos = d.querySelector(".ClockSegundos");

let Intervalo, Cronometro;

export async function MostrarHora() {
    

    


    Intervalo = await setInterval(() => {
        Reloj.innerHTML = moment().format('h:mm:ss');
        
    }, 1000);

    /* console.log(moment().format('LL'));
    console.log(moment().format('a')); */


    if (moment().format('a')==="am") {
        Am.innerHTML = "AM";
    } else {
        Am.innerHTML = "PM";
    }


}


export function MostrarCronometro(ContadorSegundos) {


    let Horas = Math.floor(ContadorSegundos / 3600),
        Minutos = Math.floor(ContadorSegundos / 60) % 60,
        Segundos = ContadorSegundos % 60;
    
        Segundos = (Segundos < 10) ? '0' + Segundos : Segundos;    
    Minutos = (Minutos < 10) ? '0' + Minutos : Minutos;
    Horas = (Horas < 10)? '0' + Horas : Horas;

    Cronometro=setInterval(() => {
        Segundos++;
        if (Segundos >= 60) {
            Minutos++
            Segundos = 0;
            Minutos = (Minutos < 10)? '0' + Minutos : Minutos;
            if (Minutos>=60) {
                Horas++;
                Minutos = 0;
                Horas = (Horas < 10)? '0' + Horas : Horas;
            }
        }
        Segundos = (Segundos < 10) ? '0' + Segundos : Segundos;
        $Horas.textContent = Horas;
        $Minutos.textContent = Minutos;
        $Segundos.textContent = Segundos;
        
        ContadorSegundos++;
        localStorage.setItem("ContadorSegundos", `${ContadorSegundos}`);

    }, 1000);
} 


export function OcultarHora() {
    clearInterval(Intervalo);
}

export function OcultarCronometro() {
    clearInterval(Cronometro);
}