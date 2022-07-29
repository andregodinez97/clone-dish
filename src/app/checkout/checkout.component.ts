import {Component, OnInit} from '@angular/core';
import {RestaurantDataService} from "../restaurant/restaurant-data.service";
import {Observable} from "rxjs";
import {RestaurantMain} from "../restaurant/restaurant-main.model";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {

  restaurantMainData$: Observable<RestaurantMain | undefined> | undefined;

  constructor(private restaurantDataService: RestaurantDataService,) {
  }

  ngOnInit() {
    this.restaurantMainData$ = this.restaurantDataService.restaurantMainData$;

    //  TODO REMOVE
    this.restaurantDataService.getRestaurantData(Number(9163));

  }

}
