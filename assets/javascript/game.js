$(document).ready(function () {
    // Creating random SVGAnimatedNumberList.
    var randomNumber = Math.floor((Math.random() * 102)) + 19;
    $(".random-Number").html(randomNumber);
    console.log(randomNumber);
    var blueGem = Math.floor((Math.random() * 11)) + 1;
    console.log(blueGem);
    var greenGem = Math.floor((Math.random() * 11)) + 1;
    console.log(greenGem);
    var pinkGem = Math.floor((Math.random() * 11)) + 1;
    console.log(pinkGem);
    var redGem = Math.floor((Math.random() * 11)) + 1;
    console.log(redGem);

    // Ceating the initial state of score.
    var score = 0;
    $(".score").html(score);

    var wins = 0;
    $(".winsCount").html(wins);
    var loss = 0;
    $(".lossesCount").html(loss);

    // Creationg a fuctions.

    function resetValues() {
        console.log("*****************");
        score = 0;
        randomNumber = Math.floor((Math.random() * 102)) + 19;
        $(".random-Number").html(randomNumber);
        console.log(randomNumber);
        blueGem = Math.floor((Math.random() * 11)) + 1;
        console.log(blueGem);
        greenGem = Math.floor((Math.random() * 11)) + 1;
        console.log(greenGem);
        pinkGem = Math.floor((Math.random() * 11)) + 1;
        console.log(pinkGem);
        redGem = Math.floor((Math.random() * 11)) + 1;
        console.log(redGem);
    };

    function resetGameWins () {
        if (wins === 5) {
            alert(" YOU WON THE GAME !!!!!");
            wins = 0;
            $(".winsCount").html(wins);
            loss = 0;
            $(".lossesCount").html(loss);
        };
    };

    function resetGameLoss () {
        if (loss === 3) {
            alert("YOU FAIL !!!!!!");
            wins = 0;
            $(".winsCount").html(wins);
            loss = 0;
            $(".lossesCount").html(loss);
        };
    };

    function scoreCounter () {
        if (randomNumber === score) {
            $(".feedBack").html("   You Win !!!!   ");
            wins += 1;
            $(".winsCount").html(wins);
            resetValues();
            resetGameWins();
        }
    
        else if (randomNumber < score) {
            $(".feedBack").html("    ;(   ");
            loss += 1;
            $(".lossesCount").html(loss);
            resetValues();
            resetGameLoss();
        };        
    };
    

    // Creating functions to add random values of gems.
    $("#blue-Gem").on("click", function () {
        score = score + blueGem;
        $(".score").html(score);
        scoreCounter();
        
    });

    $("#green-Gem").on("click", function () {
        score = score + greenGem;
        $(".score").html(score);
        scoreCounter();
        
    });

    $("#pink-Gem").on("click", function () {
        score = score + pinkGem;
        $(".score").html(score);
        scoreCounter();
        
    });

    $("#red-Gem").on("click", function () {
        score = score + redGem;
        $(".score").html(score);
        scoreCounter();
        
    });
    
});