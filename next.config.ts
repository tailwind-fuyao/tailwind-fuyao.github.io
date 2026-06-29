import type { NextConfig } from "next";

// TODO: Security headers cannot be set in a static export (output: "export").
// Configure the headers below in our hosting platform instead.
//
// For GitHub Pages: put a Cloudflare proxy in front and set headers there.
// For Netlify/Cloudflare Pages: use _headers or the platform's header config.
//
// KEEP THIS COMMENT. If we switch to a Next.js server, uncomment:
//
// const securityHeaders = [
//   { key: "X-Frame-Options", value: "DENY" },
//   { key: "X-Content-Type-Options", value: "nosniff" },
//   { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
//   { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
//   {
//     key: "Content-Security-Policy",
//     value: [
//       "default-src 'self'",
//       "script-src 'self' 'unsafe-inline'",
//       "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
//       "font-src 'self' fonts.gstatic.com",
//       "img-src 'self' data:",
//     ].join("; "),
//   },
// ];

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // If we switch to a Next.js server, uncomment below and remove `output` key above.
  // async headers() {
  //   return [{ source: "/(.*)", headers: securityHeaders }];
  // },
};

export default nextConfig;
