import {RestaurantMain} from "./restaurant-main.model";

export const restaurantsDataMock: RestaurantMain[] = [
  {
    id: 9163,
    name: 'Kawa Asian Street Food',
    locationSummary: 'Ballinasloe',
    locationDetail: 'Society Street, Townparks, Ballinasloe',
    openingHours: new Date("2022-07-08T16:00:00"),
    closingHours: new Date("2022-07-08T23:00:00"),
    minimumOrder: 2,
    menuItemCategories: ["Asian Bites", "Noodles"],
    menuItemList: [
      {
        id: 9122,
        itemName: "Poh Pia Rolls",
        itemDescription: "With Glass Noodles, shredded Carrots, Cabbage & Plum Dipping Sauce.",
        itemAllergens: "Contains Eggs, Gluten & Soybeans.",
        itemCost: 5.5,
        itemCategory: "Asian Bites"
      },
      {
        id: 9123,
        itemName: "Hoisin Duck Rolls",
        itemDescription: "Shredded Duck with shredded Carrots, Cabbage served with homemade Hoisin Sauce.",
        itemAllergens: "Contains Eggs, Gluten & Soybeans.",
        itemCost: 6.5,
        itemCategory: "Asian Bites"
      },
      {
        id: 9124,
        itemName: "Gyoza",
        itemDescription: "Traditional Japanese crispys Dumplings filled with Veg, Chicken & served with Japanese Soya Sauce.",
        itemAllergens: "Contains Gluten, Sesame & Soybeans.",
        itemCost: 6,
        itemCategory: "Asian Bites"
      }, {
        id: 9125,
        itemName: "Crispy Calamari",
        itemDescription: "In Peppered Breadcrumbs with Lime Chilli Sauce.",
        itemAllergens: "Contains Crustaceans, Eggs, Molluscs, Gluten & Sulphur Dioxide.",
        itemCost: 7,
        itemCategory: "Asian Bites"
      }, {
        id: 9126,
        itemName: "Pad Thai",
        itemDescription: "Flat Rice Noodles with Chicken, Prawns, fresh Vegetables, served with Crushed Peanuts on side & a wedge of fresh juice Lemon.",
        itemAllergens: "Contains Crustaceans, Eggs, Gluten, Molluscs, Fish, Mustard, Soybeans & Peanuts.",
        itemOptions: [
          {
            itemOptionId: 9223,
            itemOptionName: "Vegetarian",
            itemOptionCost: 9,
            isSelected: true
          },
          {
            itemOptionId: 9224,
            itemOptionName: "Non Vegetarian",
            itemOptionCost: 11,
          }
        ],
        itemCategory: "Noodles"
      }, {
        id: 9127,
        itemName: "Yakisoba Noodles",
        itemDescription: "Udon Noodles with Chicken, Prawns & fresh Vegetables served with a sprinkle of toasted Sesame Seeds.",
        itemAllergens: "Contains Eggs, Gluten, Molluscs & Soybeans.",
        itemOptions: [
          {
            itemOptionId: 9225,
            itemOptionName: "Vegetarian",
            itemOptionCost: 9,
          },
          {
            itemOptionId: 9226,
            itemOptionName: "Non Vegetarian",
            itemOptionCost: 11,
          }
        ],
        itemCategory: "Noodles"
      },
    ]
  }
]
