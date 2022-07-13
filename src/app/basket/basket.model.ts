import {ItemOption} from "../restaurant/restaurant-main.model";

export interface BasketItem {
  itemId: number;
  itemName: string;
  itemCount: number;
  itemOption?: ItemOption;
}
