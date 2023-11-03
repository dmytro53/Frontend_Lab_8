function getPlayerName() {
    let playerName = prompt("Введіть своє ім'я:");
    if (playerName === null || playerName.trim() === "") {
        alert("Введіть ім'я гравця!");
        return getPlayerName();
    } else {
        return playerName;
    }
}

let playerName = getPlayerName();

if (playerName !== null) {
    let userScore = 0;
    let computerScore = 0;
    let rounds = 0;
    function getRandomNumber() {
        let userNumber = Math.floor(Math.random() * 10) + 1;
        let computerNumber = Math.floor(Math.random() * 10) + 1;
        resultNumber.innerHTML = userNumber;
        resultNumber2.innerHTML = computerNumber;
        result1.style.display = "block";
        resultNumber.style.display = "block";
        result2.style.display = "block";
        resultNumber2.style.display = "block";
        gameResult(userNumber, computerNumber);
    }
    function startNewGame() {
        userScore = 0;
        computerScore = 0;
        rounds = 0;
        result1.innerHTML = userScore;
        result2.innerHTML = computerScore;
        resultNumber.innerHTML = "0";
        resultNumber2.innerHTML = "0";
    }
    let q = "Computer";
    let newBox = document.createElement("div");
    newBox.classList.add("newBox");
    document.body.appendChild(newBox);
    let firstDiv = document.createElement("div");
    firstDiv.classList.add("firstDiv");
    newBox.append(firstDiv);
    let nameDiv = document.createElement("div");
    nameDiv.classList.add("name");
    nameDiv.innerHTML = playerName;
    firstDiv.append(nameDiv);
    let result1 = document.createElement("div");
    result1.classList.add("result1");
    firstDiv.append(result1);
    let resultNumber = document.createElement("div");
    resultNumber.classList.add("resultNumber");
    firstDiv.append(resultNumber);
    let button = document.createElement("button");
    button.textContent = "Generate";
    button.classList.add("button");
    button.addEventListener("click", getRandomNumber);
    newBox.append(button);
    let secondDiv = document.createElement("div");
    secondDiv.classList.add("secondDiv");
    newBox.append(secondDiv);
    let nameComputer = document.createElement("div");
    nameComputer.classList.add("computer");
    nameComputer.innerHTML = q;
    secondDiv.append(nameComputer);
    let result2 = document.createElement("div");
    result2.classList.add("result2");
    secondDiv.append(result2);
    let resultNumber2 = document.createElement("div");
    resultNumber2.classList.add("resultNumber2");
    secondDiv.append(resultNumber2);
    function gameResult(userNumber, computerNumber) {
        if (rounds < 3) {
            if (userNumber > computerNumber) {
                userScore++;
            } else if (userNumber < computerNumber) {
                computerScore++;
            }
            rounds++;
            result1.innerHTML = userScore;
            result2.innerHTML = computerScore;
        } else {
            if (userScore > computerScore) {
                alert("Гравець переміг!");
            } else if (userScore < computerScore) {
                alert("Комп'ютер переміг!");
            } else {
                alert("Нічия!");
            }
            startNewGame();
        }
    }
}
