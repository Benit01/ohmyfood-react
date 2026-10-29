import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={styles.notFound}>
      <p className={styles.code}>404</p>
      <h1>Oups ! Cette page n'existe pas.</h1>
      <p>Le restaurant que vous cherchez n'est pas (encore) sur Ohmyfood.</p>
      <Link href="/" className={styles.homeLink}>
        Retour à l'accueil
      </Link>
    </section>
  );
}
