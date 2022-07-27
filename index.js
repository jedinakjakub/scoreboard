let countHome = document.getElementById("scoreHome")
let countGuest = document.getElementById("scoreGuest")
let countPeriode = document.getElementById("scorePeriode")
let count = 0
let periode = 1

function addOneHome() {
    count += 1
    countHome.textContent = count
}

function addTwoHome() {
    count += 2
    countHome.textContent = count
}

function addThreeHome() {
    count += 3
    countHome.textContent = count
}

function addOneGuest() {
    count += 1
    countGuest.textContent = count
}

function addTwoGuest() {
    count += 2
    countGuest.textContent = count
}

function addThreeGuest() {
    count += 3
    countGuest.textContent = count
}
function newGame() {
    count = 0
    periode = 1
    countHome.textContent = 0
    countGuest.textContent = 0
    countPeriode.textContent = 1
}

function addOnePeriode() {
    periode += 1
    countPeriode.textContent = periode
}
