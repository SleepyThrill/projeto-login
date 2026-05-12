import styles from "./Listagem.module.css";
import { Link } from 'react-router-dom';

export default function Listagem() {
  return (
    <main>
      <section className={styles.section}>
        <h1 className={styles.h1}>Listagem de Usuários</h1>
        <Link to="/" className={styles.buttonContainer}><button className={styles.button}>Voltar</button></Link>
        <table>
          <tr className={styles.LinhaGuia}>
            <th>E-mail</th>
            <th>Senha</th>
            <th className={styles.LinhaGuia}>Editar</th>
            <th className={styles.LinhaGuia}>Excluir</th>
          </tr>

          <tr>
            <td>jairbobolaro@gmail.com</td>
            <td>22naveia</td>
            <td className={styles.BotaoAdmin}>📝</td>
            <td className={styles.BotaoAdmin}>❌</td>
          </tr>

          <tr>
            <td>GeusaSilva@yahoo.com.br</td>
            <td>euamomeucachorro123</td>
            <td className={styles.BotaoAdmin}>📝</td>
            <td className={styles.BotaoAdmin}>❌</td>
          </tr>
        </table>
      </section>
    </main>
  );
}
