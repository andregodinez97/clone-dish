import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {filter, map, Observable} from "rxjs";
import {MenuItem} from "../restaurant-main.model";
import {RestaurantDataService} from "../restaurant-data.service";
import {BasketService} from "../../basket/basket-service/basket.service";
import {
  ItemOptionSelectionDialogComponent
} from "../item-option-selection-dialog/item-option-selection-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {BasketItem} from "../../basket/basket.model";
import {faAdd, faMinus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-items-by-category',
  templateUrl: './items-by-category.component.html',
  styleUrls: ['./items-by-category.component.scss']
})
export class ItemsByCategoryComponent implements OnInit {
  faAdd = faAdd;
  faMinus = faMinus;

  @Input()
  category: string | undefined;

  constructor(private restaurantDataService: RestaurantDataService,
              private basketService: BasketService,
              public dialog: MatDialog,
              private elementRef: ElementRef) {
  }

  ngOnInit(): void {
  }

  getMenuItemsByCategory(category: string): Observable<MenuItem[] | undefined> {
    return this.restaurantDataService.restaurantData$.pipe(
      filter(restaurant => !!restaurant?.menuItemList),
      map(restaurant => restaurant?.menuItemList.filter(menuItem => menuItem.itemCategory === category)),
    );
  }

  getBasketItem(itemId: number): BasketItem | undefined {
    return this.basketService.getBasketItem(itemId);
  }

  addToBasket(menuItem: MenuItem): void {
    if (!!this.getBasketItem(menuItem.id)) {
      this.basketService.addToExistingBasketItem(menuItem.id);
    } else if (menuItem.itemOptions && menuItem.itemOptions.length > 0) {
      this.openItemOptionsDialog(menuItem);
    } else {
      this.basketService.addMenuItemToBasket(menuItem);
    }
  }

  removeFromBasket(itemId: number): void {
    this.basketService.removeFromBasket(itemId);
  }

  openItemOptionsDialog(menuItem: MenuItem, $event?: any): void {
    if (this.shouldOpenDialog($event)) {
      this.dialog.open(ItemOptionSelectionDialogComponent,
        {
          hasBackdrop: true,
          width: '500px',
          height: '600px',
          data: {
            menuItem: menuItem
          }
        });
    }
  }

  private shouldOpenDialog($event: any): boolean {
    return $event ? $event.composedPath()[1]?.className?.includes("mat-grid-tile-content")
      || $event.composedPath()[2]?.className?.includes("mat-grid-tile-content")
      || $event.composedPath()[3]?.className?.includes("mat-grid-tile-content") : true;
  }

  scrollToView(): void {
    this.elementRef.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }

}
