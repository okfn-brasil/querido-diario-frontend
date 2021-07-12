import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { COMPLAINT } from './data';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.sass']
})
export class ComplaintComponent implements OnInit {
  complaint$: Observable<any> = of(COMPLAINT);

  constructor() { }

  ngOnInit(): void {
  }

}
