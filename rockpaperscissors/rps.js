let answer = Math.floor(Math.random() * 3); //zero is rock, one is paper, two is scissors
let result = document.getElementById('result');
function button(num){
    console.log('clicked');
    if(num == answer){
        result.innerHTML = "It's a tie!";
        console.log('tied');
    } else if((num == 0 && answer == 2) || (num == 1 && answer == 0) || (num == 2 && answer == 1)){
        result.innerHTML = "You win!";
        console.log('win');
    } else {
        result.innerHTML = "You lose!";
        console.log('lose');
    }
    if(answer == 0){
        result.innerHTML = result.innerHTML + ' I chose rock!'
    } else if(answer == 1) {
        result.innerHTML = result.innerHTML + ' I chose paper!'
    } else {
        result.innerHTML = result.innerHTML + ' I chose scissors!'
    }
    answer = Math.floor(Math.random() * 3); //reset the game
}