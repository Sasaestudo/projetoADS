import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useContext, useState } from 'react'
import UserContext from '../contexts/UserContext'
import './css/login.css'
import { auth, sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth'


export default function recuperaSenha(props) {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const { handleResetPass } = useContext(UserContext)
    const [error, sendEmailVerification ] = useState("")

    const validaEmail = {
        required: {
          value: true,
          message: 'Email é obrigatorio',
        },
        pattern: {
          value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, //expressão regular de validação de email
          message: 'Email inválido',
        }
      }

    async function onSubmit(data) { //chama o handle reser , tbm deve ser assincrono
        const { email } = data;
        firebase.auth().sendPasswordResetEmail(data)
        try {
          handleResetPass(data)
          sendEmailVerification(data)
          navigate("/") // url de direcionamento para login após reset de senha com sucesso
        }catch (error) {
       (error.message)
        }
    
      }
  return (
    <section className="tela-login">
      <div className="containerLogin">
      <h1>FACIT</h1>
      <h2>Recupera Senha</h2>
    <form onSubmit={handleSubmit(onSubmit)} className='form-login'>
    {error && <p className="erro">{error.message}</p>}
      <div>
      <p>Favor informar o email cadastrado</p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email", validaEmail)}/>
        {errors.email && <p className="erro">{errors.email.message}</p>}
      </div>
      <button>Enviar</button>
    </form>
      </div>
    </section>
  )
}