import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Aggregate, ResponseAggregate } from 'src/app/interfaces/aggregate';
import { Territory } from 'src/app/interfaces/territory';
import { TerritoryService } from 'src/app/services/territory/territory.service';

@Component({
  selector: 'app-aggregate-data',
  templateUrl: './aggregate-data.component.html',
  styleUrls: ['./aggregate-data.component.sass'],
})
export class AggregateDataComponent implements OnInit {
  @Input() aggregateResults: ResponseAggregate = {} as ResponseAggregate;

  territorieData: Territory = {} as Territory;
  territoryYears: string[] = [];
  name: string = '';
  selectedYear: string | null = null;
  selectedAggregate: Aggregate | null = null;

  constructor(
    private territoryService: TerritoryService
  ) {}

  ngOnInit(): void {
    this.loadData();
    this.filterYears();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['aggregateResults']) {
      let previousValue = changes['aggregateResults'].previousValue;
      let currentValue = changes['aggregateResults'].currentValue;

      if (previousValue !== currentValue) {
        this.loadData();
        this.filterYears();
        this.resetSelectedYear();
      }
    }
  }

  loadData(): void {
    if (this.aggregateResults.territory_id) {
      this.territoryService
        .findOne({ territoryId: this.aggregateResults.territory_id })
        .subscribe((response) => {
          this.territorieData = response;
          this.name =
            response.territory_name + ' (' + response.state_code + ') ';
        });
    } else {
      this.name = this.aggregateResults.state_code;
    }
  }

  filterYears(): void {
    this.territoryYears = [];
    this.aggregateResults?.aggregates.forEach((val) => {
      if (this.territoryYears.indexOf(val.year) === -1) {
        this.territoryYears.push(val.year);
      }
    });
  }

  resetSelectedYear(): void {
    this.selectedYear = null;
    let territoryYearElement = document.querySelector('.selected');
    if (territoryYearElement) {
      territoryYearElement.classList.remove('selected');
    }
  }

  selectYear(event: MouseEvent) {
    let targetElement = event.target as HTMLElement;
    let territoryYearElement = document.querySelector('.selected');

    if (territoryYearElement) {
      territoryYearElement.classList.remove('selected');
    }
    targetElement.classList.add('selected');
  }

  getSelectedYear(): string | null {
    let selectedYearElement = document.querySelector('.selected');
    if (!selectedYearElement) {
      return null;
    }
    return selectedYearElement.textContent?.trim() || null;
  }

  getSelectedYearData(): Aggregate | null {
    let selectedYear = this.getSelectedYear();
    if (!selectedYear) {
      return null;
    }

    let data = this.aggregateResults?.aggregates.find(
      (agg) => agg.year === selectedYear
    );

    if (!data) {
      return null;
    }

    return data;
  }

  downloadZip(){
    window.open(this.getSelectedYearData()?.file_path)
  }
}
