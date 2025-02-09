// Eventos para cambiar de idioma
document.getElementById("cambiar_idioma").addEventListener("click", function(event) {
    event.preventDefault(); // Evita que se recargue la página
    
    let titulo = document.getElementById("titulo");
    let labelTipo = document.getElementById("label_tipo");
    let labelCantidad = document.getElementById("label_cantidad");
    let labelOrigen = document.getElementById("label_origen");
    let labelDestino = document.getElementById("label_destino");
    let convertir = document.getElementById("convertir");
    let resultado = document.getElementById("resultado");
    let info = document.getElementById("info");
    let link = document.getElementById("link");
    let cambiarIdioma = document.getElementById("cambiar_idioma");
    let cambiarModo = document.getElementById("cambiar_modo");
    let tipo_longitud = document.getElementById("Longitud");
    let tipo_temperatura = document.getElementById("Temperatura");
    let tipo_pm = document.getElementById("Peso/Masa");
    let tipo_tiempo = document.getElementById("Tiempo");
    let tipo_velocidad = document.getElementById("Velocidad");
    let tipo_volumen = document.getElementById("Volumen");
    let tipo_area = document.getElementById("Área");
    let tipo_energia = document.getElementById("Energía");

    if (cambiarIdioma.textContent === "Cambiar a Inglés") {
        // Cambiar a inglés
        titulo.textContent = "Unit Converter";
        labelTipo.textContent = "Choose what you want to convert";
        labelCantidad.textContent = "Type the amount to convert";
        labelOrigen.textContent = "Choose the unit of origin";
        labelDestino.textContent = "Choose the destination unit";
        convertir.textContent = "Convert";
        resultado.textContent = "Result: ";
        info.textContent = "© 2025 Unit Converter. All rights reserved";
        link.textContent = "About Me";
        cambiarIdioma.textContent = "Change to Spanish";
        cambiarModo.textContent = "Dark Mode";
        tipo_longitud.textContent = "Length";
        tipo_temperatura.textContent = "Temperature";
        tipo_pm.textContent = "Weight/Mass";
        tipo_tiempo.textContent = "Time";
        tipo_velocidad.textContent = "Speed"
        tipo_volumen.textContent = "Volume";
        tipo_area.textContent = "Area";
        tipo_energia.textContent = "Energy";
    } else {
        // Cambiar a español
        titulo.textContent = "Conversor de Unidades";
        labelTipo.textContent = "Elige lo que quieres convertir";
        labelCantidad.textContent = "Escribe la cantidad a convertir";
        labelOrigen.textContent = "Elige la unidad de origen";
        labelDestino.textContent = "Elige la unidad de destino";
        convertir.textContent = "Convertir";
        resultado.textContent = "Resultado: ";
        info.textContent = "© 2025 Conversor de unidades. Todos los derechos reservados";
        link.textContent = "Acerca de Mí";
        cambiarIdioma.textContent = "Cambiar a Inglés";
        cambiarModo.textContent = "Modo Oscuro";
        tipo_longitud.textContent = "Longitud";
        tipo_temperatura.textContent = "Temperatura";
        tipo_pm.textContent = "Peso/Masa";
        tipo_tiempo.textContent = "Tiempo";
        tipo_velocidad.textContent = "Velocidad";
        tipo_volumen.textContent = "Volumen";
        tipo_area.textContent = "Área";
        tipo_energia.textContent = "Energía";
    }
});

//Evento para el modo oscuro
let boton_modo = document.getElementById("cambiar_modo");
boton_modo.addEventListener("click", cambiarModo);

