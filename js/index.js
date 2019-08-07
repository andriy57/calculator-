$(document).ready(function () {
    var calc = $('.calculator');
    var calcDisplay = calc.find('.calculator__display');
    var calcKeys = calc.find('.calculatorKey');
    var calcButton = calc.find('.calculator__button');
    var calcClear = calc.find('.calculator__clear');
    var calcEqual = calc.find('.calculatorKey--equal');
    var calcPower = calc.find('.calculator__power');
    var calcSpace = calc.find('.calculator__backspace');
    calcKeys.each(function () {
        var current = $(this).attr('value');
        $(this).text(current);
    });
    calcButton.on('click', function () {
        calcDisplay.val( calcDisplay.val() + $(this).attr('value') );
    });
    calcClear.on('click', function () {
        calcDisplay.val('');
    });
    calcEqual.on('click', function () {
        calcDisplay.val( eval( calcDisplay.val() ) );
    });
     calcPower.on('click', function () {
        calcDisplay.val( Math.pow( calcDisplay.val(), 3 ) );
    });
    calcSpace.on('click', function () { // http://www.w3schools.com/jsref/jsref_substring.asp
        calcDisplay.val( calcDisplay.val().substring(0, calcDisplay.val().length-1) );
    });

});