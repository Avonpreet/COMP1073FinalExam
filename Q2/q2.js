// JavaScript Document

//Constructor function is used to create Object template Person
// with properties name, age, gender, interests

class Person {
  constructor(name, age, gender, classes) {
    this.name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

//greeting method is created from person object template, which also
//prints on console using name field from Person object.
  greeting() {
    console.log(`Hi! I'm ${this.name}`);
  };

//bye method is created using name field from Person object template,
//which prints a message in console with the name of the person.
  bye() {
    console.log(`${this.name.} has left the building. Bye for now!`);
  };
}


//object instances parth and harmanpreet are created for 2 different persons.
//with all the properties which are name, age, gender and interests.
let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP']);
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase']);


//New object template Teacher is created which extends Person constructor,
//which means all the properties from person will also be used in Teacher now,
//Teacher constructor also includes 2 new properties subject and grade and all
//the other properties will be defined using super to extend from Person object template.
class Teacher extends Person {
  constructor(name, last, age, gender, interests, subject, grade) {
    super(name, age, gender, interests);
// subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
  }
}