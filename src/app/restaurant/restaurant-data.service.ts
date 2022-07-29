import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {RestaurantMain} from "./restaurant-main.model";
import {restaurantsDataMock} from "./restaurant-data.mock";

@Injectable({
  providedIn: 'root'
})
export class RestaurantDataService {

  private restaurantMainDataSubject = new BehaviorSubject<RestaurantMain | undefined>(undefined)
  public restaurantMainData$: Observable<RestaurantMain | undefined>;

  constructor() {
    this.restaurantMainData$ = this.restaurantMainDataSubject.asObservable();
  }

  getRestaurantData(restaurantId: number): void {
    // Mocking rest call to get restaurant data by id
    const restaurant = restaurantsDataMock.find(restaurantData => restaurantData.id === restaurantId);
    this.restaurantMainDataSubject.next(restaurant);
  }

}
