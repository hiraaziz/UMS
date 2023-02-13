import { Instructor } from './Instructor.js';
import inquirer from "inquirer";
import { University } from "./University.js";
import { Students } from "./Students.js";
import { Course } from './Course.js';
let trans_continue = true;
let uni = new University();
do {
    await main();
    /* --------Step 3-----------
           Ask to continue     */
    let continues = await inquirer.prompt({
        type: "confirm",
        name: "continue",
        message: ("\n Do you want to continue ? ")
    });
    trans_continue = continues.continue ? true : false;
    console.clear();
} while (trans_continue === true);
async function main() {
    let add = await inquirer.prompt([
        {
            type: 'list',
            name: "addOptions",
            message: ("Select option"),
            choices: ["Add Students", "Add Course", "Add Student Course", "Add Instructor", "Add Instructor Course", "Show Students", "Show Courses", "Show Instructors"]
        }
    ]);
    if (add.addOptions == 'Add Students') {
        let addstu = await inquirer.prompt([
            {
                type: 'input',
                name: "addid",
                message: ("Enter id: ")
            },
            {
                type: 'input',
                name: "addname",
                message: ("Enter name: ")
            }
        ]);
        let stu1 = new Students(addstu.addid, addstu.addname);
        uni.addStudents(stu1);
    }
    else if (add.addOptions == 'Add Course') {
        let addcourse = await inquirer.prompt([
            {
                type: 'input',
                name: "addid",
                message: ("Enter id: ")
            },
            {
                type: 'input',
                name: "addname",
                message: ("Enter name: ")
            }
        ]);
        let course1 = new Course(addcourse.addid, addcourse.addname);
        uni.addCourses(course1);
    }
    else if (add.addOptions == 'Add Student Course') {
        let addStuCourse = await inquirer.prompt([
            {
                type: 'input',
                name: "selectstu",
                message: "write name of student " + uni.Students.map(stu => stu.name)
            },
            {
                type: 'input',
                name: "selectsubj",
                message: "Write course name " + uni.Course.map(Course => Course.course_name),
            }
        ]);
        let student = uni.Students.findIndex((stu, ind) => stu.name === addStuCourse.selectstu);
        let Subject = uni.Course.findIndex((subj) => subj.course_name === addStuCourse.selectsubj);
        if (student == -1 || Subject == -1) {
            console.log("YOu have entered wrong course name Or student name");
        }
        else {
            uni.Students[student].addCourse(uni.Course[Subject]);
        }
    }
    else if (add.addOptions == 'Add Instructor') {
        let addInstructor = await inquirer.prompt([
            {
                type: 'input',
                name: "addid",
                message: ("Enter id: ")
            },
            {
                type: 'input',
                name: "addname",
                message: ("Enter name: ")
            }
        ]);
        let instructor = new Instructor(addInstructor.addid, addInstructor.addname);
        uni.addInstructor(instructor);
    }
    else if (add.addOptions == 'Add Instructor Course') {
        let addtchrCourse = await inquirer.prompt([
            {
                type: 'input',
                name: "selecttchr",
                message: "write name of student " + uni.Instructor.map(stu => stu.name)
            },
            {
                type: 'input',
                name: "selectsubj",
                message: "Write course name " + uni.Course.map(Course => Course.course_name),
            }
        ]);
        let teacher = uni.Instructor.findIndex((stu, ind) => stu.name === addtchrCourse.selecttchr);
        let Subject = uni.Course.findIndex((subj) => subj.course_name === addtchrCourse.selectsubj);
        if (teacher == -1 || Subject == -1) {
            console.log("YOu have entered wrong course name Or student name");
        }
        else {
            uni.Instructor[teacher].assignCourse(uni.Course[Subject]);
        }
    }
    else if (add.addOptions == 'Show Students') {
        uni.showStudents();
    }
    else if (add.addOptions == 'Show Courses') {
        uni.showCourses();
    }
    else if (add.addOptions == 'Show Instructors') {
        uni.showInstructor();
    }
}