function cambiarModo() {
    if (boton_modo.textContent === "Modo Oscuro") {
        // Modo Oscuro
        boton_modo.textContent = "Modo Claro";
        
        // Cambios header
        let header_color = document.querySelector("header");
        header_color.style.background = "#1e293b"; // Fondo oscuro del header
        let titulo_color = document.getElementById("titulo");
        titulo_color.style.color = "#e2e8f0"; // Título claro

        // Cambios body
        let body_color = document.querySelector("body");
        body_color.style.background = "#0f172a"; // Fondo oscuro

        // Cambios main
        let main_color = document.querySelector("main");
        main_color.style.background = "#1e293b"; // Fondo oscuro del main
        main_color.style.boxShadow = "none"; // Sin sombra en modo oscuro

        // Cambios en los labels
        const colores_label = document.querySelectorAll("#label_tipo,#label_origen,#label_destino,#label_cantidad");
        colores_label.forEach(label => {
            label.style.color = "#94a3b8"; // Color de los labels en modo oscuro
        });

        // Cambios en los selects
        const colores_select = document.querySelectorAll("#tipo_conversion,#selectOrigen,#selectDestino,#valor");
        colores_select.forEach(select => {
            select.style.backgroundColor = "#1e293b"; // Fondo oscuro de los selects
            select.style.color = "white"; // Texto claro

            let opciones = select.querySelectorAll("option");
            opciones.forEach(option=>{
                option.style.backgroundColor = "#1e293b";
                option.style.color="white";
            })
        });


        // Cambios footer
        let footer_color = document.getElementById("footer_page");
        let footer_p = document.getElementById("info");
        let footer_link = document.getElementById("link");
        footer_color.style.boxShadow = "none"; // Sin sombra en footer
        footer_color.style.backgroundColor = "#1e293b"; // Fondo oscuro del footer
        footer_p.style.color = "#e2e8f0"; // Texto claro en footer
        footer_link.style.color = "#e2e8f0"; // Enlaces claros en footer

    } else {
        // Modo Claro
        boton_modo.textContent = "Modo Oscuro";

        // Cambios header
        let header_color = document.querySelector("header");
        header_color.style.background = "white"; // Fondo blanco del header
        let titulo_color = document.getElementById("titulo");
        titulo_color.style.color = "#000000"; // Título oscuro

        // Cambios body
        let body_color = document.querySelector("body");
        body_color.style.background = "#eeeeec"; // Fondo claro

        // Cambios main
        let main_color = document.querySelector("main");
        main_color.style.background = "white"; // Fondo blanco del main
        main_color.style.boxShadow = "20px 20px 10px rgb(221, 208, 208)"; // Sombra en el main

        // Cambios en los labels
        const colores_label = document.querySelectorAll("#label_tipo,#label_origen,#label_destino,#label_cantidad");
        colores_label.forEach(label => {
            label.style.color = "#000000"; // Color oscuro en los labels
        });

        // Cambios en los selects
        const colores_select = document.querySelectorAll("#tipo_conversion,#selectOrigen,#selectDestino,#valor");
        colores_select.forEach(select => {
            select.style.backgroundColor = "white"; // Fondo blanco de los selects
            select.style.color = "#000000"; // Texto oscuro

            let opciones = select.querySelectorAll("option");
            opciones.forEach(option=>{
                option.style.backgroundColor = "white";
                option.style.color="black";
            })
        });

        // Cambios footer
        let footer_color = document.getElementById("footer_page");
        let footer_p = document.getElementById("info");
        let footer_link = document.getElementById("link");
        footer_color.style.boxShadow = "20px 20px 10px rgb(221, 208, 208)"; // Sombra en footer
        footer_color.style.backgroundColor = "white"; // Fondo blanco del footer
        footer_p.style.color = "#000000"; // Texto oscuro en footer
        footer_link.style.color = "#000000"; // Enlaces oscuros en footer
    }
}



//Eventos para cuando el usuario haga click
document.getElementById("tipo_conversion").addEventListener("change",actualizarConversion);
document.getElementById("convertir").addEventListener("click",convertir );
//Función para agregar dinamicamente las conversiones

