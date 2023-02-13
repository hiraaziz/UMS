import { Person } from "./Person.js";
export class Instructor extends Person {
    salary;
    courses;
    constructor(id, name) {
        super(id, name);
        this.salary = 0;
        this.courses = [];
    }
    assignCourse(Course) {
        this.courses.push(Course);
        Course.setInstructor(this);
    }
}
