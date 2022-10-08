import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  // The values that are defined here are the default values that can
  // be overridden by env.js

  public envFileLoaded = false

  // Max size of Querido Diário API results (THEMED_EXCERPT_FRAGMENT_SIZE)
  public qdApiSearchResultMaxSize = 3

  constructor() { }
}
