var question = prompt('Введи любую строку как хочешь');
question = question.toLowerCase().trim();
var BigStart = question[0].toUpperCase();
question = BigStart + question.slice(1);
var finalVar = '';

for (var i = 0; i < question.length; i++) {

    if (question[i] === ' ') {
        finalVar += ' ' + question[i + 1].toUpperCase();
    } else {
        finalVar += question[i];
    }
    console.log(finalVar);
}

alert(finalVar);
