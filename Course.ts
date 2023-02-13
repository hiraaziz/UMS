import { Students } from "./Students.js"
import { Instructor} from './Instructor.js'

export class Course{

    course_id:string
    course_name:string
    Student:Students[]
    instructor:Instructor[]

    constructor(course_id:string,course_name:string){
        this.course_id = course_id;
        this.course_name = course_name;
        this.Student=[]
        this.instructor=[]
    }

    addStudent(Student:Students){
        this.Student.push(Student)
    }

    setInstructor(instructor:Instructor){
        this.instructor.push(instructor)
    }
}