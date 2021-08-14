import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num: number;
  method: string = 'isPrime';
  result: boolean;

  validateNum() {
    console.log(this.num);
    if (this.num < 0) {
      this.num = 1;
    } else if (!Number.isInteger(this.num)) {
      this.num = Math.round(this.num);
    }
  }

  isPrime(num) {
    if(num <= 1){
      return false;
    }
    for(let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) 
      return false;
    }
    return true;
  }

  isFibonacci(num) {
    // https://en.wikipedia.org/wiki/Fibonacci_number#Identification
    return this.isPerfectSquare(5 * num * num + 4) || this.isPerfectSquare(5 * num * num - 4);
  }

  isPerfectSquare(num) {
    return Math.sqrt(num) % 1 === 0;
  }

  handleCalculate() {
    this.validateNum();
    if (this.method === 'isPrime') {
      this.result = this.isPrime(this.num);
    } else if (this.method === 'isFibonacci') {
      this.result = this.isFibonacci(this.num);
    }
  }
}
