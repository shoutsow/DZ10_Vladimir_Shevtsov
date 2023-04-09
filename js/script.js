document.write(`<p>`);
document.write('1)', '&emsp;');
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    document.write(arr[i] + ' ');
}
document.write(`</p>`);
document.write(`<hr>`);
document.write(`<br>`);


document.write(`<p>`);
document.write('2)', '&emsp;');
let arr1 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < 0 && arr1[i] > -10 && arr1[i] < -3) {
        document.write(arr1[i] + ' ');
    }
}
document.write(`</p>`);
document.write(`<hr>`);
document.write(`<br>`);


document.write(`<p>`);
document.write('3)', '&emsp;');
let arr2 = [];
let arr3 = [];
let = result = 0;
for (let i = 23; i <= 57; i++) {
    arr2.push(i);
}
let j = 23;
while (j <= 57) {
    arr3.push(j);
    j++;
}
for (let i = 0; i < arr2.length; i++) {
    result += arr2[i];
}
document.write('Массив через "for":', `<br>` + arr2 + `<br>`);
document.write('Массив через "while":', `<br>` + arr3 + `<br>`);
document.write('Сумма элементов массива =' + '&ensp;' + result);
document.write(`</p>`);
document.write(`<hr>`);
document.write(`<br>`);


document.write(`<p>`);
document.write('4)', '&emsp;');
let arr4 = ['10', '20', '30', '50', '235', '3000'];
let el1 = '';
let el2 = '';
let el5 = '';
for (let i = 0; i < arr4.length; i++) {
    if (arr4[i][0] == '1') {
        el1 += arr4[i] + '&ensp;';
    }
    else if (arr4[i][0] == '2') {
        el2 += arr4[i] + '&ensp;';
    }
    else if (arr4[i][0] == '5') {
        el5 += arr4[i] + '&ensp;';
    }
}
document.write('Числа из массива, которые начинаются на цифру 1:' + '&emsp;' + el1 + `<br>`);
document.write('Числа из массива, которые начинаются на цифру 2:' + '&emsp;' + el2 + `<br>`);
document.write('Числа из массива, которые начинаются на цифру 5:' + '&emsp;' + el5);
document.write(`</p>`);
document.write(`<hr>`);
document.write(`<br>`);


document.write(`<p>`);
document.write('5)', '&emsp;');
document.write('Вывод дней недели циклом "for":', '&emsp;');
let week = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
for (let i = 0; i < week.length; i++) {
    if (week[i] == 'СБ' || week[i] == 'ВС') {
        week[i] = `<b>` + week[i] + `</b>`;
    }
    document.write(week[i] + '&emsp;');
}
document.write(`</p>`);
document.write(`<hr>`);
document.write(`<br>`);


document.write(`<p>`);
document.write('6)', '&emsp;');
let arr5 = [];
for (let i = 0; i < 5; i++) {
    arr5.push (prompt('Вводите произвольные данные (5 раз), чтобы набрать массив', 'ZW38'));
}
arr5[arr5.length] = prompt('Добавьте в конец массива любой элемент', '5element');
document.write('Получился такой массив:', '&emsp;' + arr5 + `<br>`);
document.write('Получаем последний элемент массива, используя свойство "length":', '&emsp;' 
+ arr5[arr5.length -1]);
document.write(`</p>`);
document.write(`<hr>`);
document.write(`<br>`);


document.write(`<p>`);
document.write('7)', '&emsp;');
let arr6 = [];
let c = 0;
while(true) {
    arr6.push (prompt('Вводите числа, пока не надоест. Затем оставьте поле пустым', 300));
    if (!(arr6[c]).trim()) {
        arr6.pop();
        break;
    }
    else if (isFinite(+arr6[c]) !== true) {
        alert('Будьте внимательней, это НЕ число!');
        arr6.pop();
        continue;   
    }
    c++;
}
document.write('Получился вот такой массив:', '&emsp;' + arr6 + `<br>`);
document.write('Выполняем сортировку чисел массива, и выводим результат на экран:', `<br>`
+ arr6.sort(function(a, b) {return a - b}));
document.write(`</p>`);
document.write(`<hr>`);
document.write(`<br>`);


document.write(`<p>`);
document.write('8)', '&emsp;');
let arr7 =  [12, false, 'Текст', 4, 2, -5, 0];
let rev = [];
let i = arr7.length - 1;
while ( i >= 0) {
    rev.push(arr7[i]);
    i--;
}
document.write('Переворачиваем массив, используя цикл "while":', `<br>` + rev + `<br>`);
document.write('Переворачиваем массив, используя метод "reverse":', `<br>` + arr7.reverse());
document.write(`</p>`);
document.write(`<hr>`);
document.write(`<br>`);


document.write(`<p>`);
document.write('9)', '&emsp;');
let arr8 = [5, 9, 21, , , 9, 78, , , , 6];
let empty = 0;
for (let i = 0; i < arr8.length; i++) {
    if (arr8[i] == undefined) {
        empty += 1;
    }
}
document.write('Количество нулевых (пустых) элементов в заданном целочисленном массиве:', '&emsp;' + empty);
document.write(`</p>`);
document.write(`<hr>`);
document.write(`<br>`);


document.write(`<p>`);
document.write('10)', '&emsp;');
let arr9 = [48, 9, 0, 4, 21, 2, 1, 0, 8, 84, 76, 8, 4, 13, 2];
let sum = 0;
let first0 = 0;
let last0 = 0;
for (let i = 0; i < arr9.length; i++) {
    if (arr9[i] == 0) {
        first0 = i;
        break;
    }
}
for (let i = arr9.length; i > 0; i--) {
    if (arr9[i] == 0) {
        last0 = i;
        break;
    }
}
for (let i = first0 + 1; i <= last0 - 1; i++) {
    sum += arr9[i];
}
document.write('Сумма элементов массива между двумя нулями (пример1):', '&emsp;' + sum + `<br>`);
let arr91 = [1, 8, 0, 13, 76, 8, 7, 0, 22, 0, 2, 3, 2];
let sum2 = 0;
let fir0 = 0;
let las0 = 0;
for (let i = 0; i < arr91.length; i++) {
    if (arr91[i] == 0) {
        fir0 = i;
        break;
    }
    for (let i = arr91.length; i > 0; i--) {
        if (arr91[i] == 0) {
            las0 = i;
            break;
        }
    }
}
for (let i = fir0 + 1; i <= las0 - 1; i++) {
    sum2 += arr91[i];
}
document.write('Сумма элементов массива между двумя нулями (пример2):', '&emsp;' + sum2);
document.write(`</p>`);
document.write(`<hr>`);
document.write(`<br>`);


document.write(`<span>`, '11)', `<br>`, `</span>`);
document.write(`<p class="yolochka">`);
let hig = prompt('Введите высоту треугольника (целое число в разумных пределах: <= 45)', 10);
let str = '^';
document.write(str + `<br>`);
for (let i = 1; i < hig; i++) {
    if (hig <= 45) {
        str += '^^';
        document.write(str + `<br>`);
    }
    else {
    alert('Попуститесь, ёлочка получится слишком большой!')
    break;
    }
}
document.write(`</p>`);