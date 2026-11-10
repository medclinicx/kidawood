import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";

// Set these in sanity/.env (see .env.example in this folder) or in the
// shell before running the Studio. The project ID is the same one used
// in the Next.js app's NEXT_PUBLIC_SANITY_PROJECT_ID variable.
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || "your-project-id";
const dataset = process.env.SANITY_STUDIO_DATASET || "production";

export default defineConfig({
  name: "kidawood",
  title: "Kidawood Studio",
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
