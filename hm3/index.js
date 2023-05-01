var askNumber = +prompt('Choose a number');
var askSteps = +prompt('How many steps do you want?');

for (var i = 0; i <= askSteps; i++) {

    if (i === 0) {
        continue;
    }

    askNumber = i * askNumber;
}

if (askNumber % 2 === 0) {
alert('Your new number:' + ' ' + askNumber + ' , it is even!');
} else {
    alert('Your new number:' + ' ' + askNumber + ' , it is odd!');
}

