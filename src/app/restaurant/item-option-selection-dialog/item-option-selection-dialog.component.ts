import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {itemOptionSelectionDialogData} from "./item-option-selection-dialog.model";

@Component({
  selector: 'app-item-option-selection-dialog',
  templateUrl: './item-option-selection-dialog.component.html',
  styleUrls: ['./item-option-selection-dialog.component.scss']
})
export class ItemOptionSelectionDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: itemOptionSelectionDialogData) {}

}
