import { Instructor } from './Instructor.js';
import { Students } from "./Students.js";
import { Course } from "./Course.js";

export class University{

    Students:Students[]
    Course:Course[]
    Instructor:Instructor[]

    constructor(){
        this.Students = [];
        this.Course = [];
        this.Instructor = []
    }

    addStudents(Student:Students){
        this.Students.push(Student);
    }

    addCourses(Course:Course){
        this.Course.push(Course)
    }

    addInstructor(instructor:Instructor){
        this.Instructor.push(instructor)
    }

    showStudents(){
        this.Students.map(stu=>console.log(stu))
    }

    showCourses(){
        this.Course.map(course => console.log(course))
    }

    showInstructor(){
        this.Instructor.map(tchr=>console.log(tchr))
    }
} 