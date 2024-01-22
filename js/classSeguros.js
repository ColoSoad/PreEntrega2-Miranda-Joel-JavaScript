class SeguroInmueble {
    constructor(tipoInmueble, valor, mts2) {
        this.tipoInmueble = tipoInmueble
        this.valor = valor
        this.mts2 = mts2 
    }
    
    obtenerCotizacionInmueble() {
        return this.tipoInmueble.factor * this.valor * this.mts2
    }
}

class SeguroMueble {
    constructor(marca, tipoDeVehiculo, valorDeclarado, año, tipoDeCobertura, cuotaValor) {
        this.marca = marca
        this.tipoDeVehiculo = tipoDeVehiculo
        this.valorDeclarado = valorDeclarado
        this.año = año
        this.tipoDeCobertura = tipoDeCobertura
        this.tipoAntiguedad = tipoAntiguedad
        this.cuotaValor = cuotaValor
    }


    obtenerPrimaAsegurada() {
        return ((this.valorDeclarado * this.tipoDeVehiculo.factorTipo) + (this.año * this.tipoAntiguedad.factorAntiguedad) + this.tipoDeCobertura.sumador) / this.tipoDeVehiculo.factorTipo
    }

    obtenerValorCuota() {
        return (((this.valorDeclarado * this.tipoDeVehiculo.factorTipo) + (this.año * this.tipoAntiguedad.factorAntiguedad) + this.tipoDeCobertura.sumador) / this.tipoDeVehiculo.factorTipo) * this.cuotaValor / 100
    }
}

class tablaObjeto {
    constructor(marca, modelo, año, cuota, prima) {
        this.marca = marca.toUpperCase()
        this.modelo = modelo.toUpperCase()
        this.año = año
        this.cuota = cuota.toFixed(2)
        this.prima = prima.toFixed(2)
    }
}