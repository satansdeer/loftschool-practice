import { observable, action, toJS } from "mobx";

export default class CartStore {

    @observable cartItems = [];

    constructor(){
        this.cartItems.intercept((change) => {

            if(change.removedCount > 0){
                return change;
            }

            var idSet = new Set(toJS(this.cartItems).map(c => c.id));

            if(idSet.has(change.added[0].id))
            {
                // prevent adding same item multiple times
                console.log('>> CartStore > intercept > Adding same item multiple times is not allowed');
                return null;
            }
            return change
        });
    }

    @action
    addToCart = (course) => {
        this.cartItems.push(course);
    }

    @action
    removeFromCart = (course) => {
        var tempList = this.cartItems.filter(function(item) {
            return item.id !== course.id;
        });
        this.cartItems.replace(tempList);
    }
    
    @action
    clearCart = () => {
        this.cartItems.replace([]);
    }
}