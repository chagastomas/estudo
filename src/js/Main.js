//console.log("Testando webpack");
import Mamiferos from './Mamiferos';

var cachorro = new Mamiferos();
cachorro.voz = "latido";
var gato = new Mamiferos();
gato.voz = "miado";

console.log(cachorro.voz);
console.log(gato.corDoOlho);
console.log(gato.voz);
