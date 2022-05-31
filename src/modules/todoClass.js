export default class Todo{
    completed;
    task;
    index;
    constructor(task, index, completed = false) {
        this.task = task;
        this.index = index;
        this.completed = completed;
    }
}