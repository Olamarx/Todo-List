export default class Todo{
    completed;
    task;
    index;
    constructor(task, completed = false, index) {
        this.task = task;
        this.completed = completed;
        this.index = index;
    }
}