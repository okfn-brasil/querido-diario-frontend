import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { GazetteFilters } from 'src/app/interfaces/education-gazettes';
import { MY_FORMATS } from 'src/app/modules/components/date-picker-range/date-picker-range.component';

export type PeriodRange = {
  from: string;
  to: string;
};

@Component({
  selector: 'app-period-picker',
  templateUrl: './period-picker.component.html',
  styleUrls: ['./period-picker.component.sass'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class PeriodPickerComponent implements OnInit {
  @Input() initialValue = {
    from: '',
    to: '',
  };
  @Output() rangeSelected: EventEmitter<PeriodRange> = new EventEmitter();
  range: UntypedFormGroup = new UntypedFormGroup({});

  constructor() {}

  ngOnInit(): void {
    this.range = new UntypedFormGroup({
      start: new UntypedFormControl(new Date(this.initialValue.from) || ''),
      end: new UntypedFormControl(new Date(this.initialValue.to) || ''),
    });
  }

  onRangeSelected() {
    this.rangeSelected.emit({
      from: this.range.controls.start.value.format('YYYY-MM-DD'),
      to: this.range.controls.end.value.format('YYYY-MM-DD'),
    });
  }
}
