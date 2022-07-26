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

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    CollectComponent,
    RestaurantCollectComponent,
    RestaurantComponent,
    ItemOptionSelectionDialogComponent,
    ItemsByCategoryComponent,
    BasketViewComponent
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
