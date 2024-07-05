import { Component, Input, OnInit } from '@angular/core';
import { Aggregate, ResponseDataSearch } from 'src/app/interfaces/data-search';
import { TerritoryService } from 'src/app/services/territory/territory.service';

@Component({
  selector: 'app-aggregate-data',
  templateUrl: './aggregate-data.component.html',
  styleUrls: ['./aggregate-data.component.sass'],
})
export class AggregateDataComponent implements OnInit {
  @Input()
  dataSearchResponse: ResponseDataSearch | null = null;

  territoriesData: any = {};
  territoryYears: any = {};
  territories: string[] = [];

  constructor(private territoryService: TerritoryService) {}

  ngOnInit(): void {
    this.loadTerritories();
  }

  loadTerritories() {
    this.dataSearchResponse?.aggregates.forEach((aggregate) => {
      let territory: any = {};
      territory[aggregate.year] = aggregate;

      this.territoryService
        .findOne({ territoryId: aggregate.territory_id })
        .subscribe((response) => {
          this.territoriesData[aggregate.territory_id] = {
            ...this.territoriesData[aggregate.territory_id],
            ...territory,
            territory_name: response.territory_name,
          };
        });
      if (!this.territoryYears[aggregate.territory_id]) {
        this.territoryYears[aggregate.territory_id] = [];
      }
      this.territoryYears[aggregate.territory_id]?.push(aggregate.year);

      if (!this.territories.includes(aggregate.territory_id)) {
        this.territories.push(aggregate.territory_id);
      }
    });
  }

  getCityName(territoryId: string) {
    return this.territoriesData[territoryId]
      ? ' de ' + this.territoriesData[territoryId]?.territory_name
      : ' Agregados';
  }

  selectYear(event: MouseEvent) {
    let targetElement = event.target as HTMLElement;
    let territoryYearElement = document.getElementById(
      targetElement.parentElement?.parentElement?.id!
    );
    // remove selected elements from territory year element
    territoryYearElement?.querySelectorAll('.selected').forEach((el) => {
      el.classList.remove('selected');
    });

    targetElement.classList.add('selected');
  }

  getSelectedYear(territoryId: string) {
    let territoryYearElement = document.getElementById(territoryId);
    let selectedYear = territoryYearElement?.querySelector('.selected');
    if (!selectedYear) {
      return null;
    }
    return selectedYear?.textContent;
  }

  getSelectedYearData(territoryId: string): Aggregate | null {
    if (!this.territoriesData[territoryId]) {
      return null;
    }

    let selectedYear = this.getSelectedYear(territoryId);
    if (!selectedYear) {
      return null;
    }
    return this.territoriesData[territoryId][selectedYear];
  }
}
