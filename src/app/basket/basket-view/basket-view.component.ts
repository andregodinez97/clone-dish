import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
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
  showBasketView = false;

  constructor(public basketService: BasketService, private router: Router) { }

  ngOnInit(): void {
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

  loadCheckout(): void {
    this.router.navigate([`${this.router.url}/checkout`]);
  }

}
