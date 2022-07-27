import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BasketService} from "../basket-service/basket.service";
import {BasketItem} from "../basket.model";
import {Observable, tap} from "rxjs";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-basket-view',
  templateUrl: './basket-view.component.html',
  styleUrls: ['./basket-view.component.scss']
})
export class BasketViewComponent implements OnInit {
  faShoppingBasket = faShoppingBasket;
  basketItemsTotalCount = 0;
  basketItemsTotalCost = 0;
  showBasketView = false;
  basketItems$: Observable<BasketItem[]> | undefined;

  constructor(private route: ActivatedRoute, private basketService: BasketService) { }

  ngOnInit(): void {
    // show basket if more than 1 item in basket and on restaurant page
    this.basketItems$ = this.basketService.basketItems$;
    this.basketItems$.pipe(tap(basketItems => {
      let newTotalCount = 0;
      let newTotalCost = 0;
      basketItems.forEach(basketItem => {
        newTotalCount = newTotalCount + basketItem.itemCount;

        if (!!basketItem.itemOption) {

        } else {
          newTotalCost = newTotalCost + basketItem.itemCount * basketItem.itemCost!;
        }
      });

      this.basketItemsTotalCount = newTotalCount;
      this.basketItemsTotalCost = newTotalCost;
    })).subscribe();
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
