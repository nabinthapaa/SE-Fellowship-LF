import { IPoint } from "./Points";

export interface ICircle {
  center: IPoint;
  radius: number;
  area(): number;
  circumference(): number;
}


export default class Circle implements ICircle {
  constructor(public center: IPoint, public radius: number) {}

  area(): number {
    return Math.PI * this.radius ** 2;
  }

  circumference(): number {
    return 2 * Math.PI * this.radius;
  }
}