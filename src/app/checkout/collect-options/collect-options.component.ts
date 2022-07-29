import {Component, Input, OnInit} from '@angular/core';
import {faBagShopping, faLocation} from '@fortawesome/free-solid-svg-icons';
import {RestaurantMain} from "../../restaurant/restaurant-main.model";
import {FormControl} from "@angular/forms";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-collect-options',
  templateUrl: './collect-options.component.html',
  styleUrls: ['./collect-options.component.scss']
})
export class CollectOptionsComponent implements OnInit {
  faBagShopping = faBagShopping;
  faLocation = faLocation;
  customCollectionTimeSelected = false;

  @Input()
  restaurantMainData: RestaurantMain | undefined;

  collectionTime = new FormControl('collectionTime', []);
  customCollectionTime = new FormControl('customCollectionTime', []);
  collectionTimeOptions = ['ASAP', 'Custom']

  constructor(private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    this.collectionTime.setValue('ASAP');
    this.customCollectionTime.setValue(this.getDateTimeNow());
    this.collectionTime.valueChanges.subscribe(
      value => this.customCollectionTimeSelected = value === this.collectionTimeOptions[1])
  }

  getDateTimeNow() {
    // TODO fix bug, not changing AM PM
    return this.datePipe.transform(Date.now(), 'yyyy-MM-ddThh:mm')
  }
}
