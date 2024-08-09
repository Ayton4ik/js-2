// const date1 = new Date().getTime();
// console.log('date1: ', date1);

// const date = Date.now();
// console.log('date: ', date);
// 1. Створити функцію, яка повертає поточну дату та час.

const date = function(){
    console.log(new Date(50000));
    return new Date(50000);
};
const date2 = date();

// 2. Створити функцію, яка приймає дату та повертає рік.

const year = function(date){
    console.log(date.getFullYear());
};
year(date2);

// 3. Створити функцію, яка приймає дату та повертає місяць.



// 4. Створити функцію, яка приймає дату та повертає день місяця.

// 5. Створити функцію, яка приймає дату та повертає години.

// 6. Створити функцію, яка приймає дату та повертає хвилини.

// 7. Створити функцію, яка приймає дату та повертає секунди.

// 8. Створити функцію, яка перевіряє чи є дата вихідним днем (субота або неділя).
// 9. Створити функцію, яка порівнює дві дати та повертає різницю в днях.

// 10. Створити функцію, яка приймає дату та кількість днів, та повертає нову дату після додавання цієї кількості днів.


function findDate () {
    const actualDate = new Date();
    const actualYear = actualDate.getFullYear();
    const actualMonth = actualDate.getMonth()+1;
    const actualDay = actualDate.getDate();
    console.log(actualYear, actualMonth, actualDay);
};

findDate()