// vite.config.js
import { defineConfig } from "vite";

// Get the repository name from your GitHub repository URL
// Replace 'resumeBuilder' with your actual repository name if different
const repoName = "my-resume";

export default defineConfig({
  // Base path for GitHub Pages deployment
  // Use '/' for deployment to root domain or custom domain
  // Use '/repositoryName/' for deployment to GitHub Pages project site
  base: `/${repoName}/`,

  // Build configuration
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },

  // Server configuration for development
  server: {
    open: true,
  },
});
