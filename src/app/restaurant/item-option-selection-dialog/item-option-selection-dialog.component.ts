import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {itemOptionSelectionDialogData} from "./item-option-selection-dialog.model";
import {ItemOption} from "../restaurant-main.model";
import {faAdd, faArrowLeft, faMinus, faX} from "@fortawesome/free-solid-svg-icons";
import {BasketService} from "../../basket/basket-service/basket.service";

@Component({
  selector: 'app-item-option-selection-dialog',
  templateUrl: './item-option-selection-dialog.component.html',
  styleUrls: ['./item-option-selection-dialog.component.scss']
})
export class ItemOptionSelectionDialogComponent implements OnInit {
  itemOptionsAvailable = false;
  showSummaryView = false;
  initialItemOptions: ItemOption[] | undefined;

  newBasketItemCount = 1;

  faArrowLeft = faArrowLeft;
  faMinus = faMinus;
  faAdd = faAdd;
  faX = faX;


  constructor(@Inject(MAT_DIALOG_DATA)
              public data: itemOptionSelectionDialogData,
              private basketService: BasketService) {
  }

  ngOnInit(): void {
    this.itemOptionsAvailable = !!this.data.menuItem.itemOptions && this.data.menuItem.itemOptions.length > 0;
    if (this.itemOptionsAvailable) {
      this.initialItemOptions =
        JSON.parse(JSON.stringify(this.data.menuItem.itemOptions));
      // this.showSummaryView = !!this.getSelectedItemOption();
    }
  }

  getSelectedItemOption(): ItemOption | undefined {
    return this.data.menuItem.itemOptions?.find(itemOption => itemOption.isSelected);
  }

  onSelectedItemChange(itemOption: ItemOption): void {
    this.unselectAllItemOptions();
    itemOption.isSelected = true;
    this.showSummaryView = !!this.getSelectedItemOption();
  }

  resetToItemSelection(): void {
    this.unselectAllItemOptions();
    this.showSummaryView = !!this.getSelectedItemOption();
  }


  onCancel(): void {
    this.data.menuItem.itemOptions = this.initialItemOptions;
  }

  addItemToBasket(): void {
    // existing basket item
    if (!!this.basketService.getBasketItem(this.data.menuItem.id)) {
      this.basketService.addToExistingBasketItem(this.data.menuItem.id, this.newBasketItemCount);
    } else {
      this.basketService.addMenuItemToBasket(this.data.menuItem, this.newBasketItemCount);
    }
    this.resetToItemSelection();

    //  TODO: Add new basket item with new item option
  }

  private unselectAllItemOptions(): void {
    this.data.menuItem.itemOptions?.forEach(itemOption => itemOption.isSelected = false);
  }

}
