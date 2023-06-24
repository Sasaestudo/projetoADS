import { sendPasswordResetEmail } from 'firebase/auth';
import { createContext, useState } from 'react'
import { resetPassword } from '../services/AuthService';


const UserContext = createContext({
  userID: null,
  logado: false,
  handleLogin: () => { },
  handleLogout: () => { },
  handleResetPass: () => { },
})


export function UserContextProvider(props) {
  const [currentUser, setCurrentUser] = useState({ userID: null, logado: false })
  async function login(email, senha) { //'async' pra sinalizar função assíncrona, devido à necessidade de aguardar retorno de backend
    let response = false
    await signInWithEmailAndPassword(auth, email, senha) //'await' pra função esperar resposta com a validação do backend
    .then(() => { //se der certo
      setCurrentUser({ userID: userCredential.user.id, logado: true })
      response = true
    })
    .catch((error) => console.log(error.message)) //se der erro
    response = true
  return response
  }


  function logout() {
    setCurrentUser({ userID: null, logado: false })
  }

  async function esqueciSenha( {email} ) {
    await resetPassword(email)
    .catch((error) => console.log(error.message)) 
  
  }

  const contexto = {
    userID: currentUser.userID,
    logado: currentUser.logado,
    handleLogin: login,
    handleLogout: logout,
    handleResetPass: esqueciSenha, 
  }

  return (
    <UserContext.Provider value={contexto}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContext