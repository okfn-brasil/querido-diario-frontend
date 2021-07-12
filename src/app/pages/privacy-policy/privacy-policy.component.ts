import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRIVACY } from './data';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.sass']
})
export class PrivacyPolicyComponent implements OnInit {
  privacy$: Observable<any> = of(PRIVACY);

  constructor() { }

  ngOnInit(): void {
    console.log(this.privacy$.toPromise().then((data) => console.log(data)))
  }

}
