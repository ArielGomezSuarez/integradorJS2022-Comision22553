//definicion de constantes
const precioTicket = 200;
const descEstud = 0.8
const descTrai = 0.5
const descJuni = 0.15

//funcion para obtener cantidad ingresa por usuario
function getCant(){
    let cant = parseInt(document.getElementById("cantidad").value);
    return cant;
};

//funcion para obtener categoria elegida por usuario
function getCat(){
    let cat = document.getElementById("categoria").value;
    return cat;
};

//funcion que calcula el valor del ticket en base a categoria, cantidad, precio y descuentos
function ticket(){
    if(getCant() > 0){
    if (getCat() == 1) {
        return `El total a pagar es de $${parseFloat(precioTicket - (precioTicket * descEstud)) * getCant()}`}
        else if(getCat() == 2){
            return `El total a pagar es de $${parseFloat(precioTicket - (precioTicket * descTrai)) * getCant()}`}
            else if(getCat() == 3){
                return `El total a pagar es de $${parseFloat(precioTicket - (precioTicket * descJuni)) * getCant()}`}
                else{return "Elige una categoría"}
}
else {return "Selecciona una cantidad"};
};

//funcion para insertar el valor de la funcion de ticket en el placeholder del formulario en el DOM
function resultado(){
    document.getElementById("disabled").placeholder = ticket();
};