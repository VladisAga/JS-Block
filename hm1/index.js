var greeting = 'Добро пожаловать!';
var notification = 'У меня есть 4 переменные с разными типами данных';
var type = 'Тип переменной: ';
var stringValue = 'Первое значение с типом string';
var nValue = 228;
var bigIntValue = 228228228228228228228n;
var boolenValue = true;
var questionToUser = 'Понравился ли вам сайт?';
var questionToUser2 = 'Точно понравился??';
var questionToUser3 = 'Точно-точно???';
var statement = 'Да конечно нравится, что я спрашиваю, жми да!';
var responseUser = 'Ответ пользователя: ';

alert(greeting);
alert(notification);
alert(stringValue);
var typeOfVariable = typeof stringValue; 
alert(type+typeOfVariable);
alert(nValue);
typeOfVariable = typeof nValue;
alert(type+typeOfVariable);
alert(bigIntValue);
typeOfVariable = typeof bigIntValue;
alert(type+typeOfVariable);
alert(boolenValue);
typeOfVariable = typeof boolenValue;
alert(type+typeOfVariable);

confirm(questionToUser);
confirm(questionToUser2);
confirm(questionToUser3);
confirm(statement);
typeOfVariable = typeof confirm(statement);
alert(responseUser+typeOfVariable);




