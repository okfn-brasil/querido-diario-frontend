import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { GOAL_LIST } from 'src/app/data/home';
import {
  EVOLUTION_DATA, GOALS, HELP, INFOS, REALIZATION,
} from './data';

interface Sizeable {
  width: number;
  height: number;
}

const square = (value: number): Sizeable => {
  return { width: value, height: value };
};

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  loadContent() {
    //return [this.buildEvolution(EVOLUTION_DATA)];
  }

  loadEvolution() {
    const data = EVOLUTION_DATA;
    return of({
      title: data.title,
      items: data.items.map((item) => {
        return { ...item, icon: { file: item.icon, ...square(76) } };
      }),
    });
  }

  loadHelp() {
    return of(HELP)
  }

  loadGoals() {
    return of(GOAL_LIST)
  }

  loadInfos() {
    return of(INFOS);
  }

  loadRealization() {
    return of(REALIZATION)
  }
}
