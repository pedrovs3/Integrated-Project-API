const curso = require('../../mock/cursos.json');

const cursoService = () => {
  const json = {};
  json.cursos = curso;
  return json;
};

export default cursoService();
