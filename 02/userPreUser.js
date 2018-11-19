/*Rabbit.prototype.__proto__ = Animal.prototype;
function PreUser() {
}
PreUser.__proto__= Object.getPrototypeOf(Array);
function User() {

}
User.prototype.__proto__= PreUser.prototype;*/

/*"use strict";

class PreUser {
    constructor(name) {
        this.name = name;
    }
}

class User extends PreUser {
    constructor(name) {
        super(name);
    }

    set sideLength(name) {
        this.height = name;
        this.width = name;
    }
}

var user = new User();*/

function extend(Child, Parent) {
    var F = function() { };
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.superclass = Parent.prototype;
}

function PreUser() {  };
extend(PreUser, Array);

function User()  { };
extend(User, PreUser);

User.prototype.run = function() { };

 var user = new User();