function actualizarConversion() {
    // Obtengo las instancias para manipularlas
    const tipo = document.getElementById("tipo_conversion").value;
    const unidad_origen = document.getElementById("selectOrigen");
    const unidad_destino = document.getElementById("selectDestino");
    const cambiarIdioma = document.getElementById("cambiar_idioma");

    // Por cada iteración que vaya a hacer se limpia para que no se queden guardadas
    // cuando el usuario cambie de tipo de unidad a convertir
    unidad_origen.innerHTML = ""; 
    unidad_destino.innerHTML = "";

    // Arreglo para llenar dinámicamente las opciones
    let opciones = [];

    // Defino las opciones según el tipo de conversión
    if (tipo === "Longitud") {
        if (cambiarIdioma.textContent === "Change to Spanish") {
            opciones = [
                { nombre: "Millimeter", valor: "mm" },
                { nombre: "Centimeter", valor: "cm" },
                { nombre: "Meter", valor: "m" },
                { nombre: "Kilometer", valor: "km" },
                { nombre: "Micrometer", valor: "µm" },
                { nombre: "Nanometer", valor: "nm" },
                { nombre: "Inch", valor: "in" },
                { nombre: "Foot", valor: "ft" },
                { nombre: "Yard", valor: "yd" },
                { nombre: "Mile", valor: "mi" }
            ];
        } else {
            opciones = [
                { nombre: "Milímetro", valor: "mm" },
                { nombre: "Centímetro", valor: "cm" },
                { nombre: "Metro", valor: "m" },
                { nombre: "Kilómetro", valor: "km" },
                { nombre: "Micrómetro", valor: "µm" },
                { nombre: "Nanómetro", valor: "nm" },
                { nombre: "Pulgada", valor: "in" },
                { nombre: "Pie", valor: "ft" },
                { nombre: "Yarda", valor: "yd" },
                { nombre: "Milla", valor: "mi" }
            ];
        }
    }
    else if (tipo === "Temperatura") {
            opciones = [
                { nombre: "Celsius", valor: "C" },
                { nombre: "Fahrenheit", valor: "F" },
                { nombre: "Kelvin", valor: "K" }
            ];
        } 
    else if (tipo === "Peso/Masa") {
        if (cambiarIdioma.textContent === "Change to Spanish") {
            opciones = [
                { nombre: "Microgram", valor: "µg" },
                { nombre: "Milligram", valor: "mg" },
                { nombre: "Gram", valor: "g" },
                { nombre: "Kilogram", valor: "kg" },
                { nombre: "Ton", valor: "t" },
                { nombre: "Ounce", valor: "oz" },
                { nombre: "Pound", valor: "lb" },
                { nombre: "Stone", valor: "st" },
                { nombre: "Carat", valor: "ct" },
                { nombre: "Slug", valor: "slug" }
            ];
        } else {
            opciones = [
                { nombre: "Microgramo", valor: "µg" },
                { nombre: "Miligramo", valor: "mg" },
                { nombre: "Gramo", valor: "g" },
                { nombre: "Kilogramo", valor: "kg" },
                { nombre: "Tonelada", valor: "t" },
                { nombre: "Onza", valor: "oz" },
                { nombre: "Libra", valor: "lb" },
                { nombre: "Stone", valor: "st" },
                { nombre: "Quilate", valor: "ct" },
                { nombre: "Slug", valor: "slug" }
            ];
        }
    }
    else if (tipo === "Tiempo") {
        if (cambiarIdioma.textContent === "Change to Spanish") {
            opciones = [
                { nombre: "Second", valor: "s" },
                { nombre: "Minute", valor: "min" },
                { nombre: "Hour", valor: "h" },
                { nombre: "Day", valor: "d" },
                { nombre: "Millisecond", valor: "µs" },
                { nombre: "Nanosecond", valor: "ns" }
            ];
        } else {
            opciones = [
                { nombre: "Segundo", valor: "s" },
                { nombre: "Minuto", valor: "min" },
                { nombre: "Hora", valor: "h" },
                { nombre: "Día", valor: "d" },
                { nombre: "Milisegundo", valor: "µs" },
                { nombre: "Nanosegundo", valor: "ns" }
            ];
        }
    }
    else if (tipo === "Velocidad") {
        if (cambiarIdioma.textContent === "Change to Spanish") {
            opciones = [
                { nombre: "Meters per second", valor: "m/s" },
                { nombre: "Kilometers per hour", valor: "km/h" },
                { nombre: "Miles per hour", valor: "mph" },
                { nombre: "Feet per second", valor: "ft/s" },
                { nombre: "Speed of light", valor: "c" }
            ];
        } else {
            opciones = [
                { nombre: "Metros por segundo", valor: "m/s" },
                { nombre: "Kilómetros por hora", valor: "km/h" },
                { nombre: "Millas por hora", valor: "mph" },
                { nombre: "Pies por segundo", valor: "ft/s" },
                { nombre: "Velocidad de la luz", valor: "c" }
            ];
        }
    }
    else if (tipo === "Volumen") {
        if (cambiarIdioma.textContent === "Change to Spanish") {
            opciones = [
                { nombre: "Milliliter", valor: "mL" },
                { nombre: "Cubic centimeter", valor: "cm³" },
                { nombre: "Liter", valor: "L" },
                { nombre: "Cubic meter", valor: "m³" },
                { nombre: "Fluid ounce", valor: "oz fl" },
                { nombre: "Cup", valor: "cup" },
                { nombre: "Gallon", valor: "gal" },
                { nombre: "Cubic foot", valor: "ft³" },
                { nombre: "Cubic yard", valor: "yd³" }
            ];
        } else {
            opciones = [
                { nombre: "Mililitro", valor: "mL" },
                { nombre: "Centímetro cúbico", valor: "cm³" },
                { nombre: "Litro", valor: "L" },
                { nombre: "Metro cúbico", valor: "m³" },
                { nombre: "Onza líquida", valor: "oz fl" },
                { nombre: "Taza", valor: "cup" },
                { nombre: "Galón", valor: "gal" },
                { nombre: "Pie cúbico", valor: "ft³" },
                { nombre: "Yarda cúbica", valor: "yd³" }
            ];
        }
    }
    else if (tipo === "Área") {
        if (cambiarIdioma.textContent === "Change to Spanish"){
            opciones = [
                { nombre: "Square millimeter", valor: "mm²" },
                { nombre: "Square centimeter", valor: "cm²" },
                { nombre: "Square meter", valor: "m²" },
                { nombre: "Hectare", valor: "ha" },
                { nombre: "Square kilometer", valor: "km²" },
                { nombre: "Square inch", valor: "in²" },
                { nombre: "Square foot", valor: "ft²" },
                { nombre: "Square yard", valor: "yd²" },
                { nombre: "Acre", valor: "ac" },
                { nombre: "Square mile", valor: "mi²" }
            ];
        }
        else{
        opciones = [
            { nombre: "Milímetro cuadrado", valor: "mm²" },
            { nombre: "Centímetro cuadrado", valor: "cm²" },
            { nombre: "Metro cuadrado", valor: "m²" },
            { nombre: "Hectárea", valor: "ha" },
            { nombre: "Kilómetro cuadrado", valor: "km²" },
            { nombre: "Pulgada cuadrada", valor: "in²" },
            { nombre: "Pie cuadrado", valor: "ft²" },
            { nombre: "Yarda cuadrada", valor: "yd²" },
            { nombre: "Acre", valor: "ac" },
            { nombre: "Milla cuadrada", valor: "mi²" }
        ];
        }
    }
    else if (tipo === "Energía") {
        if (cambiarIdioma.textContent === "Change to Spanish"){
            opciones = [
                { nombre: "Joule", valor: "J" },
                { nombre: "Kilojoule", valor: "kJ" },
                { nombre: "Calorie", valor: "cal" },
                { nombre: "Kilocalorie", valor: "kcal" },
                { nombre: "Watt-hour", valor: "Wh" },
                { nombre: "Kilowatt-hour", valor: "kWh" },
                { nombre: "Electronvolt", valor: "eV" },
                { nombre: "BTU", valor: "BTU" }
            ];
        }
        else{
        opciones = [
            { nombre: "Julio", valor: "J" },
            { nombre: "Kilojulio", valor: "kJ" },
            { nombre: "Caloría", valor: "cal" },
            { nombre: "Kilocaloría", valor: "kcal" },
            { nombre: "Vatio-hora", valor: "Wh" },
            { nombre: "Kilovatio-hora", valor: "kWh" },
            { nombre: "Electronvoltio", valor: "eV" },
            { nombre: "BTU", valor: "BTU" }
        ];
        }
    }
    opciones.forEach(opcion => {
        const optionElementOrigen = document.createElement("option");
        optionElementOrigen.value = opcion.valor;
        optionElementOrigen.textContent = opcion.nombre;

        const optionElementDestino = document.createElement("option");
        optionElementDestino.value = opcion.valor;
        optionElementDestino.textContent = opcion.nombre;

        unidad_origen.appendChild(optionElementOrigen);
        unidad_destino.appendChild(optionElementDestino);
    });
}

