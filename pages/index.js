import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("../components/LargeComponent"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Mi Sitio Optimizado | Inicio - SEO y Rendimiento en Next.js</title>
        <meta
          name="description"
          content="Aprende técnicas profesionales de optimización SEO, meta tags dinámicos y rendimiento web con Next.js."
        />
        <meta property="og:title" content="Mi Sitio Optimizado - Inicio" />
        <meta
          property="og:description"
          content="Descubre cómo posicionar tu aplicación web en Google con Next.js."
        />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="website" />
      </Head>

      <section className="card">
        <span className="badge">SEO & Rendimiento</span>
        <h1>Bienvenido a mi página optimizada</h1>
        <p className="subtitle">
          Aprende cómo mejorar el rendimiento, la velocidad de carga y el posicionamiento SEO en Next.js[cite: 3].
        </p>

        <Image
          src="/images/seo-image.png"
          width={800}
          height={400}
          alt="Ejemplo de imagen optimizada"
          className="hero-image"
          priority
        />
      </section>

      <DynamicComponent />
    </>
  );
}