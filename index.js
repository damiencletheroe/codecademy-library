// super class creation
class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    set isCheckedOut(value) {
        this._isCheckedOut = value;
    }

    toggleCheckoutStatus() {
        this.isCheckedOut = !this.isCheckedOut;
    }

    getAverageRating() {
        let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0)
        let numRatings = this.ratings.length;
        return ratingsSum / numRatings;
    }

    addRating(rating) {
        this._ratings.push(rating);
    }
}

// sub class creation
class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(director, title, runtime) {
        super(title);
        this._director = director;
        this._runtime = runtime;
    }

    get director() {
        return this._director;
    }

    get runtime() {
        return this._runtime;
    }
}

class CD extends Media {
    constructor(artist, title) {
        super(title);
        this._artist = artist;
    }

    get artist() {
        return this._artist;
    }
}

// Creating a catalogue class with search functionality

class Catalogue {
    constructor(name) {
        this._name = name;
        this._items = [];
    }

    get name() {
        return this._name;
    }

    get items() {
        return this._items;
    }

    addItem(item) {
        this._items.push(item);
    }

    findExactTitle(title) {
        return this._items.find(item => item.title.toLowerCase() === title.toLowerCase());
    }

    findFuzzyTitle(term) {
        return this._items.filter(item => item.title.toLowerCase().includes(term.toLowerCase()));
    }
}

// Creating some example class instances and using methods for testing

/*
const booksNStuff = new Catalogue('Books N Stuff');
booksNStuff.addItem(new Book('George R R Martin', 'A Clash of Kings', 800));
booksNStuff.addItem(new Movie('Steven Spielberg', 'E.T', 120));
booksNStuff.addItem(new CD('Savage Garden', 'Affirmation'));

console.log(booksNStuff.items)
const historyOfEverything = new Book ('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckoutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie ('Jan de Bont', 'Speed', 116);
speed.toggleCheckoutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
*/