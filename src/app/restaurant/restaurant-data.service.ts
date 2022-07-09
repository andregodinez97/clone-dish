import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {RestaurantMain} from "./restaurant-main.model";
import {restaurantsDataMock} from "./restaurant-data.mock";

@Injectable({
  providedIn: 'root'
})
export class RestaurantDataService {

  private restaurantDataSubject = new BehaviorSubject<RestaurantMain | undefined>(undefined)
  public restaurantData$: Observable<RestaurantMain | undefined>;

  constructor() {
    this.restaurantData$ = this.restaurantDataSubject.asObservable();
  }

  getRestaurantData(restaurantId: number): void {
    // Mocking rest call to get restaurant data by id
    const restaurant = restaurantsDataMock.find(restaurantData => restaurantData.id === restaurantId);
    this.restaurantDataSubject.next(restaurant);
  }

}
