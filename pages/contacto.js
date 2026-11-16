import Head from "next/head";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto y Consultoría SEO | Mi Sitio Optimizado</title>
        <meta
          name="description"
          content="Ponte en contacto con nuestro equipo para auditorías SEO, desarrollo en Next.js y optimización de rendimiento."
        />
        <meta property="og:title" content="Contacto - Mi Sitio Optimizado" />
        <meta
          property="og:description"
          content="Escríbenos para mejorar el posicionamiento y velocidad de tu sitio web."
        />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="website" />
      </Head>

      <section className="card">
        <span className="badge">Soporte y Auditorías</span>
        <h1>Contacto</h1>
        <p className="subtitle">¿Tienes dudas sobre optimización SEO? Envíanos un mensaje.</p>
        <p style={{ color: "#475569" }}>
          <strong>Correo electrónico:</strong> contacto@mi-sitio.com
        </p>
      </section>
    </>
  );
}