 // Crie um array que receba 5 itens e exiba no console.
let estilosMusicais = ["Samba", "Pagode", "Bossa Nova", "MPB", "Rock"]
console.log(estilosMusicais)

// Utilize um método para adicionar um nome ao inicio do array.
estilosMusicais.unshift("Axé")
console.log(estilosMusicais)

// Utilize um método para remover o último nome do array.
estilosMusicais.pop()
console.log(estilosMusicais)

// Utilize um método para adicionar dois nomes ao fim do array.

estilosMusicais.push("Rap", "Jazz")
console.log(estilosMusicais)
// Utilize um método para remover o primeiro nome do array.
estilosMusicais.shift()
console.log(estilosMusicais)
// Utilize um método para organizar em ordem crescente o seguinte array:
 const numbers = [7,5,6,3,8,9,2,1,4]
 numbers.sort(function(a, b) {
     return (a-b)
 })
 console.log(numbers)