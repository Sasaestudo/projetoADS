import { urlApi, Urltabela } from "./FirebaseConfig"

// GET obter, listar
export async function listaGrade() { //equivalente a lista tarefas
  let grade = [] //equivalente a tarefas
  await fetch(Urltabela + "grade.json")
    .then((response) => response.json())
    .then((data) => {
      for (let key in data) {
        grade.push({ key, ...data[key] })
      }
    })
    .catch((error) => { throw Error("Erro!") })
  return grade
}

//POST criar, inserir
export async function insereGrade(gradeAluno) {//tarefa equivalente a grade aluno
  await fetch(Urltabela + "grade.json", {
    method: 'POST',
    body: JSON.stringify(gradeAluno),
    headers: { 'Content-type': 'application/json' }
  })
    .catch((error) => { throw Error("Deu ruim") })
}
