import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'edu-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass']
})
export class EduPaginationComponent implements OnInit {
  @Input() listSize: number = 0;
  @Input() itemsPerPage: number = 4;
  @Input() currentPage: number = 0;
  @Input() inverted = false;
  @Output() changePage : EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.pages();
  }

  nextPage() {
    if(this.currentPage < ((this.listSize / this.itemsPerPage) - 1)) {
      this.changePage.emit(this.currentPage + 1);
    }
  };

  previousPage() {
    if(this.currentPage) {
      this.changePage.emit(this.currentPage - 1);
    }
  };

  onClickPage(page: number) {
    if(page !== null) {
      this.currentPage = page;
      this.changePage.emit(page);
    }
  }

  lastPage() {
    this.onClickPage(Math.ceil(this.listSize/this.itemsPerPage) - 1);
  }

  firstPage(){
    this.onClickPage(0);
  }

  pages() {
    const pageNumbers = [];
    const pagesSize = Math.ceil(this.listSize/this.itemsPerPage);
    if(pagesSize < 5) {
      for (let i = 0;  i < pagesSize && pageNumbers.length < 5; i++) {
        pageNumbers.push(i);
      }
    } else if( pagesSize >= 5 && this.currentPage < pagesSize - 3) {
      [ 
        this.currentPage > 1 ? 0 : undefined,
        this.currentPage > 1 ? null : undefined,
        this.currentPage > 0 ? this.currentPage - 1 : undefined,
        this.currentPage,
        this.currentPage + 1,
        null,
        pagesSize - 1
      ].forEach((i) => pageNumbers.push(i));
    } else if (this.currentPage >= pagesSize - 3){
      [ 
        0,
        null,
        pagesSize - 4,
        pagesSize - 3,
        pagesSize - 2,
        pagesSize - 1,
      ].forEach((i) => pageNumbers.push(i));
    }
    return pageNumbers;
  };
}
