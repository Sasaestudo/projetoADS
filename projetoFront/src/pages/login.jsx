import LoginForm from "./loginForm"
import './css/login.css'

export default function Login() {
  return (
    <section className="tela-login">
      <div className="containerLogin">
      <h1>FACIT</h1>
      <h2>Login</h2>
      <LoginForm />
      </div>
    </section>
  )
}