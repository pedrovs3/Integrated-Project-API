const alunos = require('../../mock/alunos.json');

const filterByMatricula = (matriculaInput) => {
  const searchedAluno = alunos.filter((aluno) => {
    if (matriculaInput === aluno.matricula) return aluno;
  });

  if (searchedAluno.length < 1) return false;
  return searchedAluno[0];
};

const filterByCourse = (courseInput) => {
  const courseSelected = courseInput.toLowerCase();

  const alunoByCourse = alunos.filter((aluno) => {
    const siglaCurso = aluno.curso.map((curso) => curso.sigla.toLowerCase());

    if (siglaCurso.includes(courseSelected)) return aluno;
  });

  if (alunoByCourse < 1) return false;

  return alunoByCourse;
};

const relatorioSearch = (matricula) => {
  const aluno = filterByMatricula(matricula);

  const alunoRelatorio = {
    nome: aluno.nome,
    foto: aluno.foto,
    status: aluno.status,
    curso: aluno.curso,
  };

  return alunoRelatorio;
};

const filterByStatus = (alunosByCourse, status) => {
  const alunosByStatus = alunosByCourse.filter((aluno) => {
    if (aluno.status.toLowerCase() === status.toLowerCase()) return aluno;
  });

  return alunosByStatus;
};

export {
  filterByCourse,
  filterByMatricula,
  relatorioSearch,
  filterByStatus,
};
