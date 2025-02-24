import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { Option } from 'src/app/interfaces/option';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass'],
})
export class SelectComponent implements OnInit {
  @Input()
  label: string | undefined = undefined;

  @Input()
  title: string | undefined = undefined;

  @Input()
  style: 'primary' | 'secondary' = 'primary';

  @Output() onSelected = new EventEmitter<string>();

  @Input()
  selected: any;

  selectControl = new UntypedFormControl({});

  constructor() {}

  @Input()
  options: Option[] = [];

  selectedOption: { value: string; viewValue: string } = {
    value: 'relevance',
    viewValue: 'Relevância',
  };

  ngOnInit(): void {
    if (this.selected) {
      this.selectControl = new UntypedFormControl(this.selected);
    }
  }

  selectionChange(value: string) {
    this.onSelected.emit(value);
  }
}
