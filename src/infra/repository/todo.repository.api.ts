import TodoRepository from "../../application/repository/todo.repository";
import { Todo } from "../../domain/todo";

export default class TodoRepositoryApi implements TodoRepository {

    async save(input: Todo): Promise<Todo | undefined> {
        try {
            const todo = Todo.create(input);

            const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
                method: 'POST',
                body: JSON.stringify(todo),
            });

            if (!response) return;

            return todo;
        } catch (error) {
            console.log(error);
        }
    }

    async getById(todoId: string): Promise<Todo | undefined> {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
                method: 'GET',
            });

            if (!response) return;

            return response.json();
        } catch (error) {
            console.log(error);
        }
    }
}