//Proceso de conversiones
document.getElementById("convertir").addEventListener("click",convertir);

function convertir(){
    const tipo = document.getElementById("tipo_conversion").value;
    if(tipo==="Longitud" || tipo==="Lenght"){
        convertirLongitud();
    }
    else if(tipo==="Temperatura" || tipo==="Temperature"){
        convertirTemperatura();
    }
    else if(tipo==="Peso/Masa" || tipo==="Weight/Mass"){
        convertirPesoMasa();
    }
    else if(tipo==="Tiempo" || tipo==="Time"){
        convertirTiempo();
    }
    else if(tipo==="Velocidad" || tipo==="Speed"){
        convertirVelocidad();
    }
    else if(tipo==="Volumen" || tipo==="Volume"){
        convertirVolumen();
    }
    else if(tipo==="Área" || tipo==="Area"){
        convertirArea();
    }
    else if(tipo==="Energía" || tipo==="Energy"){
        convertirEnergia();
    }

}

function convertirLongitud() {
    const origen = document.getElementById("selectOrigen").value;
    const destino = document.getElementById("selectDestino").value;
    const valor = parseFloat(document.getElementById("valor").value);
    const resultadoDiv = document.getElementById("resultado");

    if (isNaN(valor)) {
        resultadoDiv.textContent = "Ingrese un valor válido.";
        return;
    }
    const conversiones = {
        mm: 0.001,
        cm: 0.01,
        m: 1,
        km: 1000,
        "µm": 0.000001,
        nm: 0.000000001,
        in: 0.0254,
        ft: 0.3048,
        yd: 0.9144,
        mi: 1609.34
    };

    if (!(origen in conversiones) || !(destino in conversiones)) {
        resultadoDiv.textContent = "Unidades no válidas.";
        return;
    }

    let resultado = (valor * conversiones[origen]) / conversiones[destino];
    resultadoDiv.textContent = `Resultado: ${resultado} ${destino}`;
}

