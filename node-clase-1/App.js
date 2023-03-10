const { frutas, precios } = require('./frutas');

console.log('Hello marmota');

frutas.forEach( (frutas, index) => console.log(`Fruta N${index + 1}: ${frutas}`))
precios.forEach( (frutas, index) => console.log(`Fruta N${index + 1}: ${frutas}`))