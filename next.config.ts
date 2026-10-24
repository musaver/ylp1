import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Webflow's runtime mutates the DOM directly; double-invoked effects in
  // Strict Mode would initialise it twice in development.
  reactStrictMode: false,

  // Keep the old static-export URLs working (e.g. /about.html -> /about).
  async redirects() {
    return [
      { source: "/index.htm", destination: "/", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/:page.html", destination: "/:page", permanent: true },
      { source: "/:dir/:page.html", destination: "/:dir/:page", permanent: true },
    ];
  },
};

export default nextConfig;
