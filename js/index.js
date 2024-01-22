// VARIABLES Y CONSTANTES GLOBALES
let tasaPersonal = 1.6
let pregunta3 = true;
let conversorTasaPersonal = tasaPersonal*37.5
let tasaPrendaria = 2.5
let conversorTasaPrendaria = tasaPrendaria*60
let contadorCompuesto = 1
let credito = 0
const valorPrenda = (credito*9)/100
let salario = 0
let antiguedad = 0
let antecedentes = ""
let anioVeraz = 0
let email = ""
const emailCorporativo = "creditosYsegurosJoviales@Info.com"
const valor = 230.81
let mts2 = 0;
let codigo = 0;
let numeroCodigo = 0;
let codigoCobertura = 0;
let codigoAntiguedad = 0;
let cuota = 0;
let valorDeclarado = 0;
let prima = 0;
let marca = "";
const cuotaValor = 0.25;


// ARRAYS Y OBJETOS
let tipoInmueble = {}
let tipoDeVehiculo = {}
let tipoDeCobertura = {}
let tipoAntiguedad = {}

const inmuebles = [{ codigo: 1, tipo: 'Hogar', factor: 1.12,},
                   { codigo: 2, tipo: 'Local comercial', factor: 1.44 },
                   { codigo: 3, tipo: 'Consultorio / Oficina', factor: 1.75 }]

const muebles = [{ numeroCodigo: 1, tipo: 'Compacto', factorTipo: .5 },
                 { numeroCodigo: 2, tipo: 'Sedan', factorTipo: 1 },
                 { numeroCodigo: 3, tipo: 'Suv', factorTipo: 1.5 },
                 { numeroCodigo: 4, tipo: 'Utilitario', factorTipo: 2 }]

const coberturas = [{ codigoCobertura: 1, tipo: 'C', sumador: 100000 },
                    { codigoCobertura: 2, tipo: 'C+', sumador: 120000 },
                    { codigoCobertura: 3, tipo: 'C-Full', sumador: 160000 },
                    { codigoCobertura: 4, tipo: 'C-Full++', sumador: 200000 }]

const PlanCobertura = [{ Cobertura: 'C', Descripción: "Responsabilidad Civil"},
                       { Cobertura: 'C+', Descripción: "(C) + Robo, hurto, incendio total y parcial" },
                       { Cobertura: 'C-Full', Descripción: "(C+) + Granizo e inundaciones" },
                       { Cobertura: 'C-Full++', Descripción: "(C-FULL) + Franquicia" }]

const antiguedadVehiculos = [{ codigoAntiguedad: 1, tipo: '1970 - 1988', factorAntiguedad: 1.5 },
                             { codigoAntiguedad: 2, tipo: '1989 - 2007', factorAntiguedad: 1.2 },
                             { codigoAntiguedad: 3, tipo: '2008 - 2024', factorAntiguedad: .9 }]


