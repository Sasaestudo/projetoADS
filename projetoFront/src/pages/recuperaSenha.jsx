
import './css/login.css'

export default function recuperaSenha() {
  return (
    <section className="tela-login">
      <div className="containerLogin">
      <h1>FACIT</h1>
      <h2>Recupera Senha</h2>
    <form className='form-login'>
      <div>
      <p>Favor informar o email cadastrado para receber instruções de troca de senha</p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email"/>
      </div>
      <button>Enviar</button>
    </form>
      </div>
    </section>
  )
}