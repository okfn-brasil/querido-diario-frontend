import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GLOSSARY } from './data';

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.sass']
})
export class GlossaryComponent implements OnInit {
  glossary$: Observable<any> = of(GLOSSARY);

  constructor() { }

  chars = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ]

  ngOnInit(): void {
  }
}
