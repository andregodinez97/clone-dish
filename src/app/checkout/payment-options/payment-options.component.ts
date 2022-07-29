import {Component, OnInit} from '@angular/core';
import {faCreditCard} from '@fortawesome/free-solid-svg-icons';
import {FormControl} from "@angular/forms";
import {BasketService} from "../../basket/basket-service/basket.service";

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.scss']
})
export class PaymentOptionsComponent implements OnInit {
  faCreditCard = faCreditCard;
  payButtonTitle = '';
  paymentMethodFormControl = new FormControl('', [])

  constructor(public basketService: BasketService) {
  }

  ngOnInit(): void {
    this.paymentMethodFormControl.valueChanges.subscribe(newValue => {
      if (newValue === "Add Card") {
        this.payButtonTitle = "Add Card and Pay"
      }
    });

    // TODO figure out default payment method, for now defualt to Add card
    this.paymentMethodFormControl.setValue("Add Card");

  }

}
