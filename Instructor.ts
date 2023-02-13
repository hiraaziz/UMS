import { Course } from './Course.js';
import { Person } from "./Person.js"

export class Instructor extends Person{
    salary:number
    courses:Course[]

    constructor(id:string,name:string){
        super(id,name)
        this.salary = 0 
        this.courses = []
    }

    assignCourse(Course:Course){
        this.courses.push(Course)
        Course.setInstructor(this)
    }
}