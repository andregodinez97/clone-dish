import {Component, OnInit} from '@angular/core';
import {faShoppingBasket} from '@fortawesome/free-solid-svg-icons';
import {BasketItem} from "../../basket/basket.model";
import {Observable} from "rxjs";
import {BasketService} from "../../basket/basket-service/basket.service";

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
  faShoppingBasket = faShoppingBasket;

  basketItems$: Observable<BasketItem[] | undefined> | undefined;

  constructor(public basketService: BasketService) { }

  ngOnInit(): void {
    this.basketItems$ = this.basketService.basketItems$;
  }

  getBasketItem(itemId: number): BasketItem | undefined {
    return this.basketService.getBasketItem(itemId);
  }

  removeFromBasket(itemId: number): void {
    this.basketService.removeFromBasket(itemId);
  }

  addToBasket(itemId: number): void {
    this.basketService.addToExistingBasketItem(itemId);
  }
}
