import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/interfaces/account';

import { UserStore } from './user.store';

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(
    private store: UserStore,
  ) { }

  setUserInfo(userData: UserModel) {
    const newUserData = { ...this.store.getValue().userData, ...userData };
    this.store.update({ userData: newUserData });
  }

  resetUser(){
    this.store.reset();
  }
}
