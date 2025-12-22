// Site configuration
// This is set at build time based on the environment
export const siteConfig = {
  basePath: process.env.NODE_ENV === "production" ? "/cwc-website" : "",
};
