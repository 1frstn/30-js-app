const meal = ['baklava','kebab','buryan','ayran','gosht']
const price = [2,5,3,6,8]

const menu = {
    _price: 0,
    _meal:'',

    set priceSetter(priceToSet){
        if(typeof priceToSet === "number"){
            this._price = priceToSet
        }
    },
    set mealSetter(mealToSet){
        if(typeof mealToSet === "string"){
            this._meal = mealToSet
        }
    },
    get todaysSpecial(){
        if(typeof this._meal === 'string' & typeof this._price === 'number'){
            return `Today’s Special is ${this._meal} for $${this._price}!`
        }else{
            return 'Meal or price was not set correctly!'
        }
    }
}
let randomIndex = Math.floor(Math.random()*5)
menu.priceSetter = price[randomIndex];
menu.mealSetter = meal[randomIndex]

console.log(menu);
console.log(menu.todaysSpecial);