import Image from 'next/image';

// Styles
import styles from './page.module.scss';

export default function Home() {
  return (
    <main>
      <header>
        <nav className="nav-bar">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/">Github</a>
            </li>

            <li>
              <a href="/">Download Template</a>
            </li>
          </ul>
        </nav>
      </header>

      <section></section>

      <footer></footer>
    </main>
  );
}
