import crypto from 'node:crypto';

export class Todo {
    body: string;
    completed?: boolean;
    id?: number;
    title: string;
    userId: number;

    private constructor (todo: Todo) {
        this.body = todo.body;
        this.completed = todo.completed;
        this.id = todo.id;
        this.title = todo.title;
        this.userId = todo.userId;
    }

    static create(todo: Todo) {
        const { body, completed, title, userId } = todo;
        const id = crypto.randomInt(201);
        
        return new Todo({
            body,
            completed,
            title,
            userId,
            id
        });
    }

    static restore(todo: Todo) {
        return new Todo(todo);
    }
}