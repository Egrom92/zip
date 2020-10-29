// Возвращает новую функцию, без null, 0, '', undefined, NaN, 0n
function zip (array) {
    const newArr = array.filter(el => el);

    return newArr;
}

zip([0, -1, 0, 1, 2, 3, null, undefined, 4, NaN, 0n, '', '', 5, null, 'Текст']); // [-1, 1, 2, 3, 4, 5, 'Текст']


console.log(zip([0, -1, 0, 1, 2, 3, null, undefined, 4, NaN, 0n, '', '', 5, null, 'Текст']));
