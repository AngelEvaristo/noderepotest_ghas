import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  clicked = false;
  clickCount = 0;

  showMessage(): void {
    this.clicked = true;
    this.clickCount++;
  }
}
