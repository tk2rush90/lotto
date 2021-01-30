import {ChangeDetectorRef, Directive, ElementRef, HostBinding, HostListener, Input, Optional, Self} from '@angular/core';
import {FormControlBaseDirective} from '@lotto/components/common/form-control-base/form-control-base.directive';
import {NgControl} from '@angular/forms';
import {parseNumericString} from '@lotto/utils/parse.util';

@Directive({
  selector: 'input[appInput], textarea[appInput]'
})
export class InputDirective extends FormControlBaseDirective<string> {
  // set type attribute
  @Input() @HostBinding('attr.type') type = 'text';
  // set spellcheck attribute
  @Input() @HostBinding('attr.spellcheck') spellcheck = false;
  // set autocomplete attribute
  @Input() @HostBinding('attr.autocomplete') autocomplete = 'off';
  // set placeholder attribute
  @Input() @HostBinding('attr.placeholder') placeholder = '';
  // max/min values for 'number' type
  @Input() max: number | undefined;
  @Input() min: number | undefined;
  // bind base class to input
  @HostBinding('class.scripter-input-field') baseClass = true;

  constructor(
    @Self() @Optional() public ngControl: NgControl,
    protected changeDetectorRef: ChangeDetectorRef,
    private elementRef: ElementRef<HTMLInputElement>,
  ) {
    super(ngControl, changeDetectorRef);
  }

  /**
   * write value to input
   * @param value new value
   */
  writeValue(value: string | undefined): void {
    const el = this.elementRef?.nativeElement;

    if (el) {
      el.value = value || '';
    }
  }

  @HostListener('input')
  onHostInput(): void {
    const el = this.elementRef?.nativeElement;

    if (el) {
      let value = el.value;

      switch (this.type) {
        case 'number': {
          value = parseNumericString(value);
          value = this._restrictMaxMin(value);
        }
      }

      this.setValue(value);
    }
  }

  /**
   * restrict max/min number
   * @param value value
   */
  private _restrictMaxMin(value: string): string {
    let num = parseFloat(value);

    if (this.min !== undefined) {
      num = Math.max(this.min, num);
    }

    if (this.max !== undefined) {
      num = Math.min(this.max, num);
    }

    return num + '';
  }

  @HostListener('blur')
  onHostBlur(): void {
    this.markAsTouched();
  }
}
