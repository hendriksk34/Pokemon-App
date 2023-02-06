import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  /*
    SharedData Service is used for obeservable.
  */
  searchBarChange: Subject<string> = new Subject<string>();
  productListChange: Subject<boolean> = new Subject<boolean>();

  sendValue(val: string){
      this.searchBarChange.next(val);
  }

  getValue(): Observable<string> {
      return this.searchBarChange.asObservable();
  }

  sendProductCacheValue(val: boolean){
    this.productListChange.next(val);
}

  getProduct(): Observable<boolean> {
      return this.productListChange.asObservable();
  }

}
