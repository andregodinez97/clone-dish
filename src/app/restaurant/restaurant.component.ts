import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {filter, map, Observable} from "rxjs";
import {RestaurantDataService} from "./restaurant-data.service";
import {MenuItem, RestaurantMain} from "./restaurant-main.model";
import {faAdd, faBagShopping} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit, AfterViewInit {
  faBagShopping = faBagShopping;
  faAdd = faAdd;

  @ViewChildren('itemCategory') itemCategories!: QueryList<ElementRef>;

  public restaurantMain$: Observable<RestaurantMain | undefined> | undefined;

  constructor(private route: ActivatedRoute, private restaurantDataService: RestaurantDataService) {
  }

  ngOnInit(): void {
    this.route.params.pipe(map(p => p['id'])).subscribe(restaurantId => {
      this.restaurantDataService.getRestaurantData(Number(restaurantId));
    });

    this.restaurantMain$ = this.restaurantDataService.restaurantData$;
  }

  ngAfterViewInit(): void {
  }


  getMenuItemsByCategory(category: string): Observable<MenuItem[] | undefined> {
    return this.restaurantDataService.restaurantData$.pipe(
      filter(restaurant => !!restaurant?.menuItemList),
      map(restaurant => restaurant?.menuItemList.filter(menuItem => menuItem.itemCategory === category)),
    );
  }

  scrollToView(categoryString: string): void {
    const itemCategory = this.itemCategories.find(category => category.nativeElement.id === categoryString);
    itemCategory?.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }


}
