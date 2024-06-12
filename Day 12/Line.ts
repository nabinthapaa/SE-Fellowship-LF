import { IPoint } from "./Points";

interface ILine {
  start: IPoint;
  end: IPoint;
  length(): number;

  slope(line: ILine): number;
}

export default class Line implements ILine {
  constructor(public start: IPoint, public end: IPoint) {}

  length(): number {
    return this.start.distanceTo(this.end);
  }

  slope(): number {
    return (this.end.Y - this.start.Y) / (this.end.X - this.start.X);
  }
}
