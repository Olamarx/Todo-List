/* eslint-disable */

export default class Todo{
    task;
    index;
    completed;
    constructor(task, index, completed = false) {
        this.task = task;
        this.index = index;
        this.completed = completed;
    }
}