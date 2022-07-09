import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RestaurantDataService {

  private restaurantDataSubject = new BehaviorSubject<RestaurantMain>()

  constructor() { }

  getRestaurantData(restaurantId: number): void {

  }

}
