import { Router } from "express";
import UsersController from "./controllers/UsersController";
import RepositoriesController from "./controllers/RepositoriesController";
const routes = new Router();

//CRUD login
routes.get('/users', UsersController.index);
routes.get('/users/:id', UsersController.show);
routes.post('/users', UsersController.create);
routes.put('/users/:id', UsersController.update);
routes.delete('/users/:id', UsersController.destroy);


//CRUD Repositorios
routes.get('/users/:user_id/repositories', RepositoriesController.index);
routes.post('/users/:user_id/repositories', RepositoriesController.create);
routes.delete('/users/:user_id/repositories', RepositoriesController.destroy);

export default routes;