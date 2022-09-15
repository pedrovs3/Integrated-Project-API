import { filterByCourse, filterByMatricula, relatorioSearch } from '../services/alunosService';
import courseService from '../services/courseService';

class HomeController {
  index(req, res) {
    res.status(200).json(courseService);
  }

  alunos(req, res) {
    const alunos = filterByCourse(req.params.siglaCurso);

    if (alunos) res.status(200).json(alunos);
    else res.status(404).json({ error: 'Curso nao encontrado' });
  }

  searchByMatricula(req, res) {
    const aluno = filterByMatricula(req.params.matricula);

    if (aluno) res.status(200).json(aluno);
    else res.status(400).json({ error: 'Matricula nao encontrada' });
  }

  relatorio(req, res) {
    const relatorio = relatorioSearch(req.params.aluno);
    res.json(relatorio);
  }
}

export default new HomeController();
