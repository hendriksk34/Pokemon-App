import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  /*
     isAdmin property is used here to mock admin behavior
     in the application.
  */
  isAdmin =  true;
  constructor() { }

  getProfile() {
    return of(this.isAdmin);
  }
}
