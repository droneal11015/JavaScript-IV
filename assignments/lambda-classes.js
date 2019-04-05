// CODE here for your Lambda Classes


class Person {
    constructor(attributes){
      this.age = attributes.age;
      this.name = attributes.name;
      this.location = attributes.location;
      this.gender = attributes.gender;
    }
        speak() {
            return `Hello, my name is ${this.name}, I am from ${this.location}`;
      }
}


class Instructor extends Person {
    constructor(attributes){
    super(attributes);
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.language;
    this.catchPhrase = attributes.phrase;
        }
        demo(subject) {
            return `Today we are learning about ${subject}`;
          }
        grade(student, subject) {
            return `${student.name} receives a perfect scor on ${subject}`;
        }
}

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    };

    listSubjects() {
        let i = 0;
        while (i<this.favSubjects.length, i++){
            return `I like ${this.favSubjects[i]}`;
        }
    };

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    };

    sprintChallenge(subject){
        return `${this.name} has begun Sprint Challenge for ${subject}.`;
    };
};

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    };

    standUp(channel) {
        return `${this.name} announces to ${channel}, "@channel standy times!"`;
    };

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    };
}



const cody = new Instructor({
    name: 'Cody',
    age: 37,
    location: 'North Carolina',
    gender: 'Male',
    specialty: 'Front End Development',
    faveLanguage: 'Ruby',
    catchPhrase: 'Its that easy'
});

const caroline = new ProjectManager({
    name: 'Caroline',
    age: 30,
    location: 'Florida',
    gender: 'Female',
    specialty: 'Junior Fullstack Development',
    faveLanguage: 'Javascript',
    catchPhrase: 'You got this!',
    gradClassName: 'web17',
    favInstructor: 'Cody'
});

const dani = new Student({
    name: 'Dani',
    age: 28,
    location: 'Georgia',
    gender: 'Female',
    previousBackground: 'Tech Support',
    className: 'web19',
    favSubjects: ['Design', 'HTML', 'CSS', 'Javascript']
});