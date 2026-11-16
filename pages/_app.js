import "../styles/globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <header className="navbar">
        <div className="nav-container">
          <Link href="/" className="nav-logo">
            🚀 NextSEO
          </Link>
          <nav className="nav-links">
            <Link href="/">Inicio</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contacto">Contacto</Link>
          </nav>
        </div>
      </header>

      <main className="container">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;