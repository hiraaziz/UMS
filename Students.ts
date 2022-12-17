import { Person } from "./Person.js"
import { Course } from "./Course.js"

class Students extends Person{

    course:Course[]

    constructor(name:string,id:number){

        super(name,id)
        this.course = []
    }
}