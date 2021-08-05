// Напиши класс StringBuilder. 
// На вход он получает один параметр - строку, которую записывает в свойство _value.
// Добавь классу следующий функционал:
// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value

class StringBuilder {
    constructor (value) {
        this._value = value;
    }
    get value () {
        return this._value;
    }
    append(str) {
        let newStr = this._value.split("");
        newStr.push(str);
        this._value = newStr.join("");
    }
    prepend(str) {
        let newStr = this._value.split();
        let res = [str, ...newStr].join();
        this._value = res;
    }
    pad(str) {
        let newStr = this._value.split();
        let res = [str, ...newStr, str].join('');
        this._value = res;
    }
}


const builder = new StringBuilder('.');
builder.append('^');
console.log(builder.value); // '.^'
builder.prepend('^');
console.log(builder.value); // '^.^'
builder.pad('=');
console.log(builder.value); // '=^.^='