// FUNCIONES CONVENCIONALES
function progamaPrincipal(){
    while (pregunta3){
        let nombre=prompt("Ingrese su Nombre:");
        let apellido=prompt("Ingrese su Apellido:");
        if((nombre !== "" && nombre !== null) && (apellido !== "" && apellido !== null)){
            let edad = prompt("Ingrese su Edad:");
            edad = parseInt(edad);
            if (edad !== "" && edad !== null && edad >= 18){
                alert("Bienvenido Sr/Sra: "+apellido.toUpperCase().trim()+" a CREDITOS Y SEGUROS JOVIALES S.A.");
                pregunta=confirm("¿Desea utilizar nuestros servicios?");
                if (pregunta){
                    menu();
                    pregunta3 = false;
                }
                else {
                    pregunta3 = false;
                }
            }
            else {
                alert("⛔ La edad mínima para acceder a un prestamo y/o contratar un seguro es de 18 años de edad.");
                pregunta3 = false;
            }    
        }
        else{
            pregunta3 = confirm("Ingrese un Nombre y Apellido válido:");
        }
    }
    alert("👋 ¡Hasta luego! 👋");
}
function menu() {
    let pregunta2 = true;
    while (pregunta2) {
        opcion=(prompt("💲🏡🚗CREDITOS Y SEGUROS JOVIALES🚗🏡💲\n\n   Seleccione una opcion del menú:\n1. Simulador de préstamo personal. 💲\n2. Simulador de préstamo prendario. 💰\n3. Tasas de interés. 📊\n4. Seguros de inmuebles. 🏡\n5. Seguros de vehículos. 🚗 \n6. Salir. 🔚"));
        switch (opcion) {
            case "1":
                salario = parseFloat(prompt("Ingrese su salario en pesos argentinos: "));
                antiguedad = parseFloat(prompt("Ingrese su antiguedad laboral: "));
                simularCreditoPersonal(salario, antiguedad);
                pregunta2=confirm("¿Desea volver al menú principal?");
                break;
            case "2":
                salario = parseFloat(prompt("Ingrese su salario en pesos argentinos: "));
                antiguedad = parseFloat(prompt("Ingrese su antiguedad laboral: "));
                antecedentes = prompt("¿Pertenece al 'veraz'?").toLowerCase().trim();
                if (antecedentes !==null && antecedentes !== "" && antecedentes.toLowerCase().trim() === "no") {
                    alert("✅Aprovado");
                    simularCreditoPrendario(salario, antiguedad)
                }
                else if (antecedentes !==null && antecedentes !== "" && antecedentes.toLowerCase().trim() === "si"){
                    anioVeraz = parseFloat(prompt("Ingrese la cantidad de años que pertenece al 'veraz'?"));
                    if (anioVeraz >= 5 && anioVeraz !== "" && anioVeraz!==null){
                        alert("✅Aprovado");
                        simularCreditoPrendario(salario, antiguedad)
                    }
                    else {
                        alert("⛔NO aprovado");
                    }
                }
                else {
                    alert("⛔NO aprovado");
                }
                pregunta2=confirm("¿Desea volver al menú principal?");
                break;
            case "3":
                mostrarTasas();
                pregunta2=confirm("¿Desea volver al menú principal?");
                break;
            case "4":
                cotizarInmuebles()
                pregunta2=confirm("¿Desea volver al menú principal?");
                break;
            case "5":
                cotizarMuebles()
                break
            case "6":
                pregunta2 = false;
                pregunta3 = false;
                break;
            default:
                alert("⛔Disculpe, no pudimos procesar su opción");
                pregunta2=confirm("¿Desea volver al menú principal?");
        }
        
    }
}
function simularCreditoPersonal(salario, antiguedad) {
    if ((salario >= 300000 && antiguedad >= 5 || antiguedad >= 2 && salario >= 600000)) {
        alert("✅Aprovado");
        credito = prompt("Ingrese el monto a solicitar:");
        if (credito != ""){
            credito = parseFloat(credito);
            for (cuotas = 12; cuotas <= 60; cuotas+=12 ){
                console.log("Préstamo | Ctas | Ctas de:  |  %  | Total\n\n$"+credito+" |"+cuotas+"ctas|$"+((credito*tasaPersonal)/(cuotas)).toFixed(2)+" |"+conversorTasaPersonal*contadorCompuesto+"% |"+(credito*tasaPersonal).toFixed(2)+"\n\n");
                tasaPersonal += .6;
                contadorCompuesto++;
            }
        }
        else{
            alert("⛔Disculpe, ingrese un monto válido.");
        }
        
    }
    else {
        alert("⛔NO aprovado");
    }
}
function simularCreditoPrendario(salario, antiguedad) {
    if ((salario >= 500000 && antiguedad >= 5) || (antiguedad >= 2 && salario >= 700000)) {
        credito = prompt("Ingrese el monto a solicitar:");
        if (credito != ""){
            credito = parseFloat(credito);
            for (cuotas = 12; cuotas <= 60; cuotas+=12 ){
                console.log("Préstamo | Ctas | Ctas de: |  %  | Total\n\n$"+credito+" |"+cuotas+"ctas|$"+((credito*tasaPrendaria)/(cuotas)).toFixed(2)+"|"+conversorTasaPrendaria*contadorCompuesto+"% |"+(credito*tasaPrendaria).toFixed(2)+"\n\n");
                tasaPrendaria += 1.5;
                contadorCompuesto++;
            }
        }
        else {
            alert("⛔Disculpe, ingrese un monto válido.");
        }

    }
    else {
        alert("⛔NO aprovado");
    }
}
function mostrarTasas(){
    let tipoDeTasa = prompt("Ingrese que tipo de tasa de interés:\n(personal - prendario)").toLowerCase().trim();
    switch(tipoDeTasa) {
        case "personal":
            alert("Los créditos personales estan a una tasa de interés del "+conversorTasaPersonal+"% ANUAL.")
            console.log("Los créditos personales estan a una tasa de interés del "+conversorTasaPersonal+"% ANUAL.")
            break
        case "prendario":
            alert("Los créditos prendarios estan a una tasa de interés del "+conversorTasaPrendaria+"% ANUAL.\n⚠️IMPORTANTE: Al momento de adquirir un crédito prendario, se deberá abonar por única vez una prenda del 9% del valor del monto a convenir.")
            console.log("Los créditos prendarios estan a una tasa de interés del "+conversorTasaPrendaria+"% ANUAL")
            console.warn("IMPORTANTE: Al momento de adquirir un crédito prendario, se deberá abonar por única vez una prenda del 9% del valor del monto a convenir.");
            break
        default:
            alert("⛔Disculpe, no pudimos procesar su opción.")
            menu()
    }
}

