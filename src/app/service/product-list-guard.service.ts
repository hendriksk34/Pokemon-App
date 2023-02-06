import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { PokemonFeedService } from './pokemon-feed.service';

@Injectable({
  providedIn: 'root'
})
export class ProductListGuardService implements CanActivate{
  /**
   * It is a guard to check if data is present or not.
   * @returns If no product then move to the home.
   */
  canActivate() {
     const productList = this.pokemonFeed.getData();
     if (productList.length === 0){
       this.route.navigate(['home']);
       return false;
     }
     return true;
   }

  constructor(private pokemonFeed: PokemonFeedService, private route: Router) { }
}
