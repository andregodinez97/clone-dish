import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map, Observable} from "rxjs";
import {RestaurantDataService} from "./restaurant-data.service";
import {RestaurantMain} from "./restaurant-main.model";
import {faBagShopping} from '@fortawesome/free-solid-svg-icons';
import {BasketService} from "../basket/basket.service";
import {BasketItem} from "../basket/basket.model";
import {ItemsByCategoryComponent} from "./items-by-category/items-by-category.component";

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit, AfterViewInit {
  faBagShopping = faBagShopping;

  @ViewChildren(ItemsByCategoryComponent) itemCategories!: QueryList<ItemsByCategoryComponent>;

  public restaurantMain$: Observable<RestaurantMain | undefined> | undefined;
  public basketItems$: Observable<BasketItem[]> | undefined;


  constructor(private route: ActivatedRoute,
              private restaurantDataService: RestaurantDataService,
              private basketService: BasketService) {
  }

  ngOnInit(): void {
    this.route.params.pipe(map(p => p['id'])).subscribe(restaurantId => {
      this.restaurantDataService.getRestaurantData(Number(restaurantId));
    });

    this.restaurantMain$ = this.restaurantDataService.restaurantData$;
    this.basketItems$ = this.basketService.basketItems$;
  }

  ngAfterViewInit(): void {
  }

  scrollToView(categoryString: string): void {
   const itemsByCategoryComponent = this.itemCategories.find(itemsByCategoryComponent => itemsByCategoryComponent.category === categoryString);
   itemsByCategoryComponent?.scrollToView();
  }
}
