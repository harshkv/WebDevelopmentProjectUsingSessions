class UserItem {
    /**
     * Constructor
     * @param item
     * @param rating
     * @param madeIt

     */
    constructor(item, rating , madeIt) {
        this._item = item;
        this._rating = rating;
        this._madeIt = madeIt;
    }


        /** Getters and Setters */

        get item() {
            return this._item;
        }

        set item(value) {
            this._item = value;
        }

        get rating() {
            return this._rating;
        }

        set rating(value) {
            this._rating = value;
        }

        get madeIt() {
            return this._madeIt;
        }

        set madeIt(value) {
            this._madeIt = value;
        }
    }

module.exports = UserItem;
