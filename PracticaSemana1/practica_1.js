//Agrega mas elementos al array
nombres.push("Cesar");

//Elimina el ultimo elemento en el array array
nombres.pop();

//Agrega mas elementos al array al inicio
nombres.unshift("Luna");

//Elimina el primer elemento en el array array
nombres.shift();

//Conocer el indice de un elemento dentro de un array
nombres.indexOf("Gisela");

// Nuevo array que contiene objetos dentro
var data = [
  { nombre: "Cesar", edad: 25 },
  { nombre: "Luna", edad: 22 },
  { nombre: "Gisela", edad: 21 },
];

// Recorrido de los elementos del array
data.forEach(function (dato) {
  console.log(dato.nombre);
});

// Alerta en la pantalla de windows
window.alert("Hello World!");

// Creacion de una funcion declarativa
function funcionDeclarativa(nombre) {
  console.log(`Buenas Trades, ${nombre}, funcion declarativa`);
}

// Creacion de una funcion de flecha
const funcionFlecha = (nombre) => {
  console.log(`Buenas Trades, ${nombre}, funcion de flecha`);
};

// Creacion de una funcion de expresion
const funcionExpresion = function (nombre) {
  console.log(`Buenas Trades, ${nombre}, funcion de expresion`);
};

// Variable de alcanze global la cual es un array con nombres
var nombres = ["Cesar", "Luna", "Gisela"];

// Recorrido del array de nombre y utilizando las funciones creadas anteriormente para imprimir sus valores
for (var i = 0; i < nombres.length; i++) {
  funcionDeclarativa(nombres[i]);
  funcionFlecha(nombres[i]);
  funcionExpresion(nombres[i]);
}

// Variable con alcanze global, la cual recibe un parametro el cual es la edad del array con objetos y datos de personas y verifica si es mayor que 20
var result = data.filter(function (dato) {
  return dato.edad > 20;
});

// Variable con alcanze globar, la cual recorreo los datos del array de personas y imprime solamente su nombre
var resultado = data.map(function (dato) {
  return dato.nombre;
});

// Variable con alcanze global la cual contiene un objeto con nombres y una funcion como elemento la cual puede imprimir el nombre y concatena el apellido
var alumno = {
  nombre: "Cesar",
  apellido: "Martinez",

  mostrarDatos: function () {
    console.log(`${this.nombre}, ${this.apellido}`);
  },
};

// Funcion la cual recibe 2 parametros los cuales son nombre y edad
function Alumno(nombreA, edadB) {
  (this.nombre = nombreA), (this.edad = edadB);
}

// Variable con alcanze global y contiene un array vacio
var alumnos = [];

// Ciclo el cual se ejecuta 2 veces y solicita nombre y edad lo recibe mediante un promp y posteriormente lo guarda en el array con la funcion creada anteriormente
for (let i = 0; i < 2; i++) {
  var nombre = prompt("Escriba su nombre");
  var edad = prompt("Escriba su edad");
  alumnos.push(new Alumno(nombre, edad));
}

// Ciclo el cual recorre todos los elementos del array y a su vez imprime el valor de cada uno de ellos
for (let i = 0; i < alumnos.length; i++) {
  console.log(alumnos[i]);
}
