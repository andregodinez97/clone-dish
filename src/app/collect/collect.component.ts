import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {RestaurantCollect} from "./restaurant-collect/restaurant-collect.model";
import {mockRestaurantCollects} from "./restaurant-collect/restaurant-collect.mock";

@Component({
  selector: 'app-collect',
  templateUrl: './collect.component.html',
  styleUrls: ['./collect.component.scss']
})
export class CollectComponent implements OnInit {

  restaurantCollectOptions$: Observable<RestaurantCollect[]> | undefined;

  constructor() { }

  ngOnInit(): void {
    this.getRestaurantCollectOptions();
  }

  getRestaurantCollectOptions(): void {
    const restaurantSubject = new BehaviorSubject<RestaurantCollect[]>([]);
    this.restaurantCollectOptions$ = restaurantSubject.asObservable();

    restaurantSubject.next(mockRestaurantCollects)
  }
}
