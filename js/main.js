let countEl = document.querySelector("#count");
let messageEl = document.querySelector(".message");
console.log(countEl);

let number = 10;

function reduce() {
    countEl.textContent = number;


    if (number < 0) {
        clearInterval(timer);
        messageEl.style.display = "none";
    }

    number--
}

let timer = setInterval(reduce, 1000);