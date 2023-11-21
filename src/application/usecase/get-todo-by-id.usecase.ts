import { Todo } from "../../domain/todo";
import TodoRepository from "../repository/todo.repository";

export default class GetTodoByIdUseCase {
    constructor (private readonly todoRepository: TodoRepository) {}

    async execute(todoId: string): Promise<Todo | undefined> {
        const todo = await this.todoRepository.getById(todoId);

        return todo;
    } 
}