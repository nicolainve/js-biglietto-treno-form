var userInput = document.getElementById('user-input');

var ticket = document.getElementById('ticket');

var btnGenerate = document.getElementById('btn-generate');

var btnUndo = document.getElementById('btn-undo');

var btnBack = document.getElementById('go-back');

btnGenerate.addEventListener('click', function () {
    var name = document.getElementById('name').value;

    
    var km = document.getElementById('km').value;
    
    var age = document.getElementById('age').value;
    
    if (name == '' || km == 0 || age == '') {
        alert('Inserisci dei valori appropiati')
    } else {
        var rate = 0.21;
    
        var price = km * rate;
    
        var offer = 'Biglietto Intero';
    
        if (age == 'minorenne') {
            offer = 'Sconto Minorenni';
            price -= price * 0.2;
        } else if (age == 'Over65') {
            offer = 'Sconto Over65';
            price -= price * 0.4;
        }
    
        price = price.toFixed(2); + '€';
    
        var carrozza = Math.floor( Math.random() * 10 ) + 1;
    
        var codiceCp = Math.floor( Math.random() * (10000 - 9000) ) + 9000;
    
        document.getElementById('username').innerHTML = name;
    
        document.getElementById('offerta').innerHTML = offer;
    
        document.getElementById('carrozza').innerHTML = carrozza;
    
        document.getElementById('codice-cp').innerHTML = codiceCp;
    
        document.getElementById('costo').innerHTML = price;
    
        userInput.className = 'hidden';
        ticket.className = 'show';
    }
});

btnUndo.addEventListener('click', function() {
    ticket.className = 'hidden';
    

    document.getElementById('name').value = '';
    
    document.getElementById('km').value = '';
    
    document.getElementById('age').value = '';


    document.getElementById('username').innerHTML = '';

    document.getElementById('offerta').innerHTML = '';

    document.getElementById('carrozza').innerHTML = '';

    document.getElementById('codice-cp').innerHTML = '';

    document.getElementById('costo').innerHTML = '';
});

btnBack.addEventListener('click', function() {
    userInput.className = 'show';
    ticket.className = 'hidden';

    document.getElementById('name').value = '';
    
    document.getElementById('km').value = '';
    
    document.getElementById('age').value = '';
})