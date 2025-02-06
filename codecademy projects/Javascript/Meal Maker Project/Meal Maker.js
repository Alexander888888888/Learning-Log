// First I create an object named menu which holds the meal and price of Today's Special as properties. These shouldn't be altered directly so I include an underscore in the beginning of their name to alert other developers to this. Their values are currently an empty string and the number 0. They will eventually hold the name and price of the meal.
const menu = {
    _meal: '',
    _price: 0,

    // To safely reassign the two menu properties I add setters that type check the values being assigned using a simple if statement. I make use of the 'this' keyword in order to access the menu's properties inside the function body.
    set meal(mealToCheck) {
        if (typeof mealToCheck === 'string') {
            this._meal = mealToCheck
        }
    },
    set price(priceToCheck) {
        if (typeof priceToCheck === 'number') {
            this._price = priceToCheck
        }
    },

    // To return the values of the _meal and _price properties in a more readable form I use a getter method, instead of directly accessing them. The conditional statement simply checks that the values exist/are truthy and if so return a string telling potential website visitors what Today's Special is. If the values don't exist/are false it returns a string explaining that the meal or price wasn't set correctly.
    get todaysSpecial() {
        if (this._meal && this._price) {
            return `Today's special is ${this._meal} for $${this._price}.`
        } else {
            return 'Meal or price was not set correctly!'
        }
    }
};

// I test the properties beginning with an underscore by manipulating them directly and assign _meal a number value and _price a string value. If I were to log the menu object to the console now I would see a confusing result that wouldn't make sense, a meal with a number value and a price with a string value.
menu._meal = 1;
menu._price = 'string';

// Using the setter methods I set the values of _meal and _price.
menu.meal = 'Spaghetti';
menu.price = 5;

// Using the getter method I log todaysSpecial to the console.
console.log(menu.todaysSpecial);

// Lastly I log the object to the console.
console.log(menu);