// Opcion 1: Solicitar datos

function solicitarDatos() {
    montoPrestado = Number(prompt('Ingrese el monto del prestamos a solicitar: '))
    plazoPrestamo = Number(prompt('Ingrese el plazo del prestamos a solicitar: '))
    tasaInteres = Number(prompt('Ingrese la tasa de interes mensual: ')) / 100 //Transforma en %

    cuotaMensual = montoPrestado / plazoPrestamo

}


// Opcion 2: Listar cuotas

function listarCuotas() {
    let saldoRestante = montoPrestado
    let interes
    let mensaje
    let totalCuota
    
    mensaje = "Listado de cuotas del prestamo: \n \n"

    for (let i = 1; i <= plazoPrestamo; i++) {
        interes = saldoRestante * tasaInteres
        saldoRestante = saldoRestante - cuotaMensual
        totalCuota = cuotaMensual + interes
        mensaje = mensaje + "Cuota " + i + ": " + totalCuota.toFixed() + "\n" 
        // 
    }
    alert(mensaje)
}

// Opcion 3: Interes total a pagar.

function interesTotal() {
    let saldoRestante = montoPrestado
    let interes
    let mensaje
    let totalInteres = 0
    
    
    for (let i = 1; i <= plazoPrestamo; i++) {
        interes = saldoRestante * tasaInteres
        totalInteres = totalInteres + interes
        saldoRestante = saldoRestante - cuotaMensual
        console.log(totalInteres)
    }
    
    mensaje = 'El total del interes a pagar es de: ' + totalInteres
    
    alert(mensaje)

}

// Opcion 4: Cancelar saldo

    function cancelarSaldo () {
        let cuotaActual = 0
        let saldoPendiente = 0
        

        cuotaActual = Number(prompt('Cuantas cuotas del prestamo lleva canceladas?'))
        
        if(cuotaActual <= 0 || cuotaActual >= plazoPrestamo) {
            alert("Tiene que elegir un numero entre 1 y " + plazoPrestamo)
            return
        }

        saldoPendiente = (plazoPrestamo - cuotaActual) * cuotaMensual

        alert('Si cancela por anticipado el prestamo tiene que pagar: ' + saldoPendiente.toFixed()+ '. No se le cobrará multa')

    }


