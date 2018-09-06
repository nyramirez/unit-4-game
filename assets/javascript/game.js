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


    // Creating functions to add random values of gems.
    $("#blue-Gem").on("click", function () {
        score = score + blueGem;
        $(".score").html(score);
        console.log("----------");
        console.log(randomNumber);
        console.log(score);
        console.log("----------");
        console.log(wins);
        console.log(loss);

        if (randomNumber === score) {
            $(".feedBack").html("   You Win !!!!   ");
            wins += 1;
            $(".winsCount").html(wins);
        }
    
        else if (randomNumber < score) {
            $(".feedBack").html("    ;(   ");
            loss += 1;
            $(".lossesCount").html(loss);
        };
    
        console.log("************");
        console.log(randomNumber);
        console.log(score);
        console.log("----------");
        console.log(wins);
        console.log(loss);
    });

    $("#green-Gem").on("click", function () {
        score = score + greenGem;
        $(".score").html(score);
        console.log("----------");
        console.log(randomNumber);
        console.log(score);
        console.log("----------");
        console.log(wins);
        console.log(loss);

        if (randomNumber === score) {
            $(".feedBack").html("   You Win !!!!   ");
            wins += 1;
            $(".winsCount").html(wins);
        }
    
        else if (randomNumber < score) {
            $(".feedBack").html("    ;(   ");
            loss += 1;
            $(".lossesCount").html(loss);
        };
    
        console.log("************");
        console.log(randomNumber);
        console.log(score);
        console.log("----------");
        console.log(wins);
        console.log(loss);
    });

    $("#pink-Gem").on("click", function () {
        score = score + pinkGem;
        $(".score").html(score);
        console.log("----------");
        console.log(randomNumber);
        console.log(score);
        console.log("----------");
        console.log(wins);
        console.log(loss);

        if (randomNumber === score) {
            $(".feedBack").html("   You Win !!!!   ");
            wins += 1;
            $(".winsCount").html(wins);
        }
    
        else if (randomNumber < score) {
            $(".feedBack").html("    ;(   ");
            loss += 1;
            $(".lossesCount").html(loss);
        };
    
        console.log("************");
        console.log(randomNumber);
        console.log(score);
        console.log("----------");
        console.log(wins);
        console.log(loss);
    });

    $("#red-Gem").on("click", function () {
        score = score + redGem;
        $(".score").html(score);
        console.log("----------");
        console.log(randomNumber);
        console.log(score);
        console.log("----------");
        console.log(wins);
        console.log(loss);

        if (randomNumber === score) {
            $(".feedBack").html("   You Win !!!!   ");
            wins += 1;
            $(".winsCount").html(wins);
        }
    
        else if (randomNumber < score) {
            $(".feedBack").html("    ;(   ");
            loss += 1;
            $(".lossesCount").html(loss);
        };
    
        console.log("************");
        console.log(randomNumber);
        console.log(score);
        console.log("----------");
        console.log(wins);
        console.log(loss);
    });

    // if (randomNumber === score) {
    //     $(".feedBack").html("   You Win !!!!   ");
    //     wins += 1;
    //     $(".winsCount").html(wins);
    // }

    // else if (randomNumber < score) {
    //     $(".feedBack").html("    ;(   ");
    //     loss += 1;
    //     $(".lossesCount").html(loss);
    // };

    // console.log("************");
    // console.log(randomNumber);
    // console.log(score);
    // console.log("----------");
    // console.log(wins);
    // console.log(loss);











});