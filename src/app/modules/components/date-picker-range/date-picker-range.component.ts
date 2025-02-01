import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
import { ActivatedRoute } from '@angular/router';
import moment, { Moment } from 'moment';
import { Subscription } from 'rxjs';

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-date-picker-range',
  templateUrl: './date-picker-range.component.html',
  styleUrls: ['./date-picker-range.component.sass'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class DatePickerRangeComponent implements OnInit {
  @Output() onRangeSelected = new EventEmitter<{
    start: Moment;
    end: Moment;
  }>();
  range: UntypedFormGroup = new UntypedFormGroup({});
  maxDate: Date = new Date();
  subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.route.queryParams.subscribe((params) => {
        this.range = new UntypedFormGroup({
          start: new UntypedFormControl(params.since),
          end: new UntypedFormControl(params.until),
        });
      })
    );
  }

  selectedChange(event: any) {
    this.onRangeSelected.emit({
      start: this.getStartDate(),
      end: this.getEndDate(),
    });
  }

  getStartDate(): Moment {
    return moment(this.range.controls.start.value);
  }

  getEndDate(): Moment {
    return moment(this.range.controls.end.value);
  }

  parse(date: string): Moment | null {
    let output: Moment | null = null;
    if (date) {
      output = moment(date); //.format('DD/MM/YYYY');
    }
    return output;
  }

  ngOnDestroy() {
    for (let subscriptions of this.subscriptions) {
      subscriptions.unsubscribe();
    }
  }
}
