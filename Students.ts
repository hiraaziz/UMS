import { Person } from "./Person.js"
import { Course } from "./Course.js"

export class Students extends Person{

    course:Course[]

    constructor(id:string,name:string){

        super(id,name)
        this.course = []
    }

    addCourse(Courses:Course){
        this.course.push(Courses);
        Courses.addStudent(this)
    }
    
}