function convertirTemperatura(){
    const origen = document.getElementById("selectOrigen").value;
    const destino = document.getElementById("selectDestino").value;
    const valor = parseFloat(document.getElementById("valor").value);
    const resultadoDiv = document.getElementById("resultado");
    
    if (isNaN(valor)) {
        resultadoDiv.textContent = "Ingrese un valor válido.";
        return;
    }
    let resultado;
    
    if (origen === "C" && destino === "F") {
        resultado = (valor * 9/5) + 32;
    } else if (origen === "C" && destino === "K") {
        resultado = valor + 273.15;
    } else if (origen === "F" && destino === "C") {
        resultado = (valor - 32) * 5/9;
    } else if (origen === "F" && destino === "K") {
        resultado = (valor - 32) * 5/9 + 273.15;
    } else if (origen === "K" && destino === "C") {
        resultado = valor - 273.15;
    } else if (origen === "K" && destino === "F") {
        resultado = (valor - 273.15) * 9/5 + 32;
    } else {
        resultadoDiv.textContent = "Unidades no válidas.";
        return;
    }
    resultadoDiv.textContent = `Resultado: ${resultado} ${destino}`;

}
function convertirPesoMasa() {
    const origen = document.getElementById("selectOrigen").value;
    const destino = document.getElementById("selectDestino").value;
    const valor = parseFloat(document.getElementById("valor").value);
    const resultadoDiv = document.getElementById("resultado");

    if (isNaN(valor)) {
        resultadoDiv.textContent = "Ingrese un valor válido.";
        return;
    }

    const conversiones = {
        "µg": 0.000001,
        mg: 0.001,
        g: 1,
        kg: 1000,
        t: 1000000,
        oz: 28.3495,
        lb: 453.592,
        st: 6350.29,
        ct: 0.2,
        slug: 14593.9
    };

    if (!(origen in conversiones) || !(destino in conversiones)) {
        resultadoDiv.textContent = "Unidades no válidas.";
        return;
    }

    let resultado = (valor * conversiones[origen]) / conversiones[destino];
    resultadoDiv.textContent = `Resultado: ${resultado} ${destino}`;
}
function convertirTiempo() {
    const origen = document.getElementById("selectOrigen").value;
    const destino = document.getElementById("selectDestino").value;
    const valor = parseFloat(document.getElementById("valor").value);
    const resultadoDiv = document.getElementById("resultado");

    if (isNaN(valor)) {
        resultadoDiv.textContent = "Ingrese un valor válido.";
        return;
    }

    const conversiones = {
        "s": 1,               // Segundo
        "min": 60,            // Minuto
        "h": 3600,            // Hora
        "d": 86400,           // Día
        "µs": 0.000001,       // Milisegundo
        "ns": 0.000000001     // Nanosegundo
    };

    if (!(origen in conversiones) || !(destino in conversiones)) {
        resultadoDiv.textContent = "Unidades no válidas.";
        return;
    }

    let resultado = (valor * conversiones[origen]) / conversiones[destino];
    resultadoDiv.textContent = `Resultado: ${resultado} ${destino}`;
}

