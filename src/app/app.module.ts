import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OrderComponent} from './order/order.component';
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDividerModule} from "@angular/material/divider";
import { CollectComponent } from './collect/collect.component';
import { RestaurantCollectComponent } from './collect/restaurant-collect/restaurant-collect.component';
import {MatCardModule} from "@angular/material/card";
import { RestaurantComponent } from './restaurant/restaurant.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatChipsModule} from "@angular/material/chips";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatDialogModule} from "@angular/material/dialog";
import { ItemOptionSelectionDialogComponent } from './restaurant/item-option-selection-dialog/item-option-selection-dialog.component';
import {MatRadioModule} from "@angular/material/radio";
import { ItemsByCategoryComponent } from './restaurant/items-by-category/items-by-category.component';
import { BasketViewComponent } from './basket/basket-view/basket-view.component';
import { IncreaseDecreaseCounterComponent } from './common/increase-decrease-counter/increase-decrease-counter.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CollectOptionsComponent } from './checkout/collect-options/collect-options.component';
import { OrderSummaryComponent } from './checkout/order-summary/order-summary.component';
import { PaymentOptionsComponent } from './checkout/payment-options/payment-options.component';
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatSelectModule} from "@angular/material/select";
import {DatePipe} from "@angular/common";
import { NotesComponent } from './checkout/notes/notes.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    CollectComponent,
    RestaurantCollectComponent,
    RestaurantComponent,
    ItemOptionSelectionDialogComponent,
    ItemsByCategoryComponent,
    BasketViewComponent,
    IncreaseDecreaseCounterComponent,
    CheckoutComponent,
    CollectOptionsComponent,
    OrderSummaryComponent,
    PaymentOptionsComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatCardModule,
    FontAwesomeModule,
    MatChipsModule,
    MatExpansionModule,
    MatGridListModule,
    MatDialogModule,
    MatRadioModule,
    MatInputModule,
    FormsModule,
    MatAutocompleteModule,
    MatSelectModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
