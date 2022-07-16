import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {itemOptionSelectionDialogData} from "./item-option-selection-dialog.model";
import {ItemOption} from "../restaurant-main.model";
import {faArrowLeft, faMinus, faAdd} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-item-option-selection-dialog',
  templateUrl: './item-option-selection-dialog.component.html',
  styleUrls: ['./item-option-selection-dialog.component.scss']
})
export class ItemOptionSelectionDialogComponent implements OnInit {
  showSummaryView: boolean = false;
  initialItemOptions: ItemOption[] | undefined;
  faArrowLeft = faArrowLeft;
  faMinus = faMinus;
  faAdd = faAdd;

  constructor(@Inject(MAT_DIALOG_DATA) public data: itemOptionSelectionDialogData) {
  }

  ngOnInit(): void {
    this.initialItemOptions =
      JSON.parse(JSON.stringify(this.data.menuItem.itemOptions));
    this.showSummaryView = !!this.getSelectedItemOption();
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

  addItemOptionToBasket(): void {

  }

  removeSelectedItemOptionFromBasket(): void {
  }

  addSelectedItemOptionToBasket(): void {
  }

  onCancel(): void {
    this.data.menuItem.itemOptions = this.initialItemOptions;
  }

  private unselectAllItemOptions(): void {
    this.data.menuItem.itemOptions?.forEach(itemOption => itemOption.isSelected = false);
  }

}
