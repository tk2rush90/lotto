import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-manual-number',
  templateUrl: './manual-number.component.html',
  styleUrls: ['./manual-number.component.scss']
})
export class ManualNumberComponent implements OnInit {
  // value
  @Input() value: number | undefined;
  // value selected state
  @Input() @HostBinding('class.lotto-selected') selected = false;

  constructor() { }

  ngOnInit(): void {
  }

}
