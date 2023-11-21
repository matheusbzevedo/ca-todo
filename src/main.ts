import CreateTodoUseCase from "./application/usecase/create-todo.usecase";
import GetTodoByIdUseCase from "./application/usecase/get-todo-by-id.usecase";
import TodoController from "./infra/controller/todo.controller";
import ExpressAdapter from "./infra/http/express-adapter";
import TodoRepositoryApi from "./infra/repository/todo.repository.api";

const httpServer = new ExpressAdapter();

const todoRepository = new TodoRepositoryApi();

const createTodoUseCase = new CreateTodoUseCase(todoRepository);
const getTodoByIdUseCase = new GetTodoByIdUseCase(todoRepository);

new TodoController(
    createTodoUseCase,
    getTodoByIdUseCase,
    httpServer,
);

httpServer.listen(3001);