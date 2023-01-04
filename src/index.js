const first = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
}

const second = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety'
}


module.exports = function toReadable (number) {
    // 1. Сначала выясняем сколько разрядов. levels  
    // 2. 
    // console.log()
    // console.log("=".repeat(30))
    // console.log("Начальное значение number = 📕", number)
    let levels = number.toString().length - 1
    // console.log("Количество разрядов levels=", levels)
    let level
    let result_array = []
    
    // Разряд 2 - это сотые
    if (levels > 1) {
        // console.log("-".repeat(40))
        // console.log("Просчитываем 2 разряд")
        level = 2
        let current = Math.floor(number / 10**level)
        result_array.push(first[current] + ' hundred')
        
        number = number % 10**level 
        // console.log("Число текущего регистра current =", current)
        // console.log("Отстаток для следующей операции number =", number)
    }



    // Разряд 1 и 0 - это десятые или единицы
    // console.log("-".repeat(40))
    // console.log("Просчитываем 2 и 1 разряд")
    if (levels > 0) {
        // считаем десятки
        if (number < 20) {
            // подставляем готовые значения
            let _result = first[number]
            if (_result != '') {
                result_array.push(_result)
            }
        } else {
            // подставляем десяток + еденичку
            // например twenty + five
            let _double = second[Math.floor(number/10)]
            let _single = first[Math.floor(number%10)]
            let _result = _single === '' ? _double : `${_double} ${_single}`
            result_array.push(_result)
        }
    } else {
        // считаем единички
        let _number = first[number]
        if (_number === '') {_number = 'zero'}
        result_array.push(_number)
    }
    

    // console.log('Финальный массив result_array: ', result_array)
    let result = result_array.join(' ')
    // console.log("result = ⭐️", result)
    return result
}
