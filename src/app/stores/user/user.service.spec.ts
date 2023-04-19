import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UserQuery } from './user.query';
import { UserService } from './user.service';
import { UserStore } from './user.store';


describe('UserService', () => {
  let service: UserService;
  let userStoreStub = {

  };
  let userQuerySub = {

  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [
        { provide: UserQuery, useValue: userQuerySub },
        { provide: UserStore, useValue: userStoreStub },
      ],
    });
    service = TestBed.get(UserService);
  }));

});
