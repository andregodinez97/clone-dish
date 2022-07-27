import {Injectable} from '@angular/core';
import {BehaviorSubject, take, tap} from "rxjs";
import {BasketItem} from "../basket.model";
import {MenuItem} from "../../restaurant/restaurant-main.model";

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private basketItemsSubject = new BehaviorSubject<BasketItem[]>([]);
  public basketItems$ = this.basketItemsSubject.asObservable();

  constructor() {}

  getBasketItem(itemId: number): BasketItem | undefined {
    return this.basketItemsSubject.getValue().find(basketItem => basketItem.itemId === itemId || undefined);
  }

  addToExistingBasketItem(itemId: number, itemCount?: number): void {
    const existingBasketItem = this.getBasketItem(itemId)!;
    existingBasketItem.itemCount = itemCount ? itemCount : ++existingBasketItem.itemCount;
    this.basketItemsSubject.next(this.basketItemsSubject.getValue());
  }

  addMenuItemToBasket(menuItem: MenuItem, itemCount?: number): void {
    const newBasketItem = {
      itemId: menuItem.id,
      itemName: menuItem.itemName,
      itemCount: itemCount || 1,
      itemCost: menuItem.itemCost
    } as BasketItem;

    if (menuItem.itemOptions && menuItem.itemOptions.length > 0) {
      newBasketItem.itemOption = menuItem.itemOptions.find(itemOption => itemOption.isSelected);
    }

    this.basketItemsSubject.next([...this.basketItemsSubject.getValue(), newBasketItem]);
  }

  removeFromBasket(itemId: number): void {
    const existingBasketItem = this.getBasketItem(itemId);

    if (existingBasketItem) {
      if (existingBasketItem.itemCount - 1 === 0) {
        const basketItemIndex = this.basketItemsSubject.getValue().indexOf(existingBasketItem)

        if (basketItemIndex !== -1) {
          this.basketItemsSubject.getValue().splice(basketItemIndex, 1);
          this.basketItemsSubject.next(this.basketItemsSubject.getValue());
        }

      } else {
        existingBasketItem.itemCount--;
        this.basketItemsSubject.next(this.basketItemsSubject.getValue());
      }
    }

  }
}
