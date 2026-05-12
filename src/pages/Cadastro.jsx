import styles from "./Cadastro.module.css";
import { Link } from 'react-router-dom';

export default function Cadastro() {
  return (
    <main>
      <section className={styles.imagemSection}></section>
      <section className={styles.loginSection}>
        <form action="submit" className={styles.form}>
          <h1>Boingler</h1>
          <h2>Cadastratis</h2>
          <div className={styles.inputs}>
            <h3>Email</h3>
            <input type="text" placeholder="Digite seu e-mail" />
            <h3>Username</h3>
            <input type="text" placeholder="Digite um usuário" />
            <h3>Senha</h3>
            <input type="text" placeholder="Digite sua senha" />
            <Link to="/" className={styles.alreadyHevis}>
              <a href="" className={styles.alreadyHevis}>
                Já tem uma conta?
              </a>
            </Link>
          </div>
          <Link to="/listagem" className={styles.buttonContainer}>
            <button className={styles.button}>Enter</button>
          </Link>
        </form>
      </section>
    </main>
  );
}
