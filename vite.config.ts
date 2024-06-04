import react from "@vitejs/plugin-react";
import dotEnv from "dotenv";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

dotEnv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  define: {
    "process.env.VITE_OPEN_API_KEY": JSON.stringify(
      process.env.VITE_OPEN_API_KEY
    ),
  },
});
