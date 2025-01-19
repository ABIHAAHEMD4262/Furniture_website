import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.ts", "**/*.tsx"], // Apply rules to TypeScript files
    rules: {
      "@typescript-eslint/no-unused-vars": "warn", // Change unused vars errors to warnings
      "import/no-anonymous-default-export": "off", // Disable anonymous default export rule
    },
  },
  {
    ignores: [
      "src/sanity/lib/client.ts",          // Ignore specific files
      "src/sanity/schemaTypes/product.ts", // Add any other paths if needed
    ],
  },
];

export default eslintConfig;
