import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog de Desarrollo Web y SEO | Mi Sitio Optimizado</title>
        <meta
          name="description"
          content="Artículos, guías y tutoriales prácticos sobre posicionamiento SEO, Core Web Vitals y Next.js."
        />
        <meta property="og:title" content="Blog de Desarrollo Web y SEO" />
        <meta
          property="og:description"
          content="Lee nuestros últimos artículos sobre optimización web y desarrollo moderno."
        />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="article" />
      </Head>

      <section className="card">
        <span className="badge">Artículos Técnicos</span>
        <h1>Blog Técnico de SEO</h1>
        <p className="subtitle">Guías prácticas para optimizar aplicaciones modernas.</p>

        <article style={{ borderTop: "1px solid #e2e8f0", paddingTop: "1.25rem", marginTop: "1rem" }}>
          <h2 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
            ¿Por qué usar Renderizado del Lado del Servidor (SSR) para SEO?
          </h2>
          <p style={{ color: "#475569" }}>
            El SSR permite que los motores de búsqueda como Google lean el contenido HTML completo desde el primer segundo, acelerando la indexación.
          </p>
        </article>
      </section>
    </>
  );
}