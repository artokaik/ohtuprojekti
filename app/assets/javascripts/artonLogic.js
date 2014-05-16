/**
 * Created by artokaik on 16.5.2014.
 */


var testCase = function() {
    var listOfNumbers;
    var i = 0;
    var started;
    var timesPressed;
    var guess;

    return{

        getNextNumber: function(){
            var ret = listOfNumbers[i];
            i++;
            return ret;
        },
        isNextNumber: function(){
            if(i<listOfNumbers.length){
                return true;
            }else{
                return false;
            }
        },
        guessingStarted: function(){
            var d = new Date();
            started = d.getTime();
        },
        recordKeyPressed: function(){
            var d = new Date();
            var pressed = d.getTime();
            timesPressed.push(pressed-started);
        },
        setGuess: function(x){
            guess = x;
        },
        getGuess: function(x){
            return guess;
        },
        getTimes: function(){
            return timesPressed;
        },
        initialize: function(numbers){
            setListOfNumbers();
            i=0;
            started = 0;
            timesPressed = new Array;
            guess = "";

            function setListOfNumbers(){
                listOfNumbers = new Array;
                var e=0;
                var d=0;
                for(x=0;x<numbers;x++){
                    while(e==d) {
                        d = Math.floor((Math.random() * 9) + 0);
                    }
                    e=d;
                    listOfNumbers[x]=d;
                }
            }
        }
    }

}()