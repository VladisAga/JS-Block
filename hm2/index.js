var firstGenre = 'detective';
var secondGenre = 'non-fiction';
var thirdGenre = 'fiction';
var advice = 'Recomend to read this book: ';

var quastionDoYouLike = confirm('Do you like reading?');
if (quastionDoYouLike) {
    var whatGenere = prompt('What genere do you prefer?');
    if (whatGenere === firstGenre) {
        var age = prompt('How old are you?');
        age = Number(age);
        if (age <= 10 && age >= 0) {
            alert(advice + 'Comissioner Gordon');
        } else if (age <= 20) {
            alert(advice + 'Sherlock Holmes');
        } else if (age <= 30) {
            alert(advice + 'The girl with the dragon tattoo');
        } else if (age >= 31) {
            alert(advice + 'How to safe your health');
        } else {
            alert('Go to the hospital, guy');
        }
    } else if (whatGenere === secondGenre) {
        var age = prompt('How old are you?');
        age = Number(age);
        if (age <= 10 && age >= 0) {
            alert(advice + 'The Adventures of Tom Sowyer');
        } else if (age <= 20) {
            alert(advice + 'The Master and Margarita');
        } else if (age <= 30) {
            alert(advice + 'War and peace');
        } else if (age >= 31) {
            alert(advice + 'How to safe your health');
        } else {
            alert('Go to the hospital, guy');
        }
    } else if (whatGenere === thirdGenre) {
        var age = prompt('How old are you?');
        age = Number(age);
        if (age <= 10 && age >= 0) {
            alert(advice + 'Dragons');
        } else if (age <= 20) {
            alert(advice + 'Lord of the flies');
        } else if (age <= 30) {
            alert(advice + '1984');
        } else if (age >= 31) {
            alert(advice + 'How to safe your health');
        } else {
            alert('Go to the hospital, guy');
        }
    } else {
        alert('Sorry, we do not have this genere(');
    }
} else {
    var quastionWhy = prompt('Why do not you read books?');
    var age = prompt('How old are you?');
    alert('I understand why you do not like to read books. But if you wanted to try, I would recomend to read this book!');
    age = Number(age);
    if (age <= 10 && age >= 0) {
        alert('The Adventures of Tom Sowyer');
    } else if (age <= 20) {
        alert('The Master and Margarita');
    } else if (age <= 30) {
        alert( 'War and peace');
    } else if (age >= 31) {
        alert( 'How to safe your health');
    } else {
        alert('Go to the hospital, guy');
    }
}
