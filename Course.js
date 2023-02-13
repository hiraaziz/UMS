export class Course {
    course_id;
    course_name;
    Student;
    instructor;
    constructor(course_id, course_name) {
        this.course_id = course_id;
        this.course_name = course_name;
        this.Student = [];
        this.instructor = [];
    }
    addStudent(Student) {
        this.Student.push(Student);
    }
    setInstructor(instructor) {
        this.instructor.push(instructor);
    }
}
