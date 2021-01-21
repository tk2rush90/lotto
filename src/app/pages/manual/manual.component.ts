import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.scss']
})
export class ManualComponent implements OnInit {
  // chosen numbers
  chosenNumbers: number[] = [];
  // the flag for showing result
  showResult = false;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * update chosen numbers and hide result
   * @param chosenNumbers changed chosen numbers
   */
  onChosenNumberChanged(chosenNumbers: number[]): void {
    this.chosenNumbers = chosenNumbers;
    this.showResult = false;
  }

  /**
   * show result
   */
  onShowResultClicked(): void {
    this.showResult = true;
  }
}
