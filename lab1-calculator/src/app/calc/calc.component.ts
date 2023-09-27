import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  firstValue =0;
  secondValue =0;
  resValue = 0;

  add(first: string, second: string) : void {
    this.firstValue = Number(first);
    this.secondValue = Number(second);

    this.resValue = this.firstValue + this.secondValue;
  } 
  sub (first: string, second: string) : void {
    this.firstValue = Number(first);
    this.secondValue = Number(second);

    this.resValue = this.firstValue - this.secondValue;
  }
  mul (first: string, second: string) : void {
    this.firstValue = Number(first);
    this.secondValue = Number(second);

    this.resValue = this.firstValue * this.secondValue;
  }
  div (first: string, second: string) : void {
    this.firstValue = Number(first);
    this.secondValue = Number(second);

    this.resValue = this.firstValue / this.secondValue;
  }
}
