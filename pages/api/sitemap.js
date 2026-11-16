const BASE_URL = "https://mi-sitio.com";

// Simulación de consulta a Base de Datos o CMS (puedes reemplazarlo por un fetch real a tu API/DB)
async function obtenerRutasDesdeCMS() {
  // Ejemplo de datos provenientes de una base de datos o CMS headless (Strapi, Sanity, WordPress, etc.)
  const postsDesdeDB = [
    { slug: "guia-seo-nextjs", updatedAt: "2026-11-10" },
    { slug: "optimizacion-core-web-vitals", updatedAt: "2026-11-14" },
    { slug: "meta-tags-open-graph", updatedAt: "2026-11-16" },
  ];

  return postsDesdeDB.map((post) => ({
    url: `/blog/${post.slug}`,
    lastmod: post.updatedAt,
  }));
}

export default async function handler(req, res) {
  // 1. Rutas estáticas principales
  const rutasEstaticas = [
    { url: "/", lastmod: "2026-11-16" },
    { url: "/blog", lastmod: "2026-11-16" },
    { url: "/contacto", lastmod: "2026-11-16" },
  ];

  // 2. Rutas dinámicas obtenidas desde la base de datos o CMS
  const rutasDinamicas = await obtenerRutasDesdeCMS();

  // 3. Combinamos todas las rutas
  const todasLasRutas = [...rutasEstaticas, ...rutasDinamicas];

  // 4. Generamos el XML completo
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${todasLasRutas
      .map(
        (ruta) => `
      <url>
        <loc>${BASE_URL}${ruta.url}</loc>
        <lastmod>${ruta.lastmod}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>${ruta.url === "/" ? "1.0" : "0.8"}</priority>
      </url>`
      )
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}