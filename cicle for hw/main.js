


for (let number = 2; number <= 50; number++) {
    let isPrime = true;

    // Проверяем, делится ли число нацело на какое-либо число от 2 до корня из числа
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break; // Если число делится нацело, оно не является простым, и мы выходим из внутреннего цикла.
        }
    }

    if (isPrime) {
        console.log(number); // Если число простое, выводим его. ничего не понял сделано с chat gpt
    }
}

const N = parseInt(prompt("Введите число N:"));

console.log( N );

for (let i = 1; i <= N; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        console.log(i);
    }
}

