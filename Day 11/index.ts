console.log("Hello World!");

function add(a: number, b: number) {
  return a + b;
}

add("1", "2");

class Ball {
  constructor(public color: string) {
    this.color = color;
  }

  getColor(): string {
    return this.color;
  }

  setColor(color: string): void {
    this.color = color;
  }
}

const ball = new Ball("red");

ball.sd;
