// // 1) Ф-ция принимает 2 числа...
// function isNumBigger (num1, num2) {
//   if (num1 < num2) return -1
//   else if (num1 > num2) return 1
//   else return 0
// }
//
// console.log(isNumBigger(11, 1))

// // 2) Функция вычисляет факториал переданного числа
// function factorial (num) {
//   return (num !== 1) ? num * factorial(num - 1) : 1;
// }
//
// console.log(factorial(3))

// // 3) Функция превращает 3 цифры в 1
// function join (a, b, c) {
//   let arr = [a, b, c]
//   console.log(arr.join(""))
// }
//
// join(1,2,6)

// // 4) Функция про прямоугольник
// function square (a, b = a) {
//   return a * b
// }
//
// console.log(`Площадь прямоугольника - ${square(5, 2)} кв. ед.`)

// 5) Совершенное число
function perfect (num) {
  let sum = 0
  for (let i = 1; i < num; i++) {
    if (num % i === 0){
      sum += i
    }
  }
  if (sum === num) return console.log(`Число ${num} совершенное!`)
}

perfect(6)