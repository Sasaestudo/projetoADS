import { createContext, useState } from 'react'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

//Dados de validação Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB1LVqhWvAIhOcBksi2iVjSQXPXFMQLkr8",
    authDomain: "facit-d638d.firebaseapp.com",
    projectId: "facit-d638d",
    storageBucket: "facit-d638d.appspot.com",
    messagingSenderId: "638908525049",
    appId: "1:638908525049:web:fb58e8e2ee3113b679f528",
    measurementId: "G-4TWG4HJH99"
  };

  // inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const UserContext = createContext({
  userID: null,
  logado: false,
  handleLogin: () => { },
  handleLogout: () => { },
})

export function UserContextProvider(props) {
  const [currentUser, setCurrentUser] = useState({ userID: null, logado: false })

  async function login(email, senha) { //'async' pra sinalizar função assíncrona, devido à necessidade de aguardar retorno de backend
    let response = false
    await signInWithEmailAndPassword(auth, email, senha) //'await' pra função esperar resposta com a validação do backend
    .then((userCredential) => { //se der certo
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

  const contexto = {
    userID: currentUser.userID,
    logado: currentUser.logado,
    handleLogin: login,
    handleLogout: logout,
  }

  return (
    <UserContext.Provider value={contexto}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContext