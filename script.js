
let startBtn = document.getElementById("start-btn");
let screen1 = document.getElementById("screen1");
let screen2 = document.getElementById("screen2");
let screen3 = document.getElementById("screen3");
let screen4 = document.getElementById("screen4");
let cartoon = document.querySelectorAll(".cartoon");
let time_element = document.querySelectorAll("#box3 h3")[0];
let score = document.querySelectorAll("#box3 h3")[1];
let final_score = document.querySelectorAll("#box4 h3")[1];
let endGame_btn = document.getElementById("end-game");
let timer = 60;
let score_count = 0;


startBtn.onclick = () => {
    changeWin(screen1, screen2, "none", "flex");
}

for (let i = 0; i < cartoon.length; i++) {
    cartoon[i].onclick = () => {
        changeWin(screen2, screen3, "none", "block");
        gameStart(i);
        return false;
    }
}



function gameStart(indx) {
    // let r=Math.floor(Math.random()*10);   //to get random integer 0 to 9

    let area = document.getElementById("area");

    i = setInterval(() => {
        let clone = creteImageElement(indx);
        area.append(clone);

        let elements = document.querySelectorAll("#area img");
        for (let i = 0; i < elements.length; i++) {
            elements[i].onclick = () => {
                elements[i].parentNode.removeChild(elements[i]);
                score_count++;
                score.innerText = "Score: " + score_count;
            }

        }

        (timer == 0) ? endGame(i) : timerUpdate();

        endGame_btn.onclick = () => {
            endGame(i);
        }

    }, 1000);

    return false;
}

function timerUpdate() {
    timer--;
    time_element.innerText = "Time Remaning: " + timer;
}

function creteImageElement(indx) {
    let width = Math.floor(Math.random() * (screen.width - 300));
    let height = Math.floor(Math.random() * (screen.height - 300));

    let clone = cartoon[indx].cloneNode(true);

    clone.style.height = "80px";
    clone.style.width = "80px";
    clone.style.position = "absolute";
    clone.style.top = height + "px";
    clone.style.left = width + "px";

    return clone;
}

function endGame(i) {
    clearInterval(i);
    changeWin(screen3, screen4, "none", "flex");
    final_score.innerHTML = score_count;
}

function changeWin(a, b, attribute1, attribute2) {
    a.style.display = attribute1;
    b.style.display = attribute2;
}
