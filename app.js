// CALCULADOR DE PRESTAMOS (Sistema de amortizacion aleman - Amortizacion constante/interes variable)

// Sistema que permite calcular el valor de un prestamo con sistema de amortizacion aleman, teniendo en cuenta que el pago del capital en cada cuota es fijo y el interes se calcula en funcion al saldo restante. 
// El sistema permitira calcular cuanto es el saldo restante, cuanto de interes pagara durante la vida del prestamo, de cuanto seria la cuota en un periodo puntual.
// Tendra un menu para seleccionar las distintas opciones, inclusive con la opcion salir. 

// --------------------- 


//Declaracion de variables

let montoPrestado;
let plazoPrestamo;
let tasaInteres;

let opcionElegida;
let cuotaMensual;

solicitarDatos()

do{
  
    if((montoPrestado == 0 || montoPrestado == NaN) || (plazoPrestamo == 0 || plazoPrestamo == NaN) || (tasaInteres == 0 || tasaInteres == NaN)) {
        alert("Le ha faltado ingresar algun dato del nuevo prestamo. Intentelo de nuevo")
    }
    
    menubar()
  
    switch(opcionElegida){
        case 1:
            solicitarDatos()
            break
        case 2:
            listarCuotas()
            break
        case 3:
            interesTotal()
            break
        case 4:
            console.log('LLego hasta la opcion 4')
            cancelarSaldo()
            break
        case 5:
            break
        default:
            alert('Tiene que elegir una opción valida')
    }

        // Para verificacion
    console.log("Monto: " +montoPrestado + ", Plazo: " + plazoPrestamo + ", Tasa: " + tasaInteres)


console.log(`Opcion elegida: ${opcionElegida}`)
}while(opcionElegida != 5)

alert('Gracias por utilizar el sistema de prestamos')




