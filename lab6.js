var button = document.getElementById("start-btn");
var randomOp = ["+", "-", "*"];
var score = 0;
var countdown;
button.addEventListener("click", getValues);
button.addEventListener("keyup", getValues);
var submit = document.getElementById('submit-answer')
submit.addEventListener("click", checkAnswer);
submit.addEventListener("keyup", checkAnswer);
function getValues(event) {
    clearInterval(countdown);
    event.preventDefault();
    if (event.keyCode === 13) {
        button.click();
    }
    min = parseFloat(document.getElementById('min').value);
    max = parseFloat(document.getElementById('max').value);
    operator = document.getElementById('op-choice').value;
    seconds = parseFloat(document.getElementById('numSeconds').value);

    if (min >= max) {
        document.getElementById('error').innerHTML = "Min must be less than max";
        return false;
    } else if (seconds < 1) {
        document.getElementById('error').innerHTML = "Number of seconds must be greater than 0";
        return false;
    } else {
        document.getElementById('error').innerHTML = "";
        display();
    }
}

function display() {
    document.getElementById('score-panel').classList.remove('hidden');
    document.getElementById('flashcard').classList.remove('hidden');
    document.getElementById('timer').classList.remove('hidden');
    document.getElementById('answer').focus();
    document.getElementById('op1').innerHTML = getRandomNumbers(min, max);
    document.getElementById('op2').innerHTML = getRandomNumbers(min, max);
    if (operator == "random") {
        document.getElementById('op').innerHTML = randomOp[Math.floor(Math.random() * 3)];
    } else {
        document.getElementById('op').innerHTML = operator;
    }
    document.getElementById('seconds').innerHTML = seconds;
    document.getElementById('answer').disabled = false;
    countdown = setInterval(function () {
        seconds--;
        document.getElementById('seconds').innerHTML = seconds;
        if (seconds <= 0) {
            document.getElementById('answer').disabled = true;
            document.getElementById('submit-answer').disabled = true;
            clearInterval(countdown);
        }
    }, 1000);
}

function getRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkAnswer(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        submit.click();
    }
    var guess = parseFloat(document.getElementById('answer').value);
    var op1 = parseFloat(document.getElementById('op1').textContent);
    var op2 = parseFloat(document.getElementById('op2').textContent);
    var op = document.getElementById('op').textContent;

    if (operator == "random") {
        if (op == "+") {
            if (guess == op1 + op2) {
                score++;
                document.getElementById('score').innerHTML = score;
                document.getElementById('answer').classList.remove('incorrect');
                document.getElementById('op1').innerHTML = getRandomNumbers(min, max);
                document.getElementById('op2').innerHTML = getRandomNumbers(min, max);
                document.getElementById('op').innerHTML = randomOp[Math.floor(Math.random() * 3)];
                document.getElementById('answer').value = "";
                document.getElementById('answer').focus();
            } else {
                document.getElementById('answer').classList.add('incorrect');
            }
        } else if (op == "-") {
            if (guess == op1 - op2) {
                score++;
                document.getElementById('score').innerHTML = score;
                document.getElementById('answer').classList.remove('incorrect');
                document.getElementById('op1').innerHTML = getRandomNumbers(min, max);
                document.getElementById('op2').innerHTML = getRandomNumbers(min, max);
                document.getElementById('op').innerHTML = randomOp[Math.floor(Math.random() * 3)];
                document.getElementById('answer').value = "";
                document.getElementById('answer').focus();
            } else {
                document.getElementById('answer').classList.add('incorrect');
            }
        } else if (op == "*") {
            if (guess == op1 * op2) {
                score++;
                document.getElementById('score').innerHTML = score;
                document.getElementById('answer').classList.remove('incorrect');
                document.getElementById('op1').innerHTML = getRandomNumbers(min, max);
                document.getElementById('op2').innerHTML = getRandomNumbers(min, max);
                document.getElementById('op').innerHTML = randomOp[Math.floor(Math.random() * 3)];
                document.getElementById('answer').value = "";
                document.getElementById('answer').focus();
            } else {
                document.getElementById('answer').classList.add('incorrect');
            }
        }
    }
    if (op == "+") {
        if (guess == op1 + op2) {
            score++;
            document.getElementById('score').innerHTML = score;
            document.getElementById('answer').classList.remove('incorrect');
            document.getElementById('op1').innerHTML = getRandomNumbers(min, max);
            document.getElementById('op2').innerHTML = getRandomNumbers(min, max);
            document.getElementById('answer').value = "";
            document.getElementById('answer').focus();
        } else {
            document.getElementById('answer').classList.add('incorrect');
        }
    } else if (op == "-") {
        if (guess == op1 - op2) {
            score++;
            document.getElementById('score').innerHTML = score;
            document.getElementById('answer').classList.remove('incorrect');
            document.getElementById('op1').innerHTML = getRandomNumbers(min, max);
            document.getElementById('op2').innerHTML = getRandomNumbers(min, max);
            document.getElementById('answer').value = "";
            document.getElementById('answer').focus();
        } else {
            document.getElementById('answer').classList.add('incorrect');
        }
    } else if (op == "*") {
        if (guess == op1 * op2) {
            score++;
            document.getElementById('score').innerHTML = score;
            document.getElementById('answer').classList.remove('incorrect');
            document.getElementById('op1').innerHTML = getRandomNumbers(min, max);
            document.getElementById('op2').innerHTML = getRandomNumbers(min, max);
            document.getElementById('answer').value = "";
            document.getElementById('answer').focus();
        } else {
            document.getElementById('answer').classList.add('incorrect');
        }
    }
}