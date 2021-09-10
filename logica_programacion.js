const alerta = `Ingresa lo que se pide pelotudo`,
fechaHoy = new Date()
console.group('1-26')
// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
function counterString(string){
  if (!string || string.length < 0 || typeof string !== 'string') 
    return alerta
  return `el string "${string}", contiene ${string.length} caracteres`
}
console.log('1:',counterString('hola mundo'))
// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
function recortarString(str,char){
  if (str.length < 0 || !str || char < 0 || !char || typeof str !== 'string' || typeof char !== 'number') 
    return alerta
  return str.slice(0,char)
}
console.log('2:',recortarString('hola mundo', 4))
// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
function strToArray(str,char){ 
  if (str.length < 0 || !str || char.length < 0 || !char || typeof str !== 'string' || typeof char !== 'string') 
    return alerta
  return str.split(char)
}

console.log('3:',strToArray('hola que tal',' '))
// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
function strRepeat(str, veces){
  if (!str || str.length < 0 || !veces || veces < 0 || typeof str !== 'string' || typeof veces !== 'number') 
    return alerta
  else {
    str = `${str} `
    return str.repeat(veces)
  }
}
console.log('4:',strRepeat('Hola Mundo',3))
// another way
function strRepeatOtraVez(str,veces){
  if (!str || str.length < 0 || !veces || veces < 0 || typeof str !== 'string' || typeof veces !== 'number') 
    return alerta
  else {
    let contador = ''
    for(let i = 1; i <= veces; i++) contador += `${str} `
    return contador
  }
}
console.log('4.1:', strRepeatOtraVez('Hola Mundo',3))
// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
function revert(string){
  if(!string || string === ' ' || string.length < 2 || typeof string !== 'string') return alerta
  return `"${string}" --> "${string.split('').reverse().join('')}"`
}
console.log('5:',revert('odnuM aloH'))
// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
function contadorVeces(string, key){
  if(!string || !key || typeof string !== 'string' || typeof key !== 'string') 
    return alerta
  else{
    let array = string.split(' ').filter(wordInArray => wordInArray === key)
    return `El string "${string}" contiene "${key}" ${array.length} veces`
  }
} 
console.log('6:',contadorVeces('hola mundo adios mundo','mundo'))
// another way
function contadorVeces2(string, key){
  if(!string || !key || typeof string !== 'string' || typeof key !== 'string') 
    return alerta
  let i = 0,
  contador = 0
  while(i !== -1){
    i = string.indexOf(key,i)
    if(i !== -1){
      i++
      contador++
    }
  }
  return `El texto "${string}" contiene "${key}" ${contador} veces`
} 
console.log('6.1:',contadorVeces2('hola mundo adios mundo','mundo'))
// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
function isPalindromo(string){
  if(!string || typeof string !== 'string' || string.length < 2) return alerta
  let validacion = string.toLowerCase() .split('').reverse().join('')
  return `El texto "${string}" ${(string.toLowerCase() === validacion) ?'si' :'no'} es un palindromo`
}
console.log('7:',isPalindromo('Salas'))
// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
function removePattern(string,pattern){
  if(!string || typeof string !== 'string' || string === ' '|| !pattern || typeof pattern !== 'string') 
    return alerta
  return `${string.replaceAll(pattern,"")}`
}
console.log('8:',removePattern("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"))
// another way
function removePatternWithRegExp(string,pattern){
  if(!string || typeof string !== 'string' || string === ' '|| !pattern || typeof pattern !== 'string') 
    return alerta
  return `${string.replace(new RegExp(pattern,"ig"),"")}`
}
console.log('8.1:',removePatternWithRegExp("xyz1, xyz2, xyz3, xyz4 y xyz5", "[xyz]"));
// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
function getRandom() {
  return Math.round((Math.random() * 100) + 501)
}
console.log('9:',getRandom())
// another way
function getRandom2(min,max) {
  return Math.round((Math.random() * (max - min)) + min)
}
console.log('9.1:',getRandom2(1,10))
// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
function isCapicua(integer){
  if(!integer || typeof integer !== 'number')
    return alerta
  let volteado = integer.toString().split('').reverse().join('')
  return `El numero "${integer}" ${(integer.toString() === volteado)? 'si' :'no'} es capicua`;
  
}
console.log('10:',isCapicua(2002))
// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120
function factorial(n){
  if(!n || n < 0 || Number.isInteger(n) === false || typeof n !== 'number') return alerta
  let contador = 1
  for (let i = 1; i <= n ; i++) {
    contador *= i
  }
  return `El factorial del numero ${n} es ${contador}`
}
console.log('11:',factorial(5))
// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
function isPrime(n){
  if(!n || Number.isInteger(n) === false || typeof n !== 'number' || n === 0 || n === 1) return alerta
  let divisible = null
  for (let i = 2; i < n; i++) {
    if(n % i === 0){
      divisible = true
      break
    }
  }
  return `El numero ${n} ${(divisible)?'no':'si'} es numero primo`
}
console.log('12:',isPrime(7))
// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
function isOddOrEven(n){
  if(!n || Number.isInteger(n) === false || typeof n !== 'number') return alerta
  return `el numero ${n} ${(n % 2 === 0) ?'es par' :'es impar'}`
}
console.log('13:',isOddOrEven(29))
/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
(0 °C × 9/5) + 32 = 32 °F ----> TO FAHRENHEIT
(32 °F − 32) × 5/9 = 0 °C -----> TO CELSIUS*/
function converterCToF(deg,char){
  if(deg === undefined || typeof deg !== 'number' || !char || char.length !== 1 || typeof char !== 'string')
    return alerta
  char = char.toUpperCase()
  if(char === 'C') return `${deg}°C => ${(deg * 9/5) + 32}°F`
  if(char === 'F') return `${deg}°F => ${(deg - 32) * 5/9}°C`
  return `Solo se acepta 'c' o 'f'`
} 
console.log('14:',converterCToF(0,'c'))
console.log('14.1:',converterCToF(212,'F'))
// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
function convertirBinarioADecimal(n,b){
  if (!n || typeof n !== 'number' || !b || typeof b !== 'number') return alerta
  if (b === 2) return `${n} con base 2 --> ${parseInt(n,b)} base 10`
  if (b === 10) return `${n} con base 10 --> ${n.toString(2)} base 2`
  return alerta
}
console.log('15:',convertirBinarioADecimal(100,2))
console.log('15.1:',convertirBinarioADecimal(4,10))
// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
function sacarDescuento(precio,d){
  if(!precio || typeof precio !== 'number' || precio <= 0 || !d || typeof d !== 'number' || d <= 0) 
    return alerta
  return `$${precio} con ${d}% de descuento es $${precio - ((precio * d) / 100)}`
}
console.log('16:',sacarDescuento(1000,20))
// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
function diasPasados(date){
  if(!date || date.length < 9 || typeof date === 'number') return alerta
  if(new Date(date).getFullYear() > fechaHoy.getFullYear()) return 'Ese año aun no existe'
  if(typeof date === "string"){
    let msPasados = Math.floor(fechaHoy - new Date(date))
    return `Han pasado ${Math.floor(msPasados/31556952000)} años`
  }
  if(date instanceof Date === true)
    return `Han pasado ${Math.floor((Math.floor(fechaHoy - date)) / 31556952000)} años`
  return alerta
}
console.log('17:',diasPasados(new Date(1984,4,23)))
console.log('17.1:',diasPasados('2003,09,30'))
console.log('17.2 Dad:',diasPasados('1979,03,22'))
console.log('17.3 Mom:',diasPasados(new Date(1976,02,01)))
// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
function vocalesConaonantes(string){
  if(!string || string.length < 1 || typeof string !== 'string') return alerta
  let vocales = 0,
  consonantes = 0
  string = string.toLowerCase()
  for (let letra of string) {
    if(/[aeiouáéíóúü]/.test(letra)) vocales++
    if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++
  }
  return {
    string, 
    vocales,
    consonantes
  }
}
console.log('18:',vocalesConaonantes('Hola Mundo'))
// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
function validarNombre(string){
  if(!string || string.length < 2 || typeof string !== 'string') return alerta
  return `El nombre "${string}" ${(/^[A-Za-zÁÉÍÓÚÜáéíóúü\s]+$/g.test(string))?'si':'no'} es válido`
}
console.log('19:',validarNombre('Carlos Alberto Sosa Perera'))
// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
function validarEmail(email){
  if(!email || email.length < 5 || typeof email !== 'string') return alerta
  const prueba = (/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email))?'si':'no'
  return `El email ${email} ${prueba} es válido`
}
console.log('20:',validarEmail('carlangas1001@gmail.com'))
// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
function elevarAlCuadrado(array){
  if(!array || array.length < 1 || array instanceof Array === false) return alerta
  for (let el of array) if(typeof el !== 'number') return alerta
  let potenciados = []
  array.forEach(element => {
    element *= element
    potenciados.push(element)
  })
  return `${array} al cuadrado -> ${potenciados}`
}
console.log('21:',elevarAlCuadrado([1,4,5,2]))
// another way
function elevarAlCuadrado2(array){
  if(!array || array.length < 1 || array instanceof Array !== true) return alerta
  for (let el of array) if(typeof el !== 'number') return alerta
  return `${array} al cuadrado -> ${array.map(el=>el*el)}`
}
console.log('21.1:',elevarAlCuadrado2([1,4,5,2]))
// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
function maximosMinimos(array){
  if(!array || array.length < 1 || array instanceof Array !== true) return alerta
  for (let el of array) if(typeof el !== 'number') return alerta
  array.sort((a,b)=>a-b)
  return `Su maximo es: ${array[array.length-1]} y su minimo es: ${array[0]}`
}
console.log('22:',maximosMinimos([1, 4, 5, 99, 100, -200, -60]))
// another way
function maximosMinimos2(array){
  if(!array || array.length < 1 || array instanceof Array !== true) return alerta
  for (let el of array) if(typeof el !== 'number') return alerta
  return `Su maximo es: ${Math.max(...array)} y su minimo es: ${Math.min(...array)}`
}
console.log('22.1:',maximosMinimos2([1, 4, 5, 99, 100, -200, -60]))
// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
function arrayToObject(array){
  if(!array || array.length < 1 || array instanceof Array !== true) return alerta
  for (let el of array) if(typeof el !== 'number') return alerta
  let pares = [],
  impares = []
  array.forEach(el => {
    if((el % 2) === 0) pares.push(el)
    if((el % 2) !== 0) impares.push(el)
  }) 
  return {
    pares,
    impares
  }
}
console.log('23:',arrayToObject([1,2,3,4,5,6,7,8,9,0]))
// another way
function arrayToObject2(array){
  if(!array || array.length < 1 || array instanceof Array !== true) return alerta
  for (let el of array) if(typeof el !== 'number') return alerta
  return {
    pares: array.filter(el => el % 2 === 0),
    impares: array.filter(el => el % 2 === 1)
  }
}
console.log('23.1:',arrayToObject2([1,2,3,4,5,6,7,8,9,0]))
// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7,5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
function ordenamientoArray(array){
  if(!array || array.length < 1 || array instanceof Array !== true) return alerta
  for (let el of array) if(typeof el !== 'number') return alerta
  return {
    array,
    ascendente: array.map(el => el).sort(), //* .map() para crear un nuevo arreglo 
    descendente: array.map(el => el).sort().reverse()
  }
}
console.log('24:',ordenamientoArray([7,5,7,8,6]))
//// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
function eliminandoDuplicados(array){
  if(!array || array.length < 2 || array instanceof Array !== true) return alerta
  return {
    array,
    sinDuplicados: array.filter((value,index,self)=>self.indexOf(value) === index)
  }
}
console.log('25:',eliminandoDuplicados(["x", 10, "x", 2, "10", 10, true, true]))
// another way
function eliminandoDuplicados2(array){
  if(!array || array.length < 2 || array instanceof Array !== true) return alerta
  return {
    array,
    sinDuplicados: [...new Set(array)]
  }
}
console.log('25.1:',eliminandoDuplicados2(["x", 10, "x", 2, "10", 10, true, true]))
// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
function promedio(array){
  if(!array || array.length < 1 || array instanceof Array !== true) return alerta
  for (let el of array) if(typeof el !== 'number') return alerta
  let contador = 0
  array.forEach(el => {
    contador += el
  })
  return `el promedio de ${array.join(' + ')} es: ${contador / array.length}`
}
console.log('26:',promedio([9,8,7,6,5,4,3,2,1,0]))
// another way
function promedio2(array){
  if(!array || array.length < 1 || array instanceof Array !== true) return alerta
  for (let el of array) if(typeof el !== 'number') return alerta
  return array.reduce((total,numero,index,array)=>{
    total += numero
    if(index === (array.length-1))
      return `el promedio de ${array.join(' + ')} es: ${total / array.length}`
    return total
  })
}
console.log('26.1:',promedio2([9,8,7,6,5,4,3,2,1,0]))
console.groupEnd('1-26')
// 27) Programa una clase llamada Pelicula.
/*
La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  -+ Todos los datos del objeto son obligatorios.
  -+ Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
  -+ Valida que el título no rebase los 100 caracteres.
  -+ Valida que el director no rebase los 50 caracteres.
  -+ Valida que el año de estreno sea un número entero de 4 dígitos.
  -+ Valida que el país o paises sea introducidos en forma de arreglo.
  -+ Valida que los géneros sean introducidos en forma de arreglo.
  -+ Valida que los géneros introducidos esten dentro de los géneros aceptados.
  -+ Crea un método estático que devuelva los géneros aceptados*.
  -+ Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  -+ Crea un método que devuelva toda la ficha técnica de la película.
  -+ Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: 
 "Action","Adult", "Adventure", "Animation", "Biography","Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"
*/
class Pelicula{
  // ATRIBUTOS
  constructor({id,titulo,director,year,paises,generos,calificacion}){
    this.id = id
    this.titulo = titulo
    this.director = director
    this.year = year
    this.paises = paises
    this.generos = generos
    this.calificacion = calificacion

    this.validarId(id)
    this.validarTitulo(titulo)
    this.validarDirector(director)
    this.validarYear(year)
    this.validarPaises(paises)
    this.validarGeneros(generos)
    this.validarCalificacion(calificacion)
  }
  // METODOS GENERICOS
  validarStrings(atributo){
    if(!atributo || typeof atributo !== 'string') return false
    else return true
  }
  validarNumCaracteres(atributo,cantidad){
    if(typeof cantidad !== 'number' || !cantidad || atributo.length > cantidad) 
      return false
    else return true
  }
  validarArrays(atributo){
    if(!atributo || atributo instanceof Array === false || atributo.length < 1) 
      return false
    for (let string of atributo) {
      if(typeof string !== 'string') return false
      if(string.length < 2) return false 
    }
    return true
  }
  // METODOS DE PELICULA
  validarId(id){
    if(!(this.validarStrings(id))) return console.warn('Id no es string')
    else
      if(!(/^([a-z]){2}([0-9]){7}$/.test(id))) 
        return console.warn(`El id: ${id} no cumple con los estandares IMDB`)
  }
  validarTitulo(titulo){
    if(!(this.validarStrings(titulo))) return console.warn('Titulo no valido porque no es string')
      if(!(this.validarNumCaracteres(titulo,100))) return console.warn('Longitud de titulo incorrecto')
  }
  validarDirector(director){
    if(!(this.validarStrings(director))) return console.warn('Director no valido porque no es string')
      if(!(this.validarNumCaracteres(director,50))) return console.warn('Longitud de director incorrecto')
  }
  validarYear(year){
    if(!year || typeof year !== 'number' || year.toString().length !== 4) 
      return console.warn('Ingresa un año valido')
    if(year > fechaHoy.getFullYear()) return console.warn('Ese año no existe')
  }
  validarPaises(paises){
    if(!(this.validarArrays(paises))) return console.warn('Paises Debe ser un arreglo con datos validos')
  }
  validarGeneros(generos){
    if(!(this.validarArrays(generos))) return console.warn('Los generos deben ser un arreglo con datos validos')
    else{
      for (let genre of generos) {
        if(!(Pelicula.listaGeneros.includes(genre))) return console.warn('Un genero no existe')
      }
    }
  }
  static get listaGeneros(){
    return ["Action","Adult", "Adventure", "Animation", "Biography","Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
  }
  static generos(){
    return console.info(`Los generos aceptados son ${Pelicula.listaGeneros.join(', ')}`)
  }
  validarCalificacion(calificacion){
    if(typeof calificacion !== 'number' || calificacion > 10 || calificacion < 0) 
      return console.warn('La calificacion debe ser un numero entre 0-10 y con un decimal')
    else return this.calificacion = calificacion.toFixed(1)
  }
  verFicha(){
    return console.log(`Ficha técnica:
    \nIMDB: ${this.id}
    \nTitulo: ${this.titulo}
    \nDirector: ${this.director}
    \nAño: ${this.year}
    \nPaises: ${this.paises}
    \nGeneros: ${this.generos}
    \nCalificacion: ${this.calificacion}`)
  }
}
console.group('27:')
Pelicula.generos();
const peli = new Pelicula({
  id:'tt9376612',
  titulo: 'Shang-Chi and the Legend of the Ten Rings',
  director: 'Destin Daniel Cretton',
  year: 2021,
  paises: ['USA','Japan'],
  generos: ["Action","Adventure","Fantasy"],
  calificacion: 8.91
})
peli.verFicha()
console.groupEnd('27:')

console.group('Peliculas automatizadas:')
const peliculasEnArray = [
  {
    id:'tt9376612',
    titulo: 'Shang-Chi and the Legend of the Ten Rings',
    director: 'Destin Daniel Cretton',
    year: 2021,
    paises: ['USA','Japan'],
    generos: ["Action","Adventure","Fantasy"],
    calificacion: 8.1
  },
  {
    id:'tt4154796',
    titulo: 'Avengers: Endgame',
    director: 'Anthony Russo & Joe Russo',
    year: 2019,
    paises: ['USA'],
    generos: ["Action","Adventure","Drama"],
    calificacion: 8.4
  },
  {
    id:'tt2560140',
    titulo: 'Shingeki no kyojin',
    director: 'Eren Jaeger',
    year: 2013,
    paises: ['Japan'],
    generos: ["Action","Adventure","Animation"],
    calificacion: 9
  }
]

function pelisGratis(array){
  for (let el of array) {
    console.log(`Pelicula: ${array.indexOf(el) + 1} `)
    new Pelicula(el).verFicha()
  }
}
pelisGratis(peliculasEnArray)
console.groupEnd('Peliculas automatizadas:')
