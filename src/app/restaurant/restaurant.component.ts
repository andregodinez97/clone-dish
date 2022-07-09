import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {filter, map, Observable} from "rxjs";
import {RestaurantDataService} from "./restaurant-data.service";
import {MenuItem, RestaurantMain} from "./restaurant-main.model";
import { faBagShopping, faAdd } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
  faBagShopping = faBagShopping;
  faAdd = faAdd;

  public restaurantMain$: Observable<RestaurantMain | undefined> | undefined;

  constructor(private route: ActivatedRoute, private restaurantDataService: RestaurantDataService) {
  }

  ngOnInit(): void {
    this.route.params.pipe(map(p => p['id'])).subscribe(restaurantId => {
      this.restaurantDataService.getRestaurantData(Number(restaurantId));
    });

    this.restaurantMain$ = this.restaurantDataService.restaurantData$;
  }

  getMenuItemsByCategory(category: string): Observable<MenuItem[] | undefined> {
    return this.restaurantDataService.restaurantData$.pipe(
      filter(restaurant => !!restaurant?.menuItemList),
      map(restaurant => restaurant?.menuItemList.filter(menuItem => menuItem.itemCategory === category)),
    );
  }

}
