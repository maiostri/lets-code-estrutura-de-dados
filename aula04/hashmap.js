
// 1. Utilizando object
const objeto = {
    propriedade1 : "valor",
    propriedade2: "valor 2"
}


// [ "propriedade1", "propiedade2"].length = 2
Object.keys(objeto)

console.log(objeto.propriedade1);

// 2. Utilizando Map do proprio Javascript.

const hashMap = new Map();

// Inserir um registro
hashMap.set('propriedade1', "valor");
hashMap.set('propriedade2', "valor 2");

//
console.log(hashMap.get('propriedade1'));
