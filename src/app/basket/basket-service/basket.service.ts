import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {BasketItem} from "../basket.model";
import {MenuItem} from "../../restaurant/restaurant-main.model";

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private basketItemsSubject = new BehaviorSubject<BasketItem[]>([]);
  public basketItems$ = this.basketItemsSubject.asObservable();
  public readonly processingFee = 0.5;

  constructor() {
  }

  get total$(): Observable<number> {
    return this.basketItems$.pipe(map(basketItems => {
      let subTotal = 0;
      basketItems.forEach(basketItem => {

        if (!!basketItem.itemCost && !!basketItem.itemCount) {
          subTotal = subTotal + basketItem.itemCount * basketItem.itemCost!
        }

      });

      return subTotal + this.processingFee;
    }));
  }

  get subTotal$(): Observable<number> {
    return this.basketItems$.pipe(map(basketItems => {
      let subTotal = 0;
      basketItems.forEach(basketItem => {
        subTotal = subTotal + basketItem.itemCount * basketItem.itemCost!
      });

      return subTotal;
    }));
  }

  get totalCount$(): Observable<number> {
    return this.basketItems$.pipe(map(basketItems => {
      let totalCount = 0;
      basketItems.forEach(basketItem => {
        totalCount = totalCount + basketItem.itemCount;
      });

      return totalCount;
    }));
  }

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
      const selectedItemOption = menuItem.itemOptions.find(itemOption => itemOption.isSelected);
      newBasketItem.itemOption = selectedItemOption;
      newBasketItem.itemCost = selectedItemOption?.itemOptionCost;
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
