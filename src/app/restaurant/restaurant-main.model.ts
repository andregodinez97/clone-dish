export interface RestaurantMain {
  id: number;
  name: string;
  locationSummary: string;
  locationDetail: string;
  openingHours: Date;
  closingHours: Date;
  minimumOrder: number;
  menuItemCategories: string[];
  menuItemList: MenuItem[];
}

export interface MenuItem {
  id: number,
  itemName: string;
  itemDescription: string;
  itemAllergens: string;
  itemCost?: number;
  itemOptions?: ItemOption[];
  itemCategory: string;
}

//TODO extend item option to multiple options by cateogry
export interface ItemOption {
  itemOptionId: number;
  itemOptionName: string;
  itemOptionCost: number;
  isSelected?: boolean;
}
