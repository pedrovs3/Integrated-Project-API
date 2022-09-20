import {
  filterByCourse, filterByMatricula, filterByStatus, relatorioSearch, filterByYear, filterStudents,
} from '../services/alunosService';
import courseService from '../services/courseService';

class HomeController {
  index(req, res) {
    res.status(200).json(courseService);
  }

  alunos(req, res) {
    const alunos = filterByCourse(req.params.siglaCurso);

    if (req.query.status && req.query.year) {
      const alunosStatusAndYear = filterStudents(alunos, req.query);

      if (alunosStatusAndYear) res.status(200).json(alunosStatusAndYear);
      else res.status(400).json({ error: 'Not Founded' });
      return;
    }

    if (req.query.status) {
      const alunosStatus = filterByStatus(alunos, req.query.status);

      if (alunosStatus) res.status(200).json(alunosStatus);
      else res.status(400).json({ error: 'Nao há alunos com esse status.' });
      return;
    }

    if (req.query.year) {
      const alunosYear = filterByYear(alunos, req.query.year);

      if (alunosYear) res.status(200).json(alunosYear);
      return;
    }

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
