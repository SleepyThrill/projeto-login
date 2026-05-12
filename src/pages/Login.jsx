import styles from "./Login.module.css";
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <main>
      <section className={styles.imagemSection}></section>
      <section className={styles.loginSection}>
        <form action="submit" className={styles.form}>
          <h1>Boingler</h1>
          <h2>Make Login</h2>
          <div className={styles.inputs}>
            <h3>Email</h3>
            <input type="text" placeholder="Digite seu e-mail" />
            <h3>Senha</h3>
            <input type="text" placeholder="Digite sua senha" />
            <Link to="/cadastro" className={styles.notHevis}>
              <a href="" className={styles.notHevis}>
                Não tem uma conta?
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
