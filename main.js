//SENTENCIA FOR
for (let i=1;i<=10;i++){
    console.log(i)  //Una línea por cada impresión
}

//SENTENCIA FOR
for (let i=1;i<=100;i++){
    console.log('a')    //Imprime el mismo dato n veces
}

//FOR EACH
let lista=['Pedro','Juan','Pablo','Luisa','Adriana','Ana'];
for (let i=0;i<lista.length;i++){
    console.log(`Posición: ${i}, Dato: ${lista[i]}`);
}
let edad = [23,17,37,50,37,27]
for (let i=0;i<lista.length;i++){
    console.log(`Posición: ${i}, Dato: ${lista[i]}, Edad: ${edad[i]}`);
}

//EJEMPLO DEL PROFESOR

let lista1 = ["miguel", "andrea", "diana", "adrian", "diego", "julian"];
let edad1 = [23,16,37,50,37,27];
let info1 = [];

for (let i = 0; i < lista1.length; i++) {
    info1[i] = {name : lista1[i], edad : edad1[i]};
}
console.log(info1);

for(let id in lista1){
    console.log(`La posicion de la lista es ${id}`);
}
for(let valor of lista1){
    console.log(`y su valor es ${valor}`);  
}