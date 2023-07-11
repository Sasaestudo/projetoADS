import { Urltabela } from "./FirebaseConfig"

// GET obter, listar
export async function listaGrade() { //equivalente a lista tarefas
  let grade = [] //equivalente a tarefas
  await fetch(Urltabela + "users/"+{userId}+"/dados.json")
    .then((response) => response.json())
    .then((data) => {
      for (let key in data) {
        grade.push({ key, ...data[key] })
      }
    })
    .catch((error) => { throw Error("Erro!") })
  return grade
}

export async function listaDados() { //equivalente a lista tarefas
  let dadosAluno = [] //equivalente a tarefas
  await fetch(Urltabela + "users/"+{userId}+"/dados.json")
    .then((response) => response.json())
    .then((data) => {
      for (let key in data) {
        dadosAluno.push({ key, ...data[key] })
      }
    })
    .catch((error) => { throw Error("Erro!") })
  return dadosAluno
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
