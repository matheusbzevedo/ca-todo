import { Todo } from "../../domain/todo";

export default interface TodoRepository {
    save(todo: Todo): Promise<Todo | undefined>;
    getById(todoId: string): Promise<Todo | undefined>;
}