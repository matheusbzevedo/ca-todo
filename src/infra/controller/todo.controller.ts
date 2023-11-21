import CreateTodoUseCase from "../../application/usecase/create-todo.usecase";
import GetTodoByIdUseCase from "../../application/usecase/get-todo-by-id.usecase";
import HttpServer from "../http/http-server";

export default class TodoController {

    constructor(
        private readonly createTodoUseCase: CreateTodoUseCase,
        private readonly getTodoByIdUseCase: GetTodoByIdUseCase,
        private readonly httpServer: HttpServer,
    ) {
        this.httpServer.register('post', '/todo', async (_params: any, body: any) => {
            return await this.createTodoUseCase.execute(body);
        });

        this.httpServer.register('get', '/todo/:todoId', async (params: any, _body: any) => {
            return await  this.getTodoByIdUseCase.execute(params.todoId)
        });
    }
}