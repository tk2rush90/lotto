import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {getNumbers} from '@lotto/utils/lotto.util';
import {ToastService} from '@lotto/components/common/toast/service/toast.service';

@Component({
  selector: 'app-manual-picker',
  templateUrl: './manual-picker.component.html',
  styleUrls: ['./manual-picker.component.scss']
})
export class ManualPickerComponent implements OnInit {
  /**
   * set chosen numbers
   * @param chosenNumbers chosen numbers
   */
  @Input() set chosenNumbers(chosenNumbers: number[]) {
    this._chosenNumbers = chosenNumbers || [];
    this._createChosenNumberMap();
  }
  // emit when chosen numbers changed
  @Output() chosenNumbersChange: EventEmitter<number[]> = new EventEmitter<number[]>();
  // emit after show result button clicked
  @Output() showResult: EventEmitter<void> = new EventEmitter<void>();
  // pick-able numbers
  numbers: number[] = getNumbers();
  // chosen numbers
  private _chosenNumbers: number[] = [];
  // map of chosen numbers
  private _chosenNumberMap: {[k: number]: boolean} = {};

  constructor(
    private toastService: ToastService,
  ) { }

  ngOnInit(): void {
  }

  /**
   * create map of chosen numbers
   */
  private _createChosenNumberMap(): void {
    this._chosenNumberMap = {};
    this._chosenNumbers.forEach(value => this._chosenNumberMap[value] = true);
  }

  /**
   * handle the number click event
   * @param value clicked number
   */
  onNumberClick(value: number): void {
    if (this.hasSelected(value)) {
      this._emitChangesWithRemoving(value);
    } else {
      this._emitChangesWithAdding(value);
    }
  }

  /**
   * return `true` when value selected
   * @param value value to check
   */
  hasSelected(value: number): boolean {
    return this._chosenNumberMap[value];
  }

  /**
   * emit `chosenNumbersChange` emitter with removing value
   * @param value value to remove
   */
  private _emitChangesWithRemoving(value: number): void {
    this.chosenNumbersChange.emit(this._chosenNumbers.filter(item => item !== value));
  }

  /**
   * emit `chosenNumbersChange` emitter with adding value
   * @param value value to add
   */
  private _emitChangesWithAdding(value: number): void {
    if (this.selecting) {
      this.chosenNumbersChange.emit([...this._chosenNumbers, value]);
    } else {
      this.toastService.open({ message: '최대 6개 까지 선택 가능합니다', });
    }
  }

  /**
   * emit `showResult`
   */
  onResultButtonClick(): void {
    if (this.selecting) {
      this.toastService.open({ message: '6개의 번호를 선택해주세요', });
    } else {
      this.showResult.emit();
    }
  }

  /**
   * return `true` when user still selecting the numbers
   */
  get selecting(): boolean {
    return this._chosenNumbers.length < 6;
  }
}
