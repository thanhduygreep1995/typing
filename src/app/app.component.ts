import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = lorem.sentence();
  enteredText = '';
  // solved = false;
  onInput(value: string) {
    this.enteredText = value;
    // if (value === this.randomText) {
    //   this.solved = true;
    // }
  }
}
