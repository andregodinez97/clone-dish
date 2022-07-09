import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map, Observable} from "rxjs";
import {RestaurantDataService} from "./restaurant-data.service";

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  constructor(private route: ActivatedRoute, private restaurantDataService: RestaurantDataService) {
  }

  ngOnInit(): void {
    this.route.params.pipe(map(p => p['id'])).subscribe(restaurantId => {
      this.restaurantDataService.getRestaurantData(Number(restaurantId));
    });
  }

}
