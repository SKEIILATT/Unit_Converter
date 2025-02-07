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
        tipo_longitud.textContent = "Length"
        tipo_temperatura.textContent = "Temperature"
        tipo_pm.textContent = "Weight/Mass"
        tipo_tiempo.textContent = "Time"
        tipo_velocidad.textContent = "Speed"
        tipo_volume.textContent = "Volume"
        tipo_area.textContent = "Area";
        tipo_energia.textContent = "Energy"
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
        tipo_longitud.textContent = "Longitud"
        tipo_temperatura.textContent = "Temperatura"
        tipo_pm.textContent = "Peso/Masa"
        tipo_tiempo.textContent = "Tiempo"
        tipo_velocidad.textContent = "Velocidad"
        tipo_volume.textContent = "Volumen"
        tipo_area.textContent = "Área";
        tipo_energia.textContent = "Energía"
    }
});


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
        if (cambiarIdioma.textContent === "Change to Spanish") {
            opciones = [
                { nombre: "Celsius", valor: "C" },
                { nombre: "Fahrenheit", valor: "F" },
                { nombre: "Kelvin", valor: "K" },
                { nombre: "Rankine", valor: "R" },
                { nombre: "Réaumur", valor: "Re" }
            ];
        } else {
            opciones = [
                { nombre: "Celsius", valor: "C" },
                { nombre: "Fahrenheit", valor: "F" },
                { nombre: "Kelvin", valor: "K" },
                { nombre: "Rankine", valor: "R" },
                { nombre: "Réaumur", valor: "Re" }
            ];
        }
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




