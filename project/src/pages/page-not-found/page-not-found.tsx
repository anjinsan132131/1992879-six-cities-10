import { Link } from 'react-router-dom';
import styles from '../page-not-found/page-not-found.module.css';
import Header from '../../components/header/header';

function PageNotFound(): JSX.Element {
  return (
    <main className="page__main page__main--not-found">
      <title>Page not found</title>
      <div className="page__not-found-container container">
        <section className={styles.container}>
          <Header isNavVisible={false} />
          <h1>404</h1>
          <h2>Page not found</h2>
          <Link className={styles.link} to="/">Back to home page</Link>
        </section>
      </div>
    </main>
  );
}

export default PageNotFound;
