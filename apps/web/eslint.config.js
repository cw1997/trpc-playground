import baseConfig, { restrictEnvAccess } from "@trpc-playground/eslint-config/base";
import nextjsConfig from "@trpc-playground/eslint-config/nextjs";
import reactConfig from "@trpc-playground/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
