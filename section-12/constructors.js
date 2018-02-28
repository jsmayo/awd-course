// PART 1

// Create a constructor function for a Person, each person should have a firstName, lastName, favoriteColor and favoriteNumber. Your function MUST be named Person.

function Person(firstName, lastName, favColor, favNum) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favColor = favColor;
  this.favNum = favNum;
  this.multiplyFavoriteNumber = function(num) {
    return num * this.favNum;
  };
}

// Write a method called multiplyFavoriteNumber that takes in a number and returns the product of the number and the object created from the Person functions' favorite number.


var me = new Person("Steven", "M", "Yellow", "16");
console.log(me.firstName, me.lastName, me.favColor, me.favNum, me.multiplyFavoriteNumber(2));

// PART 2

// Given the following code - refactor the Child function to remove all the duplication from the Parent function. You should be able to remove 4 lines of code in the Child function and replace it with 1 single line.

function Parent(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName, favoriteColor, favoriteFood){
    Parent.call(this, firstName, lastName, favoriteColor, favoriteFood);
}

var jr = new Child("firstname", "lastname", "favorite color", "favorite food");
console.log(jr);
console.log(jr.firstName, jr.lastName, jr.favoriteColor, jr.favoriteFood);