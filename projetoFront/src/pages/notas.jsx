import './css/tabelas.css';
import React, { useState, useEffect } from 'react';
import NotasCadastrar from './notasCadastrar';
import { getDatabase, onValue, ref, push } from 'firebase/database';

const Notas = () => {
  const [notasAluno, setNotasAluno] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const dbRef = ref(db, 'notas');
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data != null) {
        setNotasAluno(data);
      }
    });
  }, []);

  const addEdit = (obj) => {
    const db = getDatabase();
    const dbRef = ref(db, 'notas');
    push(dbRef, obj, (error) => {
      if (error) {
        console.log('error');
      }
    });
  };

  const calculoMedia = (a1, a2) => {
    const notaA1 = parseFloat(a1);
    const notaA2 = parseFloat(a2);
    const media = (notaA1 + notaA2) / 2;
    return media.toFixed(1); // Arredonda para uma casa decimal
  };

  const calculoSituacao = (a1, a2, faltas) => {
    const notaA1 = parseFloat(a1);
    const notaA2 = parseFloat(a2);
    const media = (notaA1 + notaA2) / 2;
    if (media >= 5 && faltas <= 10) {
      return 'Aprovado';
    } else {
      return 'Reprovado';
    }
  };

  return (
    <>
    
    <section className='ContainerSection'> 
    <h1>Notas</h1>
      <div className='tabela'>
          <table>
            <thead>
              <tr>
                <th>Disciplina</th>
                <th>A1</th>
                <th>A2</th>
                <th>Média</th>
                <th>Faltas</th>
                <th>Situação</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(notasAluno).map((id) => {
                const disciplina = notasAluno[id];
                return (
                  <tr key={id}>
                    <td className='txtEsq'>{disciplina.nome}</td>
                    <td>{disciplina.a1}</td>
                    <td>{disciplina.a2}</td>
                    <td>{calculoMedia(disciplina.a1, disciplina.a2)}</td>
                    <td>{disciplina.faltas}</td>
                    <td>{calculoSituacao(disciplina.a1, disciplina.a2, disciplina.faltas)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
{/*         <div className='formulario'>
        <h1>Dados</h1>
        <NotasCadastrar addEdit={addEdit} /> estará disponível no peril de professor
      </div>  */}
      </section>
    </>
  );
};

export default Notas;