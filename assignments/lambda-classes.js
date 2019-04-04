// CODE here for your Lambda Classes


class Person {
    constructor(attributes){
      this.newAge = attributes.age;
      this.newName = attributes.name;
      this.newLocation = attributes.location;
      this.newGender = attributes.gender;
    }
    speak() {
        return `Hello, my name is ${this.newName}, I am from ${this.newLocation}`;
      }
    }