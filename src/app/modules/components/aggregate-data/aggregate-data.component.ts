import { Component, Input, OnInit } from '@angular/core';
import { Aggregate, ResponseAggregate } from 'src/app/interfaces/data-search';
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
  name:string = ""

  constructor(private territoryService: TerritoryService) {}

  ngOnInit(): void {
    this.loadData();
    this.filterYears();
  }

  loadData():void{

    if(this.aggregateResults.territory_id){
      this.territoryService
      .findOne({ territoryId: this.aggregateResults.territory_id })
      .subscribe((response) => {
        this.territorieData = response
        this.name = response.territory_name +" - "+response.state_code
      });
    }else{
      this.name = this.aggregateResults.state_code
    }

  }

  filterYears():void{
    this.aggregateResults?.aggregates.forEach((val)=>{
      if(this.territoryYears.indexOf(val.year) === -1){
        this.territoryYears.push(val.year)
      }
    })
    console.log(this.territoryYears)
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

  getSelectedYear() {
    let selectedYear = document.querySelector('.selected');
    if (!selectedYear) {
      return null;
    }
    return selectedYear?.textContent;
  }

  getSelectedYearData(): Aggregate | null {
    let selectedYear = this.getSelectedYear();
    if (!selectedYear) {
      return null;
    }
    
    let data = this.aggregateResults?.aggregates
    .find(agg => agg.year === selectedYear);
  
    if(!data){
      return null
    }

    return data;
  }
}
