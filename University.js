export class University {
    Students;
    Course;
    Instructor;
    constructor() {
        this.Students = [];
        this.Course = [];
        this.Instructor = [];
    }
    addStudents(Student) {
        this.Students.push(Student);
    }
    addCourses(Course) {
        this.Course.push(Course);
    }
    addInstructor(instructor) {
        this.Instructor.push(instructor);
    }
    showStudents() {
        this.Students.map(stu => console.log(stu));
    }
    showCourses() {
        this.Course.map(course => console.log(course));
    }
    showInstructor() {
        this.Instructor.map(tchr => console.log(tchr));
    }
}
