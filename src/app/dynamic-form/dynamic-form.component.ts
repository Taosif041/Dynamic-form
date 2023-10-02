import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent {
  numbersArray: number[] = [];
  newNumber: number | null = null;
  removeIndex: number | null = null;
  showAddInput = false;
  showRemoveInput = false;
  sum = 0; // Initialize sum property

  addNumber() {
    this.showAddInput = true;
    this.showRemoveInput = false;
  }

  removeNumber() {
    this.showRemoveInput = true;
    this.showAddInput = false;
  }

  addToArray() {
    if (this.newNumber !== null) {
      this.numbersArray.push(this.newNumber);
      this.newNumber = null;
    }
  }

  removeFromArray() {
    if (this.removeIndex !== null && this.removeIndex >= 0 && this.removeIndex < this.numbersArray.length) {
      this.numbersArray.splice(this.removeIndex, 1);
      this.removeIndex = null;
    }
  }

  calculateSum() {
    this.sum = this.numbersArray.reduce((acc, val) => acc + val, 0);
  }
}
