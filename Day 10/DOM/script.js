console.log("Script Loaded")
/**@type {HTMLDivElement} */
const box = document.querySelector(".box");
/**@type {HTMLDivElement} */
const ball = document.querySelector(".ball");

let dy = 1;
let y = 0;
const speed = 5;

ball.style.left = `calc(50% - ${ball.clientHeight})`

setInterval(() => {
    ball.style.bottom = `${y}px`
    y = y + dy * speed;

    if (y >= box.clientHeight - ball.clientHeight || y < 0) {
        dy *= -1
    }
}, 1000 / 60)


function Person(name, occupation) {
    this.name = name;
    this.occupation = occupation;

    // Public
    this.getName = () => this.name;

    // Private
    function getOccupation() {
        return this.occupation;
    }
}

const student = new Person("John", "Dcotro")
const myName = student.getName.bind({ name: "Random" })

/**
 * * ().call({}, 1,2)
 * * ().apply({}, [1,2])
 */