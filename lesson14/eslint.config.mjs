import stylistic from "@stylistic/eslint-plugin";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginUnicorn from "eslint-plugin-unicorn";

export default tseslint.config({
    files: ["**/*.ts"],
    languageOptions: {
        parserOptions: {
            project: true,
            tsconfigRootDir: process.cwd(),
        },
    },
    plugins: {
        "@stylistic": stylistic,
        unicorn: eslintPluginUnicorn,
    },
    extends: [
        eslint.configs.recommended,
        ...tseslint.configs.recommended,
        ...tseslint.configs.stylistic,
    ],
    rules: {
        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": ["off"],
        "@typescript-eslint/consistent-indexed-object-style": "off",
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/explicit-member-accessibility": "error",
        "@typescript-eslint/no-shadow": "error",
        "@typescript-eslint/require-await": "error",
        "@typescript-eslint/explicit-function-return-type": [
            "error",
            {
                allowExpressions: true,
            },
        ],
        "@stylistic/indent": ["error", 4],
        "@stylistic/max-len": [
            "warn",
            {
                code: 140,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],
        "@stylistic/brace-style": ["warn"],
        "@stylistic/operator-linebreak": [
            "warn",
            "after",
            { overrides: { "?": "before", ":": "before" } },
        ],
        "@stylistic/quotes": ["warn", "single"],
        "@stylistic/semi": ["error", "always"],
        "@stylistic/comma-dangle": ["error", "never"],
        "@stylistic/no-multiple-empty-lines": ["error", { max: 2 }],
        "@stylistic/no-trailing-spaces": ["error", { skipBlankLines: false }],
        "@stylistic/eol-last": ["error", "always"],
        "@stylistic/space-infix-ops": "error",
        "@stylistic/arrow-spacing": "error",
        "@stylistic/comma-spacing": ["error", { before: false, after: true }],
        "@stylistic/keyword-spacing": ["error", { before: true, after: true }],
        "unicorn/filename-case": [
            "error",
            {
                case: "kebabCase",
            },
        ],
    },
});