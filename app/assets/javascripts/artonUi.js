/**
 * Created by artokaik on 16.5.2014.
 */

var ui = function(){
    var textNumber = "#number";
    var textInstructions = "#instructions";
    var buttonStart = "#start";
    var buttonReady = "#ready";
    var buttonRestart = "#again";
    var inputGuess = "#input";
    var listReactionTimes = "#times";

    return {
        startTest: function() {
            testCase.initialize(4);
            $(textNumber).show();
            $(buttonStart).hide();
            var numberReplacer = setInterval(function () {
                replaceNumber()
            }, 1000);


            function replaceNumber(numbers) {
                if (testCase.isNextNumber()) {
                    $(textNumber).text(testCase.getNextNumber());
                } else {
                    clearInterval(numberReplacer);
                    $(textNumber).hide().text("");
                    startGuessing();
                }
            }


            function startGuessing() {
                testCase.guessingStarted();
                $(textNumber).hide();
                $(inputGuess).show().select();
                $(buttonReady).show()
                $(inputGuess).keypress(function () {
                    testCase.recordKeyPressed();
                });
            }
        },


        getResult: function () {
            $(buttonReady).hide();
            testCase.setGuess($(inputGuess).val());
            $(inputGuess).hide();
            $(textInstructions).text("Arvauksesi oli: " + testCase.getGuess());
            var timesPressed = testCase.getTimes();
            var n = timesPressed.length;
            for (x = 0; x < n; x++) {
                $(listReactionTimes).prepend("<li> painallus: " + timesPressed.pop() + " ms.</li>");
            }
            $(buttonRestart).show();
        },

        restartTest: function(){
            $(listReactionTimes).empty();
            $(buttonRestart).hide();
            ui.startTest();
        }

    };
}()