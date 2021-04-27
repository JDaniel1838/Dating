const $boton = document.getElementById("BtnImprimir"), // El botón que desencadena
    $objetivo = document.querySelector("main") ; // A qué le tomamos la foto 
    // Nota: no necesitamos contenedor, pues vamos a descargarla
export default function ImprimirProyecto() {
    // Agregar el listener al botón
    $boton.addEventListener("click", (e) => {
        alert("Esta función aun esta en proceso, regresa pronto :v");

        

        /* let objeto = document.querySelector(".Reloj"),
        ventana =window.open('','_blank');  //abrimos una ventana vacía nueva
        ventana.document.write(objeto.innerHTML);  //imprimimos el HTML del objeto en la nueva ventana
        ventana.document.close();  //cerramos el documento
        ventana.print();  //imprimimos la ventana
        ventana.close();  //cerramos la ventana */
    
    });
}
