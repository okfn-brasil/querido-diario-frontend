import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DownloadCSVService {
  constructor() {}

  clearSearchResults: EventEmitter<boolean> = new EventEmitter();

  getClearSearchResults(): EventEmitter<boolean> {
    return this.clearSearchResults;
  }

  clear(): void {
    this.clearSearchResults.emit(true);
  }

  cleared(): void {
    this.clearSearchResults.emit(false);
  }
}
