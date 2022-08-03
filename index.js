let countHome = document.getElementById("scoreHome")
let countGuest = document.getElementById("scoreGuest")
let countPeriode = document.getElementById("scorePeriode")
let countG = 0
let countH = 0
let periode = 1

function addOneHome() {
    countH += 1
    countHome.textContent = countH
}

function addTwoHome() {
    countH += 2
    countHome.textContent = countH
}

function addThreeHome() {
    countH += 3
    countHome.textContent = countH
}

function addOneGuest() {
    countG += 1
    countGuest.textContent = countG
}

function addTwoGuest() {
    countG += 2
    countGuest.textContent = countG
}

function addThreeGuest() {
    countG += 3
    countGuest.textContent = countG
}
function newGame() {
    countH = 0
    countG = 0
    periode = 1
    countHome.textContent = 0
    countGuest.textContent = 0
    countPeriode.textContent = 1
}

function addOnePeriode() {
    periode += 1
    countPeriode.textContent = periode
}