// // FUNCIONES FLECHAS (MÉTODO DE BÚSQUEDA Y TRANSFORMACÍON)
function cotizarInmuebles() {
    email = prompt("Ingrese su Email:");
    if (email !== "" && email !== null){
        codigo = parseInt(prompt("Digite el número del inmueble a cotizar:\n1. Hogar.\n2. Local Comercial.\n3. Consultorio / Oficina."))
        tipoInmueble = inmuebles.find((inmueble)=> inmueble.codigo === codigo)
        if (tipoInmueble === undefined) {
            alert("⛔️ Disculpe, no pudimos procesar su petición.")
            return 
        }
        mts2 = parseInt(prompt("Ingresa los metros cuadrados del inmueble:"))
        if (mts2 < 10 || mts2 > 1200) {
            alert("⛔️ Disculpe, por el momento solo cotizamos inmuebles desde 10 m2 - 1200 m2.")
            return 
        }
        let inmuebleCotizador = new SeguroInmueble(tipoInmueble, valor, mts2)
        cuotaMensual = inmuebleCotizador.obtenerCotizacionInmueble()
        alert("🏡 Valor de la cuota mensual: $"+ cuotaMensual.toLocaleString("es-AR")+" 🏡")
        alert("📧 Te enviaremos un email a "+ email+ ", desde"+ emailCorporativo+ " para la contratación. 📧")
        console.log("🏡 Valor de la cuota mensual: $", cuotaMensual.toLocaleString("es-AR"), " 🏡")
        console.log("📧 Te enviaremos un email a ", email, ", desde", emailCorporativo, " para la contratación. 📧")
    }
    else {
        alert("⛔️ Disculpe, ingrese un email válido.")
        return
    }
}
function cotizarMuebles() {
// VALIDAR EMAIL PARA MSJ DE FACTURACION
    email = prompt("Ingrese su EMAIL:");
    valorDeclarado = prompt("Ingrese el VALOR a declarar del vehículo:");
    marca = prompt("Ingrese la MARCA de su vehículo:");
    modelo = prompt("Ingrese el MODELO de su vehículo:");
    año = prompt("Ingrese el AÑO de su vehículo:");
    if (email !== "" && email !== null && marca !== "" && marca !== null && modelo !== "" && modelo !== null && valorDeclarado !== "" && valorDeclarado !== null && año !== "" && año !== null){
        valorDeclarado = parseFloat(valorDeclarado);
        año = parseInt(año);
       
       
// PARA TIPO VEHICULO   
        numeroCodigo = parseInt(prompt("Digite el NÚMERO del tipo de vehículo a cotizar:\n1. Compacto.\n2. Sedan.\n3. Suv.\n4. Utilitario."));
        tipoDeVehiculo = muebles.find((mueble)=> mueble.numeroCodigo === numeroCodigo);
        if (tipoDeVehiculo === undefined) {
            alert("⛔️ Disculpe, no pudimos procesar su petición.")
            return 
        }

// PARA TIPO DE COBERTURA

        codigoCobertura = parseInt(prompt("Digite el NÚMERO del Plan deseado :\n1. C.\n2. C+.\n3. C-Full.\n4. C-Full++"));
        tipoDeCobertura = coberturas.find((cobertura)=> cobertura.codigoCobertura === codigoCobertura)
        if (tipoDeCobertura === undefined) {
            alert("⛔️ Disculpe, no pudimos procesar su petición.")
            return 
        }

// // PARA ANTIGUEDAD DEL VEHICULO
        codigoAntiguedad = parseInt(prompt("Digite el NÚMERO de la antiguedad pertinente a su vehículo :\n1. De: 1970 a 1988.\n2. De: 1989 a 2007.\n3. De: 2008 a 2024."));
        tipoAntiguedad = antiguedadVehiculos.find((antiguedadVehiculo)=> antiguedadVehiculo.codigoAntiguedad === codigoAntiguedad)
        if (tipoAntiguedad === undefined) {
            alert("⛔️ Disculpe, no pudimos procesar su petición.")
            return 
        }

    
//INSTACIAR A LA CLASE CON UN NUEVO OBJETO 
        let muebleCotizador = new SeguroMueble(marca, tipoDeVehiculo, valorDeclarado, año, tipoDeCobertura, cuotaValor);

// INTANCIAR EL METODO DE LA CLASE MEDIANTE UNA VARIABLE YA DECLARADA
        prima = muebleCotizador.obtenerPrimaAsegurada();
        cuota = muebleCotizador.obtenerValorCuota();
        console.table(PlanCobertura)
        alert("Prima asegurada del vehículo "+ marca.toUpperCase() +" "+ modelo.toUpperCase() + " modelo " + año + " es : $"+ prima.toLocaleString("es-AR"))
        alert("La cuota del vehículo "+ marca.toUpperCase() +" "+ modelo.toUpperCase() + " modelo " + año + " es : $"+ cuota.toLocaleString("es-AR"))
        alert("📧 Te enviaremos un email a "+ email+ ", desde "+ emailCorporativo+ " para la contratación. 📧")
        console.log("📧 Te enviaremos un email a ", email, ", desde ", emailCorporativo, " para la contratación. 📧")
// INTANCIAR CLASE PARA IMPRIMIR TABLA
        let imprimirObjetoEnTabla = new tablaObjeto(marca, modelo, año, cuota, prima)
        console.table(imprimirObjetoEnTabla)
    } 
    else {
        alert("⛔️ Disculpe, ingrese datos válido.")
        return
    }
}

//  CODIGO AUTOEJECUTABLE 
progamaPrincipal()