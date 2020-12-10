var nicknameIndicator = document.getElementById('nicknameindicator');
var nickLenght = document.getElementById('nicklenght');
var firstLetterRadio = document.getElementById("sonant"); 

var yourNick = nicknameIndicator.textContent;

var sonants = "aeiou";
var consonants = "bcdfghjklmnprqstvwyz";

var nick;
var lastLetter;

var sonantAmount = 0;
var consonantAmount = 0;

function setNick() {

    var charLimit;

    if (nickLenght.value == null || nickLenght.value == "") {

        alert("Nick Lenght can not be empty");
        return;
    }
    
    charLimit = parseInt(nickLenght.value);

    if(charLimit < 3){
       
        alert("Min 3 letter");
        return;
    }

    nick = "";

    for (var i = 0; i < charLimit; i++) {

        if (i == 0) {

            if(firstLetterRadio.checked){

                nick = gntRndSonantLetter();
            }
            else{

                nick = gntRndConsonantLetter();
            }
        }
        else {

            nick += gntRndNick();
        }
    }

    nicknameIndicator.innerHTML =  nick.toUpperCase();
}

function gntRndNick() {

    var letter;

    if (sonantAmount > 1) {

        letter = gntRndConsonantLetter();
    }
    else if (consonantAmount > 1) {

        letter = gntRndSonantLetter();
    }
    else {

        if (Math.random() > 0.5) {

            letter = gntRndSonantLetter();
        }
        else {

            letter = gntRndConsonantLetter();
        }
    }

    return letter;
}

function gntRndSonantLetter() {

    var randomIndex = Math.round(Math.random() * (sonants.length - 1));
    letter = sonants[randomIndex];

    consonantAmount = 0;
    sonantAmount++;

    console.log(randomIndex + "  sesli " + sonantAmount + "  " + letter);

    return letter;
}

function gntRndConsonantLetter() {

    var randomIndex = Math.round(Math.random() * (consonants.length - 1));
    letter = consonants[randomIndex];

    sonantAmount = 0;
    consonantAmount++;

    console.log(randomIndex + "  sessiz   " + letter);

    return letter;
}