function convertirVelocidad() {
    const origen = document.getElementById("selectOrigen").value;
    const destino = document.getElementById("selectDestino").value;
    const valor = parseFloat(document.getElementById("valor").value);
    const resultadoDiv = document.getElementById("resultado");

    if (isNaN(valor)) {
        resultadoDiv.textContent = "Ingrese un valor válido.";
        return;
    }

    const conversiones = {
        "m/s": 1,               // Metros por segundo
        "km/h": 1 / 3.6,        // Kilómetros por hora a metros por segundo
        "mph": 0.44704,         // Millas por hora a metros por segundo
        "ft/s": 0.3048,         // Pies por segundo a metros por segundo
        "c": 299792458          // Velocidad de la luz en metros por segundo
    };

    if (!(origen in conversiones) || !(destino in conversiones)) {
        resultadoDiv.textContent = "Unidades no válidas.";
        return;
    }

    // Convertir valor de la unidad de origen a metros por segundo y luego convertir a la unidad destino
    let resultado = (valor * conversiones[origen]) / conversiones[destino];
    resultadoDiv.textContent = `Resultado: ${resultado} ${destino}`;
}
function convertirVolumen() {
    const origen = document.getElementById("selectOrigen").value;
    const destino = document.getElementById("selectDestino").value;
    const valor = parseFloat(document.getElementById("valor").value);
    const resultadoDiv = document.getElementById("resultado");

    if (isNaN(valor)) {
        resultadoDiv.textContent = "Ingrese un valor válido.";
        return;
    }
    //convertimos en base al mililitro
    const conversiones = {
        "mL": 1,                // Mililitro
        "cm³": 1,               // Centímetro cúbico
        "L": 1000,              // Litro
        "m³": 1000000,          // Metro cúbico
        "oz fl": 29.5735,       // Onza líquida
        "cup": 240,             // Taza
        "gal": 3785.41,         // Galón
        "ft³": 28316.8,         // Pie cúbico
        "yd³": 764600           // Yarda cúbica
    };

    if (!(origen in conversiones) || !(destino in conversiones)) {
        resultadoDiv.textContent = "Unidades no válidas.";
        return;
    }

    // Convertir valor de la unidad de origen a mililitros y luego convertir a la unidad destino
    let resultado = (valor * conversiones[origen]) / conversiones[destino];
    resultadoDiv.textContent = `Resultado: ${resultado} ${destino}`;
}

