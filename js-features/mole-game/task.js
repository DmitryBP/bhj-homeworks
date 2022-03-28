let kill = document.getElementById("dead");
let miss = document.getElementById("lost");

getHole = (index) => document.getElementById(`hole${index}`);
for (let index = 1; index <= 9; index++) {
  getHole(index).onclick = () => {
    if (getHole(index).className.includes("hole_has-mole")) {
      kill.textContent++;
      if (kill.textContent == 10) {
        setTimeout(() => {
          alert("Победа!");
          kill.textContent = 0;
          miss.textContent = 0;
        }, 100);
      }
    } else {
      miss.textContent++;
      if (miss.textContent == 5) {
        setTimeout(() => {
          alert("Проиграл!");
          kill.textContent = 0;
          miss.textContent = 0;
        }, 100);
      }
    }
  };
}
// Игрок побеждает, если своевременно убивает 10 кротов. При 5 поражениях игра заканчивается.
