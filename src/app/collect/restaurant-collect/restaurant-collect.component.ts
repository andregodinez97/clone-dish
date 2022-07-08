import {Component, Input, OnInit} from '@angular/core';
import {RestaurantCollect} from "./restaurant-collect.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-restaurant-collect',
  templateUrl: './restaurant-collect.component.html',
  styleUrls: ['./restaurant-collect.component.scss']
})
export class RestaurantCollectComponent implements OnInit {

  @Input()
  restaurantCollect: RestaurantCollect | undefined;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
