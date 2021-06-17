//Задача 1

let num = [1,2,3,4,5];

for (let i = 0; i <=4; i++){
    console.log(num[i]);
}

//Задача 2

let numbers = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
    for (let i = 0; i <= numbers.length-1; i++){
        if(numbers[i] >-3 || numbers[i] <-10 ) continue;
        console.log(numbers[i]);
    }

// Задача 3

    let array = [23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57];
    let result = 0;

    for (let i = 0; i < array.length; i++) {
    result += array[i];
}
console.log(result);

// Задача 4

let arr = ['10', '20', '30', '50', '235', '3000'];
    for (let i = 0; i <= arr.length-1; i++ ) {
        if(arr[i][0] !=1 && arr[i][0] !=2 && arr[i][0] !=5)continue;
        console.log(arr[i]);
    };

// задача 5

let arr1 = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

for (let i = 7; i <=arr1.length; i++) {
    document.write(arr1[0] + ' ' + arr1[1] + ' ' + arr1[2] + ' ' + arr1[3] + ' ' + arr1[4] + ' ' + '<b>' + arr1[5] + ' ' + arr1[6] + '</b>');
}

//Задача 6 

let arrMix = [
    1,
    2,
    'Никита',
    [1,2,3]
];

arrMix[arrMix.length] = true ;
console.log(arrMix[4]);

//задача 7


//Задача 8 

let arr2 = [
    12,
    false,
    'текст',
    4,
    2,
    -5,
    0
];

reversed=arr2.reverse();

for (i = 7; i <= arr2.length; i++) {
    console.log(arr2);
}
    




    



