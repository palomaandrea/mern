var x = 15;
var y = "CodingDojo";
var x_array = [1,5,10,15];
var y_array = ["Coding", "Dojo", "es", "asombroso!"];
document.write('hola');  //escribe "hola" en el documento
document.write('hola ', y);  //escribe 'hola CodingDojo' en los documentos
console.log(x);  //registra 15 en la consola
console.log(y);  //registra "CodingDojo" en la consola
console.log(y_array[3]);  //registra el valor en y_array índice 3 que es 'asombroso!';
//esto imprime 0 a 99
for(var i=0; i<100; i++){
  console.log(i);
}
//recorre de 1 a 100 e imprime si el número es par o impar
for(var j=1; j<=100; j++){
    if(j%2 == 0) {
        console.log(j, ' es un número Par');
    }
    else {
        console.log(j, 'es un número Impar');
    }
}
function sum(x,y){
    console.log('Tengo los dos siguientes parámetros', x, y);
    return x+y;
}
console.log(sum(5,3));  //registra 8
console.log(sum(10,15) + sum(3,5));  //registra 33

