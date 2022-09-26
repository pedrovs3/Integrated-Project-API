import { Router } from 'express';
import homeController from '../controllers/HomeController';

const route = Router();

route.get('/cursos', homeController.index);
route.get('/alunos/:siglaCurso', homeController.alunos);
// route.get('/alunos/:siglaCurso?status', homeController.alunos);
// route.get('/alunos/:siglaCurso?year', homeController.alunos);
// route.get('/alunos/:siglaCurso?status&year', homeController.alunos);
route.get('/aluno/:matricula', homeController.searchByMatricula);
route.get('/relatorio/:aluno', homeController.relatorio);

export default route;
