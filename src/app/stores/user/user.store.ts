import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { UserModel } from 'src/app/interfaces/account';

export interface UserState {
  userData: UserModel;
}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'userData',
  resettable: true,
})
export class UserStore extends Store<UserState> {
  constructor() {
    super({
      userData: {}
    });
  }
}