function convertirArea() {
    const origen = document.getElementById("selectOrigen").value;
    const destino = document.getElementById("selectDestino").value;
    const valor = parseFloat(document.getElementById("valor").value);
    const resultadoDiv = document.getElementById("resultado");

    if (isNaN(valor)) {
        resultadoDiv.textContent = "Ingrese un valor válido.";
        return;
    }
    const conversiones = {
        "mm²": 1,                 // Milímetro cuadrado
        "cm²": 100,               // Centímetro cuadrado
        "m²": 10000,              // Metro cuadrado
        "ha": 100000000,          // Hectárea (10,000 metros cuadrados)
        "km²": 1000000000000,     // Kilómetro cuadrado (1,000,000 metros cuadrados)
        "in²": 645.16,            // Pulgada cuadrada
        "ft²": 929.0304,          // Pie cuadrado
        "yd²": 8361.27,           // Yarda cuadrada
        "ac": 4046.86,            // Acre (4,046.86 metros cuadrados)
        "mi²": 2589988.11         // Milla cuadrada (2,589,988.11 metros cuadrados)
    };

    if (!(origen in conversiones) || !(destino in conversiones)) {
        resultadoDiv.textContent = "Unidades no válidas.";
        return;
    }

    // Convertir valor de la unidad de origen a milímetros cuadrados y luego convertir a la unidad destino
    let resultado = (valor * conversiones[origen]) / conversiones[destino];
    resultadoDiv.textContent = `Resultado: ${resultado} ${destino}`;
}

function convertirEnergia() {
    const origen = document.getElementById("selectOrigen").value;
    const destino = document.getElementById("selectDestino").value;
    const valor = parseFloat(document.getElementById("valor").value);
    const resultadoDiv = document.getElementById("resultado");

    if (isNaN(valor)) {
        resultadoDiv.textContent = "Ingrese un valor válido.";
        return;
    }

    const conversiones = {
        "J": 1,                      // Julio (unidad base)
        "kJ": 1000,                  // Kilojulio
        "cal": 4.184,                // Caloría
        "kcal": 4184,                // Kilocaloría
        "Wh": 3600,                  // Vatio-hora
        "kWh": 3600000,              // Kilovatio-hora
        "eV": 1.60218e-19,           // Electronvoltio
        "BTU": 1055.06               // BTU
    };

    if (!(origen in conversiones) || !(destino in conversiones)) {
        resultadoDiv.textContent = "Unidades no válidas.";
        return;
    }

    // Convertir valor de la unidad de origen a julios y luego convertir a la unidad destino
    let resultado = (valor * conversiones[origen]) / conversiones[destino];
    resultadoDiv.textContent = `Resultado: ${resultado} ${destino}`;
}










