import { defineConfig, globalIgnores } from "eslint/config";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import reactHooks from "eslint-plugin-react-hooks";
import { fixupPluginRules } from "@eslint/compat";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([
    globalIgnores(["src/__tests__/", "src/**/*.stories.*", "src/**/*.test.*"]),
    {
        extends: compat.extends(
            "plugin:@typescript-eslint/recommended",
            "plugin:jest-dom/recommended",
            "plugin:react/recommended",
            "plugin:storybook/recommended",
        ),

        plugins: {
            "@typescript-eslint": typescriptEslint,
            "react-hooks": fixupPluginRules(reactHooks),
        },

        languageOptions: {
            parser: tsParser,
            ecmaVersion: 2018,
            sourceType: "module",

            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },

                project: "./tsconfig.json",
            },
        },

        settings: {
            react: {
                version: "detect",
            },
        },

        rules: {
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-unused-vars": "off",
            "@typescript-eslint/explicit-member-accessibility": "off",
            "@typescript-eslint/interface-name-prefix": "off",
            "@typescript-eslint/explicit-function-return-type": "warn",
            "@typescript-eslint/no-inferrable-types": "off",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "off",
            "react/display-name": "error",
            "testing-library/await-async-query": "off",
        },
    },
]);