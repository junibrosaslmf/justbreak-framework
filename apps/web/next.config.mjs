// ----------------------------------------------------------------------

const nextConfig = {
  trailingSlash: true,
  env: {
    DEV_API: "http://localhost:8888",
    PRODUCTION_API: "http://localhost:8888",
    GOOGLE_API: "",
  },
  images: {
    domains: ["flagcdn.com"],
  },
};

export default nextConfig;
