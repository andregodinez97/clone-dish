import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {filter, map, Observable} from "rxjs";
import {RestaurantDataService} from "./restaurant-data.service";
import {MenuItem, RestaurantMain} from "./restaurant-main.model";
import {faAdd, faBagShopping, faMinus} from '@fortawesome/free-solid-svg-icons';
import {BasketService} from "../basket/basket.service";
import {BasketItem} from "../basket/basket.model";
import {MatDialog} from "@angular/material/dialog";
import {
  ItemOptionSelectionDialogComponent
} from "./item-option-selection-dialog/item-option-selection-dialog.component";

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit, AfterViewInit {
  faBagShopping = faBagShopping;
  faAdd = faAdd;
  faMinus = faMinus;


  @ViewChildren('itemCategory') itemCategories!: QueryList<ElementRef>;

  public restaurantMain$: Observable<RestaurantMain | undefined> | undefined;
  public basketItems$: Observable<BasketItem[]> | undefined;


  constructor(private route: ActivatedRoute,
              private restaurantDataService: RestaurantDataService,
              private basketService: BasketService,
              public dialog: MatDialog) {
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

  addToBasket(menuItem: MenuItem): void {
    if (menuItem.itemOptions && menuItem.itemOptions.length > 0) {
      this.openItemOptionsDialog(menuItem);
    } else {
      this.basketService.addToBasket(menuItem);
    }
  }

  removeFromBasket(menuItem: MenuItem): void {
    this.basketService.removeFromBasket(menuItem);
  }

  openItemOptionsDialog(menuItem: MenuItem): void {
    this.dialog.open(ItemOptionSelectionDialogComponent,
      {
        hasBackdrop: true,
        width: '500px',
        height: '600px',
        data: {
          menuItem: menuItem
        }
      })
  }

}
