"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person_js_1 = require("./Person.js");
class Students extends Person_js_1.Person {
    course;
    constructor(name, id) {
        super(name, id);
        this.course = [];
    }
}
