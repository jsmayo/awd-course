count = 0;

class Person {
    constructor(firstName, lastName, favoriteColor, favoriteNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.favoriteColor = favoriteColor;
        this.favoriteNumber = favoriteNumber;
    }

    multiplyFavoriteNumber(num) {
        return num * this.favoriteNumber;
    }

    static countIterator() {
      count++;
      console.log(count);
    }
}

// Static methods can be called without the object being created
Person.countIterator();

// Making a new Person Object
var a = new Person("first", "last", "yellow", 16);

// Looking at current properties
console.log(a);

// Call static method
Person.countIterator();
/* Note
    Cannot do a.countIterator() and using a.countIterator
    will add the property countIterator to the 'a' object. */
