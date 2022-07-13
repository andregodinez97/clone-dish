import {Injectable} from '@angular/core';
import {BehaviorSubject, take} from "rxjs";
import {BasketItem} from "./basket.model";
import {MenuItem} from "../restaurant/restaurant-main.model";

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private basketItemsSubject = new BehaviorSubject<BasketItem[]>([]);
  public basketItems$ = this.basketItemsSubject.asObservable();

  constructor() {
  }

  addToBasket(menuItem: MenuItem): void {
    menuItem.itemCount = menuItem.itemCount ? ++menuItem.itemCount : 1;

    const existingBasketItem = this.basketItemsSubject.getValue().find(basketItem => basketItem.itemId === menuItem.id);
    if (existingBasketItem) {
      existingBasketItem.itemCount++;
      this.basketItemsSubject.next(this.basketItemsSubject.getValue());
    } else {

      const newBasketItem = {
        itemId: menuItem.id,
        itemName: menuItem.itemName,
        itemCount: 1,
      } as BasketItem;

      if (menuItem.itemOptions && menuItem.itemOptions.length > 0) {
        newBasketItem.itemOption = menuItem.itemOptions.find(itemOption => itemOption.isSelected);
      }
      this.basketItemsSubject.next([...this.basketItemsSubject.getValue(), newBasketItem]);
    }
  }

  removeFromBasket(menuItem: MenuItem): void {
    const existingBasketItem = this.basketItemsSubject.getValue().find(basketItem => basketItem.itemId === menuItem.id)!;

    if (existingBasketItem.itemCount - 1 === 0) {
      const basketItemIndex = this.basketItemsSubject.getValue().indexOf(existingBasketItem)

      if (basketItemIndex !== -1) {
        this.basketItemsSubject.getValue().splice(basketItemIndex, 1);
        this.basketItemsSubject.next(this.basketItemsSubject.getValue());
        menuItem.itemCount = 0;
      }

    } else {
      existingBasketItem.itemCount--;
      menuItem.itemCount!--;
      this.basketItemsSubject.next(this.basketItemsSubject.getValue());
    }

  }


}
