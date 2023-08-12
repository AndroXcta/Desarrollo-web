const d = document;

export function calculadora() {
    const pantalla = d.querySelector(".pantalla")
    const botones = d.querySelectorAll(".btn-calculadora")

    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            const botonApretado = boton.textContent
            if (boton.id === "igual") {
                pantalla.textContent = eval (pantalla.textContent)
                return
            }     
            if (boton.id === "borrar") {
               pantalla.textContent = pantalla.textContent.slice(0, -1);     
                return;
                
            }

            if (boton.id === "c") {
                pantalla.textContent = "0"
                return;
            } 

            if (pantalla.textContent === "0") {
                pantalla.textContent = botonApretado
            } else {
                pantalla.textContent += botonApretado
            }
            
        })
    });
}


