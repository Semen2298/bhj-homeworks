function getHole(index) {
    return document.getElementById(`hole${index}`);
}

let dead = 0;
let lost = 0;

function handleClick(event) {
    if (lost === 3) {
        newGame()
        alert("Вы проиграли! Попробуйте еще")
    } 
    if(dead === 15) {
        newGame()
        alert("Вы победили!")
    }

    const hole = event.target;
    if (hole.classList.contains('hole_has-mole')) {
        dead++;
    } else {
        lost++;
    }
    updateScoreboard();
}
function newGame() {
    location.reload();
}
function updateScoreboard() {
    document.getElementById("dead").textContent = dead;
    document.getElementById("lost").textContent = lost;
}

const holes = document.querySelectorAll('.hole');
holes.forEach(hole => {
    hole.addEventListener('click', handleClick);
});