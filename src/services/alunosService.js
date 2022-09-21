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
  const json = {};

  const alunoByCourse = alunos.filter((aluno) => {
    const siglaCurso = aluno.curso.map((curso) => curso.sigla.toLowerCase());

    if (siglaCurso.includes(courseSelected)) return aluno;
  });

  if (alunoByCourse < 1) return false;
  json.alunos = alunoByCourse;

  return json;
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
  const alunosByStatus = alunosByCourse.alunos.filter((aluno) => {
    if (aluno.status.toLowerCase() === status.toLowerCase()) return aluno;
  });
  const json = {};

  json.alunosByStatus = alunosByStatus;
  return json;
};

const filterByYear = (alunosByCourse, year) => {
  const alunosByYear = alunosByCourse.alunos.filter((aluno) => {
    if (aluno.curso[0].conclusao === year) return aluno;
  });
  const json = {};
  json.alunosByYear = alunosByYear;

  return json;
};

const filterStudents = (alunoByCourse, filters) => {
  const { status, year } = filters;
  const studentsFilter = alunoByCourse.alunos.filter((aluno) => {
    if (aluno.status.toLowerCase() === status && aluno.curso[0].conclusao === year) return aluno;
  });

  const json = {};
  json.studentsFilter = studentsFilter;

  return json;
};

export {
  filterByCourse,
  filterByMatricula,
  relatorioSearch,
  filterByStatus,
  filterByYear,
  filterStudents,
};
