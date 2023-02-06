import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map, } from 'rxjs/operators';
import { PokemonFeed, PokemonDetails, Product, } from './PokemonFeedSchema';

@Injectable({
  providedIn: 'root'
})
export class PokemonFeedService {
  productList: Array<Product> = [];
  constructor(public http: HttpClient) { }
 /**
  * 
  * @param url : get the small images to show case in the feed.
  * @returns gice the pokemon sprites images promise stream.
  */
  getPokemonImage(url: string): Observable<string> {
    return this.http.get<PokemonDetails>(url).pipe(
       map((item: PokemonDetails) => item.sprites.front_default));
  }

  /**
   * 
   * @param url : call pokemon service to get all pokemon details
   * @returns  give the pokemon details promise stream
   */
  getPokemonFeed(url: string): Observable<PokemonFeed>{
    return this.http.get<PokemonFeed>(url)
    .pipe(
       catchError(this.handleError)
    );
  }

  /**
   * 
   * @param err Handle the error in api call
   * @returns throw error
   */
  handleError(err: HttpErrorResponse){
    return throwError(err);
  }

 /**
  * 
  * @param url To get the details of a pokemon
  * @returns promise stream
  */
  getDetails(url: string){
    return this.http.get(url);
  }

  /**
   * 
   * @returns products 
   */
  getData() {
    const data =  window.localStorage.getItem('productList') || '[]';
    const check = JSON.parse(data);
    if (check.length){
      this.productList = check;
    }
    return check;
  }
}
