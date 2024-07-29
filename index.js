
// console.log('Логування до таймауту');

// setTimeout((value) => {
//     console.log(`Виклик функції через ${value} мс`);
// },  1000, '1000')

// console.log('Логування після таймауту');





// setInterval(() => {
//     console.log(`виклик функції`)
// }, 1000)



let num = 0;

const intervalNumId = setInterval(() => {
    console.log(`Ваше число ${num}`);
    num += 1;

    if(num > 10){
        clearInterval(intervalNumId);
    }
}, 1000);

console.log(intervalNumId);