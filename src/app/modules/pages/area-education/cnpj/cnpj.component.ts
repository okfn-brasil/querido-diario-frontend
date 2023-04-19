import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CNPJInfo, CNPJPartner, parsePartners } from 'src/app/interfaces/cnpj';
import { CnpjService } from 'src/app/services/cnpj/cnpj.service';
import { ContentService } from 'src/app/services/content/content.service';

@Component({
  selector: 'edu-cnpj',
  templateUrl: './cnpj.component.html',
  styleUrls: ['./cnpj.component.sass']
})
export class CnpjComponent implements OnInit {
  content$: Observable<any> = of(null);
  cnpj: CNPJInfo = {} as CNPJInfo;
  partners: CNPJPartner[] = [] as CNPJPartner[];
  hasError = false;

  constructor(
    private contentService: ContentService,
    private cnpjService: CnpjService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.content$ = this.contentService.find('cnpj-page');
    this.route.params.subscribe(params => {
      this.cnpjService.getCnpj(params['id']).subscribe(response => {
        this.cnpj = response.cnpj_info;
        this.cnpjService.getCnpjPartners(params['id']).subscribe(response => {
          this.partners = parsePartners(response.partners) as CNPJPartner[];
        });
      }, () => {
        this.hasError = true;
      });
    }).unsubscribe();
  }
}
