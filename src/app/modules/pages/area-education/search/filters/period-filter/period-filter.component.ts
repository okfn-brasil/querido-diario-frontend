import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { Moment } from 'moment';
import { formatMonth, GazetteFilters } from 'src/app/interfaces/education-gazettes';
import { MY_FORMATS } from 'src/app/modules/components/date-picker-range/date-picker-range.component';

@Component({
  selector: 'edu-period-filter',
  templateUrl: './period-filter.component.html',
  styleUrls: ['./period-filter.component.sass'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class PeriodFilterComponent implements OnInit {
  @Input() initialValue = {
    published_since: '',
    until: '',
    period: 1,
  };
  @ViewChild('periodField') periodField!: ElementRef;
  @Output() changeDates: EventEmitter<GazetteFilters> = new EventEmitter();
  activeTab = 0;
  period: number = 1;
  range: UntypedFormGroup = new UntypedFormGroup({});

  constructor() { }

  ngOnInit(): void {
    if(this.initialValue.period) {
      this.setPeriod(Number(this.initialValue.period))
    } else if(this.initialValue.published_since) {
      this.activeTab = 1;
      this.period = 0;
    } else {
      this.setPeriod(1);
    }

    this.range = new UntypedFormGroup({
      start: new UntypedFormControl(new Date(this.initialValue.published_since) || ''),
      end: new UntypedFormControl(new Date(this.initialValue.until) || ''),
    });
  }

  setTab(tab: number) {
    this.activeTab = tab;
    this.period = 0;
    this.range.reset();
  }

  setPeriod(period: number) {
    this.period = period;
    let sinceDate = new Date();
    if(period < 4) {
      sinceDate.setMonth(sinceDate.getMonth() - period);
    } else {
      sinceDate = new Date('01/01/1000');
    }
    this.changeDates.emit({published_since: `${sinceDate.getFullYear()}-${formatMonth(sinceDate.getMonth() + 1)}-${formatMonth(sinceDate.getDate())}`, period: period, until: ''} as GazetteFilters)
  }

  onRangeSelected() {
    this.changeDates.emit({
      published_since: this.range.controls.start.value.format('YYYY-MM-DD'), 
      until: this.range.controls.end.value.format('YYYY-MM-DD'), 
      period: 0
    } as GazetteFilters)
  }
}
