var randomNumber1 = Math.floor(6 * Math.random() + 1); // Random No 1-6
var randomNumber2 = Math.floor(6 * Math.random() + 1); // Random No 1-6

/////////////////////
// can replace this function by 
function toseDie1(no) { 
    if (no === 1) { 
        document.querySelector("img.img1").setAttribute("src", "./images/dice1.png");
    }else if (no === 2) { 
        document.querySelector("img.img1").setAttribute("src", "./images/dice2.png");
    }else if (no === 3) { 
        document.querySelector("img.img1").setAttribute("src", "./images/dice3.png");
    }else if (no === 4) { 
        document.querySelector("img.img1").setAttribute("src", "./images/dice4.png");
    }else if (no === 5) { 
        document.querySelector("img.img1").setAttribute("src", "./images/dice5.png");
    }else{ 
        document.querySelector("img.img1").setAttribute("src", "./images/dice6.png");
    }
}

onload = toseDie1(randomNumber1);
/// by this 
// var randomDiceImage1 = "./images/dice" + randomNumber1 + ".png"; // ./images/dice1.png - ./images/dice6.png
// document.querySelector("img.img1").setAttribute("src", randomDiceImage1);
//////////////////


function toseDie2( noo ){ 
    if (noo === 1) { 
        document.querySelector("img.img2").setAttribute("src", "./images/dice1.png");
    }else if (noo === 2) { 
        document.querySelector("img.img2").setAttribute("src", "./images/dice2.png");
    }else if (noo === 3) { 
        document.querySelector("img.img2").setAttribute("src", "./images/dice3.png");
    }else if (noo === 4) { 
        document.querySelector("img.img2").setAttribute("src", "./images/dice4.png");
    }else if (noo === 5) { 
        document.querySelector("img.img2").setAttribute("src", "./images/dice5.png");
    }else{ 
        document.querySelector("img.img2").setAttribute("src", "./images/dice6.png");
    }
}

onload = toseDie2(randomNumber2);



function changeHeaderH1() { 
    if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML= "Draw!";
    } else if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
    } else { 
        document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
    }
}
onload = changeHeaderH1();

// lock for solution