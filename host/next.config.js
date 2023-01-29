/** @type {import('next').NextConfig} */

const APP1_URL = "http://microfront1:3000";
const APP2_URL = "http://microfront2:3000";
const APP3_URL = "http://microfront3:80";

const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
   async rewrites() {
      return [
         {
            source: "/",
            destination: "/",
         },
         {
            source: "/app1",
            destination: `${APP1_URL}/app1`,
         },
         {
            source: "/app1/:path*",
            destination: `${APP1_URL}/app1/:path*`,
         },
         {
            source: "/app2",
            destination: `${APP2_URL}/app2`,
         },
         {
            source: "/app2/:path*",
            destination: `${APP2_URL}/app2/:path*`,
         },
         {
            source: "/app3",
            destination: `${APP3_URL}/app3`,
         },
         {
            source: "/app3/:path*",
            destination: `${APP3_URL}/app3/:path*`,
         },
      ];
   },
}

module.exports = nextConfig
