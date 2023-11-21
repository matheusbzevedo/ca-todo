import { Todo } from "../../domain/todo";
import TodoRepository from "../repository/todo.repository";

export default class CreateTodoUseCase {
    constructor(private readonly todoRepository: TodoRepository ) {}

    async execute(todo: Todo): Promise<Todo | undefined> {
        const newTodo = await this.todoRepository.save(todo);

        return newTodo;
    }
}