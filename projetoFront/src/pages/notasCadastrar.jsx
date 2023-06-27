import React, { useState } from 'react';

const NotasCadastrar = ({ addEdit }) => {
  const [disciplina, setDisciplina] = useState('');
  const [a1, setA1] = useState('');
  const [a2, setA2] = useState('');
  const [faltas, setFaltas] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica se todos os campos foram preenchidos
    if (disciplina && a1 && a2 && faltas) {
      const obj = {
        nome: disciplina,
        a1,
        a2,
        faltas,
      };

      addEdit(obj);

      // Limpa os campos após a submissão
      setDisciplina('');
      setA1('');
      setA2('');
      setFaltas('');
    }
  };

  const disciplinas = ['Business Intelligence', 'Construção de Frontend', 'Governança de TI', 'Manutenção de Software e DevOps', 'Direitos Humanos e Ambientais', 'Tópicos de Matemática'];

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Disciplina:</label>
        <select value={disciplina} onChange={(e) => setDisciplina(e.target.value)}>
          <option value="">Selecione uma disciplina</option>
          {disciplinas.map((disciplina, index) => (
            <option key={index} value={disciplina}>{disciplina}</option>
          ))}
        </select>
      </div>
      <div>
        <label>A1:</label>
        <input type="text" value={a1} onChange={(e) => setA1(e.target.value)} />
      </div>
      <div>
        <label>A2:</label>
        <input type="text" value={a2} onChange={(e) => setA2(e.target.value)} />
      </div>
      <div>
        <label>Faltas:</label>
        <input type="text" value={faltas} onChange={(e) => setFaltas(e.target.value)} />
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default NotasCadastrar;
