export interface IPoint {
  x: number;
  y: number;
  get X(): number;
  get Y(): number;
  set X(x: number);
  set Y(x: number);

  distanceTo(point: IPoint): number;
}

export default class Point implements IPoint {
  constructor(private x: number, private y: number) {}

  get X(): number {
    return this.x;
  }

  get Y(): number {
    return this.y;
  }

  set X(x: number) {
    this.x = x;
  }

  set Y(y: number) {
    this.y = y;
  }

  //@ts-ignore
  distanceTo(point: Point): number {
    return Math.sqrt(this.x - point.X ** 2 + this.y - point.Y ** 2);
  }
}

//
