import { Person } from "./Person.js";
export class Students extends Person {
    course;
    constructor(id, name) {
        super(id, name);
        this.course = [];
    }
    addCourse(Courses) {
        this.course.push(Courses);
        Courses.addStudent(this);
    }
}
